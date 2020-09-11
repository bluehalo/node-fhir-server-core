# `FHIR-Secrets`

> AWS KMS Secrets retrieval promisified.

# Install

```shell
yarn add @asymmetrik/fhir-secrets
```

## Prerequisites

- You will need an AWS Account.
- You should have the CiphertextBlob you need to decrypt.
- You can [authenticate with AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).

## Usage

Depending on where you are running this code, the setup portion may change. If you have a default AWS profile with region and everything else set, you can use the decrypt function as follows:

```javascript
const secrets = require('@asymmetrik/fhir-secrets');

// This is output when you encrypt a secret with kms
// https://docs.aws.amazon.com/cli/latest/reference/kms/encrypt.html
let CiphertextBlob = 'somefakeblobcontent=';

// Lets assume this blob contains metadata for a plaintext secret with value foobar
secrets
  .decrypt({ CiphertextBlob })
  .then((secret) => {
    console.log(secret);
    // logs foobar
  })
  .catch(console.error);
```

If you need to configure the setup process with region or other properties in the client class constructor, you can do so and chain the process.

```javascript
const secrets = require('@asymmetrik/fhir-secrets');

secrets
  .configure({ region: 'us-east-2' })
  .decrypt({ CiphertextBlob: 'somefakeblobcontent=' })
  .then((secret) => doThingsWithSecret())
  .catch(console.error);
```

See [fhir-secrets tests](https://github.com/Asymmetrik/phx-tools/blob/master/packages/fhir-secrets/index.test.js) for more usage examples.

## Methods

### configure

> Configures the service class with any AWS or service class specific configurations.

This takes a single options object. See https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#constructor-property. It returns `this` so you can immediately call `decrypt` after configuring it.

### decrypt

> Wrapper on kms.decrypt but returns a promise which resolves the plain text of the secret.

This takes a single options object. See https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#decrypt-property. The only necessary property from this is `CiphertextBlob`.
