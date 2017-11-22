Asymmetrik FHIR API Server
==========================
> A Rest implementation for the [ONC FHIR Challenge](https://www.cccinnovationcenter.com/challenges/secure-api-server-showdown-challenge/).

## Introduction

Our implementation uses ...

## Getting Started

### Installation

### Testing

## API Documentation

API docs are generated during the setup phase. When you run `npm install`, there is a `postinstall` script that generates a web page to display the API documentation. It is written with Swagger based on the [OpenAPI Specification version 3.0.0](https://swagger.io/specification/). The web page to view the docs can be found in the `docs/dist` folder and must be deployed to a web server.  If you do not have access to a web server and have installed the project's minimum requirements. You can run `npm run serve-docs` in your terminal to start up a simple node.js server to host your docs. After running that, navigate to [localhost:3001](http://localhost:3001).

### Regenerating the docs

You will need to run one of two npm scripts. You can run `npm run build-docs` to generate them once or you can run `npm run watch-docs` to build them and watch for changes. `npm run watch-docs` is better for active development.