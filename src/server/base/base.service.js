const {container} = require('../winston.js');
let logger = container.get('default');
const path = require('path');
const request = require('superagent');
const errors = require('../utils/error.utils');


const makeBatchResultBundle = (requests, responses, res, baseVersion) => {
	let Bundle = require(`../resources/${baseVersion}/schemas/bundle`);
	let BundleLink = require(`../resources/${baseVersion}/schemas/bundlelink`);
	let BundleEntry = require(`../resources/${baseVersion}/schemas/bundleentry`);
	let selfLink = new BundleLink({
		url: `${res.req.protocol}://${path.join(res.req.get('host'), res.req.baseUrl)}`,
		relation: 'self',
	});
	let bundle = new Bundle({
		link: selfLink,
		timestamp: new Date().toISOString(),
		type: 'batch-response'
	});
	let entries = [];
	responses.forEach((response, i) => {
		let request = requests[i];
		entries.push(
			new BundleEntry({
				response: response,
				resource: response.body,
				request: request
			}),
		);
	});
	bundle.entry = entries;
	bundle.total = entries.length;
	return bundle;
};

module.exports.batch = (req, res) => new Promise((batchResolve, batchReject) => {
	logger.info('Base >>> batch');
	let {resourceType, type, entry: entries} = req.body;
	let {base_version: baseVersion} = req.params;
	if (resourceType !== 'Bundle') {
		return batchReject(errors.internal(`Expected 'resourceType: Bundle'. Received 'resourceType: ${resourceType}'.`,
			baseVersion));
	}
	if (type.toLowerCase() !== 'batch') {
		return batchReject(errors.internal(`Expected 'type: batch'. Received 'type: ${type}'.`,
			baseVersion));
	}
	let {protocol, baseUrl} = req;

	let requestPromises = [];
	let requests = [];
	entries.forEach((entry) => {
		let {method, url} = entry.request;
		let resource = entry.resource;
		let destinationUrl = `${protocol}://${path.join(req.headers.host, baseUrl, baseVersion, url)}`;
		requests.push({
			method: method,
			url: destinationUrl,

		});
		requestPromises.push(new Promise((resolve, reject) => {
				resolve(request[method.toLowerCase()](destinationUrl)
					.send(resource)
					.set('Content-Type', 'application/json+fhir'));
			})
				.catch(err => {
					return (err);
				})
		);
	});
	return Promise.all(requestPromises)
		.then(responses => {
			let resultsBundle = makeBatchResultBundle(requests, responses, res, baseVersion);
			batchResolve(resultsBundle);
		});
});
