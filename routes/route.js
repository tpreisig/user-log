import express from 'express';
const router = express.Router();
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dataLog from '../middleware/entryLog.js';
import bcrypt from 'bcryptjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const encryptIt = async (password) => {
    return await bcrypt.hash(password, 10);
};

const padItem = (entry, space) => String(entry).padEnd(space, ' ');


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
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Missing username or password');
    }
    const hashedPassword = await encryptIt(password);
    await dataLog('userlog.txt', `Username: ${padItem(username, 12)} Password hash: ${padItem(hashedPassword, 36)}`);
    res.sendFile(join(__dirname, '..', 'views', 'inside.html'));
})

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Missing username or password');
    }
    const hashedPassword = await encryptIt(password);
    await dataLog('registerLog.txt', `Username: ${padItem(username, 12)} Pasword hash: ${padItem(hashedPassword, 36)}`);
    res.sendFile(join(__dirname, '..', 'views', 'login.html'));
})


export default router;