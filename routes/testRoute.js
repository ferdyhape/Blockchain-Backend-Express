import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Definisikan penanganan rute dinamis untuk semua file di dalam folder "testing"
router.get("/:file", (req, res) => {
  const { file } = req.params; // Tangkap parameter "file" dari URL
  res.sendFile(path.join(__dirname, `../testing/${file}.html`)); // Kirim file HTML sesuai dengan parameter "file"
});

export default router;
