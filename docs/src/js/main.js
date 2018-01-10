// Load in our css
require('docs/css/core.scss');

// import all necessary javascript
const swaggerUIStandalonePreset = require('swagger-ui-dist/swagger-ui-standalone-preset');
const swaggerUIBundle = require('swagger-ui-dist/swagger-ui-bundle');
const { presets, plugins } = swaggerUIBundle;

function main () {
  window.ui = swaggerUIBundle({
    url: 'openapi.json',
    dom_id: '#site-documentation',
    layout: 'StandaloneLayout',
    presets: [
      presets.apis,
      swaggerUIStandalonePreset
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
