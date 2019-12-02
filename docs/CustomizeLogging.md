## Overview

If you simply need to use the core fhir server `winston` Container you can do so by requiring it from `@asymmetrik/fhir-server-core`

```javascript
// Your patient.service.js
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
const { loggers } = require('@asymmetrik/node-fhir-server-core');
const logger = loggers.get('default');

module.exports.search = async (args, context) => {
  logger.info('Patient >>> Search');

  let BundleEntry = require(resolveSchema(args.base_version, 'bundleentry'));
  let Bundle = require(resolveSchema(args.base_version, 'bundle'));
  let Patient = require(resolveSchema(args.base_version, 'patient'));

  // You will need to build your query based on the sanitized args
  let query = { my: 'query' };
  let results = db.patients.find(query);
  let patients = results.map(result => new Patient(result));
  let entries = patients.map(patient => new BundleEntry({ resource: patient }));
  return new Bundle({ entry: entries });
};
```

## Adding Custom Transports

You can access the core `winston` Transports manually using `Server.configureLoggers`.

#### `configureLoggers`

- **Description:** Gain access to core `node-fhir-server-core` Winston transports and container.
- **Return:** `this` for chaining
- **Example:**

```javascript
// Example server with write to file logging
const { initialize } = require('@asymmetrik/node-fhir-server-core');

const fhirServerConfig = {
  profiles: {
    Patient: {
      service: './patient.service.js',
      versions: ['4_0_0'],
    },
  },
};

const addFileLogger = (container, transports) => {
  let transport = new transports.File({ filename: 'somefile.log' });
  let logger = container.get('default');
  logger.add(transport);
};

// Here!
let server = initialize(fhirServerConfig).configureLoggers(addFileLogger);

server.listen(3000, () => {
  console.log('FHIR Server listening at at localhost:3000');
});
```

Now when something is deemed to be logged by the server's `default` logger, it will also be logged to the file `somefile.log`.
