const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('docs'));
app.use(express.static('docs/dist'));

app.listen(PORT, () => console.log(`API Documentation available at localhost:${PORT}`));