import express from 'express';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { format } from 'date-fns';
import router from './routes/route.js';

const app = express();
const PORT = process.env.PORT_ASSIGNMENT || 3232;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);



app.use((req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 - Not Found' });
    } else {
        res.type('txt').send('404 - Not Found');
    }
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})


