Asymmetrik FHIR API Server
=====

__A REST Implementation for the [ONC FHIR Challenge](https://www.cccinnovationcenter.com/challenges/secure-api-server-showdown-challenge/)__

Implemented using node.js, typescript, and express.js

### To install and test:
```
> yarn install
> npm test
```

### To develop with hot typescript reloading:
*(starts server at http://localhost:3000 and watches /src for changes)*
```
> npm start
```

### To add new API endpoint routes:
1. Create a test for the route under /test/<your-new-route>.spec.ts

2. Create or modify a router class under /src/routes/<your-new-route>.router.ts

3. Add the new route to /src/server.ts:
```
...
import YourNewRouter from './routes/<your-new-route>.router'
...
private routes(): void {
  ...
  this.express.use('/an/existing/endpoint', ExistingRouter)
  this.express.use('/your/new/endpoint', YourNewRouter)
```
