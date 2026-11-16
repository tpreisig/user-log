import express, { type Express } from 'express';
import https from 'node:https';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import fs from 'node:fs';
import router from './routes/route.ts';
import errorHandler from './middleware/errorHandler.ts';

const app: Express = express();
const PORT = Number(process.env.PORT) || 3232;

const __dirname = dirname(fileURLToPath(import.meta.url));

const options = {
    key: fs.readFileSync(join(__dirname, 'certificates', 'localhost-key.pem')),
    cert: fs.readFileSync(join(__dirname, 'certificates', 'localhost.pem'))
}

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

https.createServer(options, app).listen(PORT, () => {
    console.log(`Application running on 'https://localhost:${PORT}'.`);
})



