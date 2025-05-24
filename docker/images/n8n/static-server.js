// static-server.js completo

const express = require('/home/node/uploader/node_modules/express');
const multer = require('/home/node/uploader/node_modules/multer');
const app = express();

const upload = multer({ dest: '/uploads' });

// Endpoint para subir una imagen
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No se subió ningún archivo.' });
  }

  const hostname = process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost';
  const fileUrl = `https://${hostname}/uploads/${file.filename}`;

  res.json({ url: fileUrl });
});

// Servir imágenes estáticas
app.use('/uploads', express.static('/uploads'));

// Escuchar en el puerto que Render provee
const port = process.env.PORT || 5679;
app.listen(port, () => {
  console.log(`Servidor de archivos escuchando en puerto ${port}`);
});
