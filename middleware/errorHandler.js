import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));


const errorHandler = (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(join(__dirname, '..', 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 - Not Found' });
    } else {
        res.type('txt').send('404 - Not Found');
    }
}

export default errorHandler;