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
router.get('/login', (req, res) => {
    res.sendFile(join(__dirname, '..', 'views', 'login.html'));
})
router.get('/register', (req, res) => {
    res.sendFile(join(__dirname, '..', 'views', 'register.html'));
})

// POST routes
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    res.sendFile(join(__dirname, '..', 'views', 'inside.html'));
})

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    res.sendFile(join(__dirname, '..', 'views', 'login.html'));
})


export default router;