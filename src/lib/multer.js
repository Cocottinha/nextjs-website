// lib/multer.js
import multer from 'multer';
import path from 'path';

// Set up the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'uploads')); // Upload destination folder
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Appending the original name to avoid overwriting
  },
});

const upload = multer({ storage });

export default upload;
