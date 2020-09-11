let supportedSearchTransformations = {
  _count: function (value) {
    return { $limit: value };
  },
};

/**
 * Takes in a list of queries and wraps them in an $and block
 */
let buildAndQuery = function (queries) {
  return { $and: queries };
};

/**
 * Takes in a list of queries and wraps them in an $or block
 */
let buildOrQuery = function ({ queries, invert = false }) {
  return { [invert ? '$nor' : '$or']: queries };
};

/**
 * Builds query to get records where the value of the field equal to the value.
 * Setting invert to true will get records that are NOT equal instead.
 */
let buildEqualToQuery = function ({ field, value, invert = false }) {
  return { [field]: invert ? { $ne: value } : value };
};

let buildTokenQuery = function ({ systemPath, codePath, system, code }) {
  let queries = [];
  if (system) {
    queries.push(buildEqualToQuery({ field: systemPath, value: system }));
  }
  if (code) {
    queries.push(buildEqualToQuery({ field: codePath, value: code }));
  }
  return queries;
};

/**
 * Builds query to get records where the value of the field is [<,<=,>,>=,!=] to the value.
 */
let buildComparatorQuery = function ({ field, value, comparator }) {
  const mongoComparators = {
    gt: '$gt',
    ge: '$gte',
    lt: '$lt',
    le: '$lte',
    ne: '$ne',
    sa: '$gt',
    eb: '$lt',
  };
  return { [field]: { [mongoComparators[comparator]]: value } };
};

/**
 * Builds query to get records where the value of the field is in the specified range
 * Setting invert to true will get records that are NOT in the specified range.
 */
let buildInRangeQuery = function ({ field, lowerBound, upperBound, invert = false }) {
  if (invert) {
    return buildOrQuery({
      queries: [
        buildComparatorQuery({ field, value: lowerBound, comparator: 'lt' }),
        buildComparatorQuery({ field, value: upperBound, comparator: 'gt' }),
      ],
    });
  }
  return { [field]: { $gte: lowerBound, $lte: upperBound } };
};

/**
 * Builds query to retrieve records where the field exists (or not).
 */
let buildExistsQuery = function ({ field, exists }) {
  return { [field]: { $exists: exists } };
};

/**
 * Builds a query to get records where the value of the field key matches the given pattern and options.
 */
let buildRegexQuery = function ({ field, pattern, options }) {
  return { [field]: { $regex: pattern, $options: options } };
};

/**
 * Builds query to get records where the value of the field contains the value.
 * Setting caseSensitive to true will cause the regex to be case insensitive
 */
let buildContainsQuery = function ({ field, value, caseSensitive = false }) {
  return buildRegexQuery({
    field,
    pattern: value,
    options: caseSensitive ? '' : 'i',
  });
};

/**
 * Builds query to get records where the value of the field starts with the value.
 * Setting caseSensitive to true will cause the regex to be case insensitive
 */
let buildStartsWithQuery = function ({ field, value, caseSensitive = false }) {
  return buildRegexQuery({
    field,
    pattern: `^${value}`,
    options: caseSensitive ? '' : 'i',
  });
};

/**
 * Builds query to get records where the value of the field ends with the value.
 * Setting caseSensitive to true will cause the regex to be case insensitive
 */
let buildEndsWithQuery = function ({ field, value, caseSensitive = false }) {
  return buildRegexQuery({
    field,
    pattern: `${value}$`,
    options: caseSensitive ? '' : 'i',
  });
};

/**
 * TODO - WORK IN PROGRESS
 * Apply search result transformations
 * @param query
 * @param searchResultTransformations
 */
let applySearchResultTransformations = function ({ query, searchResultTransformations }) {
  Object.keys(searchResultTransformations).forEach((transformation) => {
    query.push(
      supportedSearchTransformations[transformation](searchResultTransformations[transformation])
    );
  });
  return query;
};

/**
 * If we should not include archived, add a filter to remove them from the results
 * @param query
 * @param archivedParamPath
 * @param includeArchived
 * @returns {*}
 */
let applyArchivedFilter = function ({ query, archivedParamPath, includeArchived }) {
  if (!includeArchived) {
    query.push({ $match: { [archivedParamPath]: false } });
  }
  return query;
};

/**
 * For mongo, this can just be an Equals query
 */
let buildTokenURIQuery = function ({ field, value }) {
  return buildEqualToQuery({ field, value });
};

/**
 * For mongo, this can just be an Equals query
 */
let buildTokenStringQuery = function ({ field, value }) {
  return buildEqualToQuery({ field, value });
};

/**
 * For mongo, this can just be an Equals query
 */
let buildTokenEqualToQuery = function ({ field, value }) {
  return buildEqualToQuery({ field, value });
};

/**
 * Apply paging
 * @param query
 * @param pageNumber
 * @param resultsPerPage
 * @returns {*}
 */
let applyPaging = function ({ query, pageNumber, resultsPerPage }) {
  // If resultsPerPage is defined, skip to the appropriate page and limit the number of results that appear per page.
  // Otherwise just insert a filler (to keep mongo happy) that skips no entries.
  let pageSelection = resultsPerPage
    ? [{ $skip: (pageNumber - 1) * resultsPerPage }, { $limit: resultsPerPage }]
    : [{ $skip: 0 }];

  // If resultsPerPage is defined, calculate the total number of pages as the total number of records
  // divided by the results per page rounded up to the nearest integer.
  // Otherwise if resultsPerPage is not defined, all of the results will be on one page.
  let numberOfPages = resultsPerPage ? { $ceil: { $divide: ['$total', resultsPerPage] } } : 1;
  query.push({
    $facet: {
      metadata: [
        { $count: 'total' },
        { $addFields: { numberOfPages: numberOfPages } },
        { $addFields: { page: pageNumber } }, // TODO may need some additional validation on this.
      ],
      data: pageSelection,
    },
  });
  return query;
};

/**
 * Assembles a mongo aggregation pipeline
 * @param joinsToPerform - List of joins to perform first through lookups
 * @param matchesToPerform - List of matches to perform
 * @param searchResultTransformations
 * @param implementationParameters
 * @param includeArchived
 * @param pageNumber
 * @param resultsPerPage
 * @returns {Array}
 */
let assembleSearchQuery = function ({
  joinsToPerform,
  matchesToPerform,
  tokenMatches = [],
  searchResultTransformations,
  implementationParameters,
  includeArchived,
  pageNumber,
  resultsPerPage,
}) {
  let query = [];
  let toSuppress = {};

  // Check that the necessary implementation parameters were passed through
  let { archivedParamPath } = implementationParameters;
  if (!archivedParamPath) {
    throw new Error("Missing required implementation parameter 'archivedParamPath'");
  }

  // Construct the necessary joins and add them to the aggregate pipeline. Also follow each $lookup with an $unwind
  // for ease of use.
  if (joinsToPerform.length > 0) {
    for (let join of joinsToPerform) {
      let { from, localKey, foreignKey } = join;
      query.push({
        $lookup: {
          from: from,
          localField: localKey,
          foreignField: foreignKey,
          as: from,
        },
      });
      query.push({ $unwind: `$${from}` });
      toSuppress[from] = 0;
    }
  }

  // Construct the necessary queries for each match and add them the pipeline.
  // Token matches are treated like normal matches for Tokens
  matchesToPerform = matchesToPerform.concat(tokenMatches);

  if (matchesToPerform.length > 0) {
    let listOfOrs = [];
    for (let match of matchesToPerform) {
      if (match.length === 0) {
        match.push({});
      } else {
        listOfOrs.push(buildOrQuery({ queries: match }));
      }
    }
    query.push({ $match: buildAndQuery(listOfOrs) });
  }

  // Suppress the tables that were joined from being displayed in the returned query. TODO might not want to do this.
  if (Object.keys(toSuppress).length > 0) {
    query.push({ $project: toSuppress });
  }

  query = applyArchivedFilter({ query, archivedParamPath, includeArchived });
  query = applySearchResultTransformations({
    query,
    searchResultTransformations,
  });
  query = applyPaging({ query, pageNumber, resultsPerPage });

  return query;
};

module.exports = {
  assembleSearchQuery,
  buildAndQuery,
  buildComparatorQuery,
  buildContainsQuery,
  buildEndsWithQuery,
  buildEqualToQuery,
  buildTokenQuery,
  buildTokenURIQuery,
  buildTokenStringQuery,
  buildTokenEqualToQuery,
  buildExistsQuery,
  buildOrQuery,
  buildInRangeQuery,
  buildStartsWithQuery,
  supportedSearchTransformations,
};
