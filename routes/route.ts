import express, { Router, type Request, type Response } from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dataLog from '../middleware/entryLog.ts';
import bcrypt from 'bcryptjs';

const router: Router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

interface UserCredentials {
    username?: string;
    password?: string;
}

const encryptIt = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
};

const padItem = (entry: string | number, space: number): string => String(entry).padEnd(space, ' ');


// GET routes
router.get(['/', '/index', '/index.html', '/home'], (req: Request, res: Response): void => {
    res.sendFile(join(__dirname, '..', 'views', 'index.html'));
})
router.get('/about', (req: Request, res: Response): void => {
    res.sendFile(join(__dirname, '..', 'views', 'about.html'));
})
router.get('/contact', (req: Request, res: Response): void => {
    res.sendFile(join(__dirname, '..', 'views', 'contact.html'));
})
router.get('/login', (req: Request, res: Response): void => {
    res.sendFile(join(__dirname, '..', 'views', 'login.html'));
})
router.get('/register', (req: Request, res: Response): void => {
    res.sendFile(join(__dirname, '..', 'views', 'register.html'));
})

// POST routes
router.post('/login', async (req: Request, res: Response): Promise<void> => {
    const { username, password }: UserCredentials = req.body;
    if (!username || !password) {
        res.status(400).send('Missing username or password');
        return;
    }
    const hashedPassword = await encryptIt(password);
    await dataLog('userlog.txt', `Username: ${padItem(username, 12)} Password hash: ${padItem(hashedPassword, 36)}`);
    res.sendFile(join(__dirname, '..', 'views', 'inside.html'));
})

router.post('/register', async (req: Request, res: Response): Promise<void> => {
    const { username, password }: UserCredentials = req.body;
    if (!username || !password) {
        res.status(400).send('Missing username or password');
        return;
    }
    const hashedPassword = await encryptIt(password);
    await dataLog('registerLog.txt', `Username: ${padItem(username, 12)} Pasword hash: ${padItem(hashedPassword, 36)}`);
    res.sendFile(join(__dirname, '..', 'views', 'login.html'));
})


export default router;