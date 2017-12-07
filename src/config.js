/**
 * @name exports
 * @description Export default configurations for the FHIR server
 */
module.exports = {
	swaggerHelperDefinitions: 'src/server/*/definitions/*.json',
	swaggerRootDefinitions: 'src/server/*/*.swagger.json',
	conformanceStatements: 'src/server/*/conformance.js',
	routes: 'src/server/**/*.routes.js'
};
