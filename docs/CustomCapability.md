## Overview

The capability statement now allows for the configuration of what information gets returned in the `/metadata` route. 

## Customizing the Capability Statement 

### Creating a Statement Generator
You can include this code where you define your Asymmetrik Server configurations or include it in another file and require it in. For this example, we will go with the latter option.

First, we're going to require the Asymmetrik FHIR Server source code. This will allow us to have access to the class that is responsible for generating the Capability Statement so that we can create our own.

```javascript
// require the Asymmetrik FHIR Server
const FHIRServer = require('@asymmetrik/node-fhir-server-core');
```
Then we'll create a function that will require the `CapabilityStatement` class, and return a new instance that contains your information. Please make sure you remain compliant with the FHIR specification.

```javascript
const base_version = '4_0_0'

let customCapabilityStatement = resources => {
  let CapabilityStatement = require(FHIRServer.resolveSchema(base_version, 'CapabilityStatement'));

  return new CapabilityStatement({
    status: 'draft',
    date: '20190418',
    publisher: 'The Publisher',
    kind: 'instance',
    software: {
      name: 'My super cool Software',
      version: '1.0.0',
      releaseDate: '20190418'
    },
    implementation: {
      description: 'Your FHIR Server',
      url: 'http://yourfhirserver.com/'
    },
    fhirVersion: base_version.replace(/_/g, '.'),
    acceptUnknown: 'extensions',
    format: ['application/fhir+json'],
    rest: resources
  });
};
```

Next, we're going to create a custom Security Statement. This is separate from the Capability Statement. It provides information about the security of the current implementation. 
If provided, this will be derived from the information you pass to the 'security' property from the FHIR Server Config.
The below Security Statement is the default one provided by Asymmetrik, but can be customized to fit your needs. 

```javascript
/**
 * Generates a custom Security Statement
 * @param {object} securityUrls - This is separate from the Capability Statement. It provides information about the Security of the current implementation.
 * If provided, this will be derived from the information you pass to the 'Security' property from the FHIR Server Config.
 * The below Security Statement is returned by default. This is probably only a place holder for now.
 */
let customSecurityStatement = securityUrls => {
  return {
    cors: true,
    service: [
      {
        coding: [
          {
            system: 'http://hl7.org/fhir/restful-security-service',
            code: 'SMART-on-FHIR'
          },
        ],
        text: 'Custom OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)'
      },
    ],
    extension: [
      {
        url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
        extension: securityUrls
      }
    ]
  };
};
```

Lastly, we'll export a `generateStatements` function. This function has an 'args' parameter which will pass in information about the route. We'll be taking advantage of this to grab the version of the FHIR Spec the user is intending to use.
We'll also map our two custom functions we've just created and assign them to the methods the source code is expecting them to be.

```javascript
/**
 * Exports Custom functions to be used in Server Configuration
 * @param {object} args - This will pass us the FHIR Spec Version of the Capability Statement. This comes from the route you're hitting.
 */
module.exports.generateStatements = (args) => {
  base_version = args.base_version;
  return {
    makeStatement: customCapabilityStatement,
    securityStatement: customSecurityStatement
  };
};
```

### Using the Statement Generator in the Config
Now that we've built out our Statement Generator and have customized the Capability Statement info to our liking, we can add it to our configuration by doing the following: 
```javascript
const FHIRServer = require('@asymmetrik/node-fhir-server-core');
const generateCapabilityStatement = require('path to your statement generator file').generateStatements; // require the statement generator file

let config = {
  ...other config options,
  statementGenerator: generateCapabilityStatement,
  security: [] // Remember: What you assign to this will be what your custom security statement will use. Omitting this entirely will not output any security information. Leaving it blank, like it is here, will output the default info we have in the above 'customSecurityStatement' function.
};

let server = FHIRServer.initialize(config);
...
```

And voila! You can now output a custom Capability Statement.
