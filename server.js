import express from 'express';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import router from './routes/route.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT_ASSIGNMENT || 3232;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})


