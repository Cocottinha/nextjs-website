// pages/api/upload.js
import nextConnect from 'next-connect';
import upload from '@/lib/multer';
import fs from 'fs';
import path from 'path';

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  const { file } = req;
  const destinationPath = path.join(process.cwd(), 'uploads', 'destination', file.filename);

  // Ensure the destination directory exists
  fs.mkdirSync(path.dirname(destinationPath), { recursive: true });

  // Copy the file to the destination folder
  fs.copyFileSync(file.path, destinationPath);

  res.status(200).json({ message: 'File uploaded and copied successfully!', file });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since multer handles it
  },
};
