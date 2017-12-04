Asymmetrik FHIR API Server
==========================
> A Rest implementation for the [ONC FHIR Challenge](https://www.cccinnovationcenter.com/challenges/secure-api-server-showdown-challenge/).

## Introduction

Our implementation uses ...

## Getting Started

Follow the instructions for below for setting up your environment. Once you have completed all the steps under installation. See either [Development](#Development), [Production](#Production), or [Testing](#Testing). You can test production locally but this requires you to have generated a PEM and Key. Instructions for how to set this up locally are under the [Production](#Production) instructions.

### Installation

1. Install the latest LTS for [Node.js](https://nodejs.org/en/).
2. Run `npm install`.  If you prefer yarn, you can also run `yarn`.

### Development

There is a development script setup with Nodemon to watch for changes. Once you start this script, it will watch files in the src directory and restart the server anytime you make a change.

To start local development, run `npm run nodemon` and open your browser to [localhost:3000](http://localhost:3000).

### Production

You can test production locally. Before you can, you will need to generate a self-signed certificate. You can do this with `openssl` as long as you have it installed on your system. Once complete, make sure you set the `HTTPS_KEY_PATH` and `HTTPS_CERT_PATH` environment variables or you set the path in the `src/env/production.js` file, under security. When you pull up the app in the browser, you will have to allow self-signed certs in order to continue. This is fine for local development but you should get real certs for an actual production deploy. See [Generate self signed certs](#Generate-self-signed-certs)

To test production locally, run `npm start` and open your browser to [https://localhost:3000](https://localhost:3000).

Before deploying to production, obtain valid certs and change the port in `src/env/production` to `443`.

#### Generate self signed certs

Make sure you have openssl installed and run the following commands.

```shell
openssl genrsa -out key.pem 2048
openssl req -new -sha256 -key key.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey key.pem -out cert.pem
```

### Testing

## API Documentation

API docs are generated during the setup phase. When you run `npm install`, there is a `postinstall` script that generates a web page to display the API documentation. It is written with Swagger based on the [OpenAPI Specification version 3.0.0](https://swagger.io/specification/). The web page to view the docs can be found in the `docs/dist` folder and must be deployed to a web server.  If you do not have access to a web server and have installed the project's minimum requirements. You can run `npm run serve-docs` in your terminal to start up a simple node.js server to host your docs. After running that, navigate to [localhost:3001](http://localhost:3001).

### Regenerating the docs

You will need to run one of two npm scripts. You can run `npm run build-docs` to generate them once or you can run `npm run watch-docs` to build them and watch for changes. `npm run watch-docs` is better for active development.