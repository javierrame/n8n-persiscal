const express = require('/home/node/uploader/node_modules/express');
const app = express();
app.use('/uploads', express.static('/uploads'));
app.listen(5679, () => {
  console.log('Servidor de archivos escuchando en puerto 5679');
});
