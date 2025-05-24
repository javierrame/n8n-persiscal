// static-server.js
const express = require('express');
const app = express();

app.use('/uploads', express.static('/uploads'));

const port = 5679;
app.listen(port, () => {
  console.log(`Static file server corriendo en http://localhost:${port}`);
});
