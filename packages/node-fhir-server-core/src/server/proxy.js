const httpProxy = require('http-proxy');
const http = require('http');
const https = require('https');
const url = require('url');

const httpAgent = new http.Agent({
  keepAlive: true
});
const httpsAgent = new https.Agent({
  keepAlive: true
});

module.exports = function (actualPort, actualHost= 'http://localhost') {
  const endpoint = `${actualHost}:${actualPort}/4_0_0`;
  const proxyOptions = {
    headers: { 'content-type': 'application/json' },
    changeOrigin: true,
    prependPath: true,
    secure: true
  };
  const proxy = httpProxy.createProxyServer(proxyOptions);
  proxy.on('error', (_, __, res) => {
    if (!res.headersSent) {
      res.status(502).send('Bad gateway.');
    } else {
      res.end();
    }
  });

  const stripPathFn = req => {
    req.url = req.originalUrl.replace('/api/v1', '');
  };

  return function proxyHandler(req, res) {
    const target = Object.assign({}, url.parse(endpoint));
    const headers = Object.assign({}, proxyOptions.headers);
    stripPathFn(req);
    proxy.web(req, res, {
      target,
      headers,
      agent: target.protocol === 'https:' ? httpsAgent : httpAgent
    });
  };
};