# `SOF-Scope-Checker`

> Utility for validating patient and user level scopes for the SMART on FHIR specification.

# Install

```shell
yarn add @asymmetrik/sof-scope-checker
```

## Usage

```
const scopeChecker = require('@asymmetrik/sof-scope-checker');

let hasValidScopes = (name, action) => {
  return function (req, res, next) {
    let scopes = parseScopes(req && req.user);
    let { error, success } = scopeChecker(name, action, scopes);

    // Log the error, wrap in operation outcome or GraphQL specific error
    // You can check the type of the error as well since we use custom errors

    if (error) {
      next(error);
    } else {
      next();
    }
  }
};

app.get(
  '/Patient',
  hasValidScopes('Patient', 'read'),
  patientController
)
```

See [sof-scope-checker tests](https://github.com/Asymmetrik/phx-tools/blob/master/packages/sof-scope-checker/index.test.js) for more usage examples.

NOTE: The error returned is an extension of the native JS error. It adds a type property to the error which can have a value of 'internal' representing a misconfiguration, or 'forbidden' representing a case where the scopes are not sufficient.

## Arguments

`@asymmetrik/sof-scope-checker` exports a single function which takes three arguments. 

#### `name`
Name of the resource or patient. 

Type: `String`  
Required: `true`  

#### `action`
The action the user wants to take. Can be `read`, `write`, or `*`.

Type: `String`  
Required: `true`  

#### `scopes`
The scopes available to the user.

Type: `Array<String>`  
Required: `true`  
