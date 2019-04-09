Contributing
============

First off, Contributions are always welcome and we appreciate any help you can offer. Please take a moment to read the entire contributors guide.

## Before you begin
Below are some general guidelines we try to stick to on all of our FHIR related repositories. When contributing to `@asymmetrik/node-fhir-server-core`, we do ask that you do your best to follow these guidelines.

### Branch Organization
We do our best to keep `master` in a stable state. We also started cutting release branches, for example, `release/1.4.0`, to make it easier to contribute to specific versions and maintain older versions. When you submit pull requests, please make sure to fork from and submit back to `master`.

### Semantic Versioning
We try to follow [semantic versioning](https://semver.org/) for this repo as close as we can. If we ever publish breaking changes, there will be something in the release notes. There have been occasionally breaking changes in the past on minor updates, which is something we won't be doing going forwards.

### Conventional Commits
We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) which helps keep commit messages clean and useful. It also is helpful because we use the changelog cli generator (`yarn changelog`) to automatically generate changelogs when cutting new releases.

### Style Guide
In an attempt to never have a debate about style or tabs versus spaces in a PR, we use [prettier](https://prettier.io/), an opinionated code formatter. We ask everyone to run this before submitting a pull request and have some general configurations defined in our package.json.

## Getting Started
Getting setup is really easy, however, this project does require that you have Node.js and preferrably yarn installed. You can install the latest LTS for [Node.js here](https://nodejs.org/en/).

### Installation
1. [Fork](https://help.github.com/articles/fork-a-repo/) this repo to your GitHub account and clone it.
2. Run `yarn install`.

### Development Workflow
After cloning and installing all the dependencies, there are several commands we can use for local development.

* `yarn lint` - Lint's everything in src directory
* `yarn jest` - Run's jest over all tests in src directory
* `yarn test` - Run's yarn lint and yarn jest together
* `yarn nodemon` - Start's a development server with live reload. Available on `localhost:3000` unless you specify your own PORT.

### Production Workflow

* `yarn start` - Runs a production version. No live reload and NODE_ENV is defaulted to `production`.

#### Optional
You can test the server in https mode if you provide certs. For local testing, you can easily generate self signed certs. To generate self signed certs, run the following commands:

```shell
openssl genrsa -out key.pem 2048
openssl req -new -sha256 -key key.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey key.pem -out cert.pem
```

Then populate the `HTTPS_KEY_PATH` and `HTTPS_CERT_PATH` environment variables before starting the server.

## Pull Request Checklist
When submitting a pull request, please make sure you have completed the following otherwise the pull request will not be accepted.

1. Run `yarn prettier`.
2. `yarn test` passes. This is integrated in our CI so if this fails the PR will be automatically blocked until tests pass.
3. If documentation needs to be added, include a snippet of what should be added and where.
4. If new code is being introduced or a bug is being fixed, add relevant test cases.
5. Pull request base branch is set to `master`. All pull requests should be forked from and merged back to `master`.

## Release process
When cutting a release, the following steps need to be performed.

1. `package.json` needs to have a version update based on the content being released, remember semver.
2. Changelogs should be generated with `yarn changelog`.
3. Create a release branch with the convention `release/x.x.x`.
4. Create a tag for the version, naming convention is just the version, so x.x.x.
5. Push the tag to github.
6. Publish to npm.
6. Draft a release in the release tab with release notes. You can copy these from the changelog, but feel free to add any additional information if necessary or if it is missing from the changelogs. Follow previous releases if you are unsure on the format.


## Resources
For more information about how things are designed and how they work, please consult our [wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki).

## Issues
Please file your issues [here](https://github.com/Asymmetrik/node-fhir-server-core/issues) and try to provide as much information in the template as possible/relevant.
