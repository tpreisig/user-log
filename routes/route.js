import express from 'express';
const router = express.Router();
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// GET routes
router.get(['/', '/index', '/index.html', '/home'], (req, res) => {
    res.sendFile(join(__dirname, '..', 'views', 'index.html'));
})
router.get('/about', (req, res) => {
    res.sendFile(join(__dirname, '..', 'views', 'about.html'));
})
router.get('/contact', (req, res) => {
    res.sendFile(join(__dirname, '..', 'views', 'contact.html'));
})

// POST routes




export default router;