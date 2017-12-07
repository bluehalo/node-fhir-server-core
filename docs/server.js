'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('docs'));
app.use(express.static('docs/dist'));

app.listen(PORT, () => {
  console.log('[\x1B[34mExpress\x1B[39m] \x1B[1mAPI Documentation Server\x1B[1m');
  console.log('\x1B[37m----------------------------------\x1B[39m');
  console.log(`\x1B[1mAccess docs:\x1B[1m \x1B[35mhttp://localhost:${PORT}\x1b[39m\x1B[22m`);
});
