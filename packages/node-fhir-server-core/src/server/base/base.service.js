const { container } = require('../winston.js');
let logger = container.get('default');
const path = require('path');
const request = require('superagent');
const errors = require('../utils/error.utils');

const makeResultBundle = (results, res, baseVersion, type) => {
  let Bundle = require(`../resources/${baseVersion}/schemas/bundle`);
  let BundleLink = require(`../resources/${baseVersion}/schemas/bundlelink`);
  let BundleEntry = require(`../resources/${baseVersion}/schemas/bundleentry`);
  let selfLink = new BundleLink({
    url: `${res.req.protocol}://${path.join(res.req.get('host'), res.req.baseUrl)}`,
    relation: 'self',
  });

  let bundle = new Bundle({ link: selfLink, type: type });
  let entries = [];
  results.forEach((result) => {
    entries.push(
      new BundleEntry({
        response: result,
        request: result,
      }),
    );
  });
  bundle.entry = entries;
  bundle.total = entries.length;
  return bundle;
};
module.exports.batch = (req, res) =>
  new Promise((resolve, reject) => {
    logger.info('Base >>> batch');
    let { resourceType, type, entry: entries } = req.body;
    let { base_version: baseVersion } = req.params;
    if (resourceType !== 'Bundle') {
      return reject(
        errors.internal(
          `Expected 'resourceType: Bundle'. Received 'resourceType: ${resourceType}'.`,
          baseVersion,
        ),
      );
    }
    if (type.toLowerCase() !== 'batch') {
      return reject(
        errors.internal(`Expected 'type: batch'. Received 'type: ${type}'.`, baseVersion),
      );
    }
    let { protocol, baseUrl } = req;

    let requestPromises = [];
    let results = [];
    entries.forEach((entry) => {
      let { url, method } = entry.request;
      let resource = entry.resource;
      let destinationUrl = `${protocol}://${path.join(
        req.headers.host,
        baseUrl,
        baseVersion,
        url,
      )}`;
      results.push({
        method: method,
        url: destinationUrl,
      });

      requestPromises.push(
        new Promise((r) => {
          r(
            request[method.toLowerCase()](destinationUrl)
              .send(resource)
              .set('Content-Type', 'application/json+fhir'),
          );
        }).catch((err) => {
          return err;
        }),
      );
    });

    return Promise.all(requestPromises).then((responses) => {
      for (let i = 0; i < responses.length; i++) {
        results[i].status = responses[i].status;
      }
      // ver como resolver esta parte!!!
      let resultsBundle = makeResultBundle(results, res, baseVersion, 'batch');
      resolve(resultsBundle);
    });
  });

module.exports.transaction = (req, res) =>
  new Promise((resolve, reject) => {
    logger.info('Base >>> transaction');
    let { resourceType, type, entry: entries } = req.body;
    let { base_version: baseVersion } = req.params;
    if (resourceType !== 'Bundle') {
      return reject(
        errors.internal(
          `Expected 'resourceType: Bundle'. Received 'resourceType: ${resourceType}'.`,
          baseVersion,
        ),
      );
    }
    if (type.toLowerCase() !== 'transaction') {
      return reject(
        errors.internal(`Expected 'type: transaction'. Received 'type: ${type}'.`, baseVersion),
      );
    }
    let { protocol, baseUrl } = req;

    let requestPromises = [];
    let results = [];
    entries.forEach((entry) => {
      let { url, method } = entry.request;
      let resource = entry.resource;
      let destinationUrl = `${protocol}://${path.join(
        req.headers.host,
        baseUrl,
        baseVersion,
        url,
      )}`;
      results.push({
        method: method,
        url: destinationUrl,
      });
      requestPromises.push(
        new Promise((r) => {
          r(
            request[method.toLowerCase()](destinationUrl)
              .send(resource)
              .set('Content-Type', 'application/json+fhir'),
          );
        }).catch((err) => {
          return err;
        }),
      );
    });

    return Promise.all(requestPromises).then((responses) => {
      for (let i = 0; i < responses.length; i++) {
        results[i].status = responses[i].status;
      }
      let resultsBundle = makeResultBundle(results, res, baseVersion, 'transaction');
      resolve(resultsBundle);
    });
  });
