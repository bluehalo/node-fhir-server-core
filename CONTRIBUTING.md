Contributing
============

First off, Contributions are always welcome and we appreciate any help you can offer. Please take a moment to read the entire contributors guide.

General guidelines for contributing to `@asymmetrik/fhir-server-core` are listed below as well as some basic steps to getting the project up and running locally. Towards the bottom of the documentation you will see some descriptions of how various pieces work to help you better understand the architecture.

## Getting Started
Getting setup is really easy, just follow the installation steps below. For more instructions for each environment, dev, prod, testing, see their respective sections below.

### Installation
1. Install the latest LTS for [Node.js](https://nodejs.org/en/).
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo to your GitHub account and clone it.
3. Run `yarn install`.

### Development
There is a development script setup with Nodemon to watch for changes. Once you start this script, it will watch files in the src directory and restart the server anytime you make a change.

To start local development, run `yarn nodemon` and open your browser to [localhost:3000](http://localhost:3000).

### Production
You can test production locally. Before you can, you will need to generate a self-signed certificate. You can do this with `openssl` as long as you have it installed on your system. Once complete, make sure you set the `HTTPS_KEY_PATH` and `HTTPS_CERT_PATH` environment variables or you set the path in the config passed into this module (`config.server.ssl`). When you pull up the app in the browser, you will have to allow self-signed certs in order to continue. This is fine for local development but you should get real certs for an actual production deploy. See [Generate self signed certs](#Generate-self-signed-certs)

To test production locally, run `yarn start` and open your browser to [https://localhost:3000](https://localhost:3000).

Before deploying to production, obtain valid certs and change the port in the config to `443`.

### Testing
We use jest for testing and collect coverage from just about everything in the src directory. You can run tests by simple running `yarn test`. Please try to add more tests if you are introducing new features.

#### Generate self signed certs
Make sure you have openssl installed and run the following commands.

```shell
openssl genrsa -out key.pem 2048
openssl req -new -sha256 -key key.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey key.pem -out cert.pem
```

## Filing Issues
Please file your issues [here](https://github.com/Asymmetrik/node-fhir-server-core/issues) and try to provide as much information in the template as possible/relevant.

## Branching
While we do not enforce this with an iron fist, we do encourage you use the following branching strategy.

* For features or documentation updates. use `feat/<feature-name>`.
* For bugs, use `fix/<bug-or-issue-number>`.

### Commit messages
We want to simplify the process for generating change logs. We are going to start using the conventional commit standard as many tools can use this for automation. We prefer you use these messages when committing but if not, we will try to reformat them when we merge your PR's into this format.

## Submitting pull requests
Before submitting a pull request, try to make sure you have done the following.

1. Run `yarn prettier`. This formats code so we won't need any debates on style.
2. Run all the tests with `yarn test`.
3. If documentation should be added, please add it to the correct location. If the [Wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki) should be updated, make note of that in your PR and try to prepare a snippet we can add once your PR is merged.

Once everything is ready to go, submit a PR to the `master` branch.

## Resources
For more information about how things are designed and how they work, please consult our [wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki).
