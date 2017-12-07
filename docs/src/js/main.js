// Load in our css
require('docs/css/core.scss');

// import all necessary javascript
const SwaggerUIStandalonePreset = require('swagger-ui-dist/swagger-ui-standalone-preset');
const SwaggerUIBundle = require('swagger-ui-dist/swagger-ui-bundle');
const { presets, plugins } = SwaggerUIBundle;

function main () {
  window.ui = SwaggerUIBundle({
    url: 'openapi.json',
    dom_id: '#site-documentation',
    layout: 'StandaloneLayout',
    presets: [
      presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      plugins.DownloadUrl
    ],
    defaultModelExpandDepth: 0,
    validatorUrl: false
  });
}

if (document.readyState === 'complete') {
  main();
} else {
  window.onload = main;
}
