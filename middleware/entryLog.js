import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import { mkdir, appendFile } from "node:fs/promises";
import crypto from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pad2 = (n) => String(n).padStart(2, '0');

const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const MM = pad2(date.getMonth() + 1);
    const dd = pad2(date.getDate());
    const HH = pad2(date.getHours());
    const mm = pad2(date.getMinutes());
    const ss = pad2(date.getSeconds());
    return `${yyyy}/${MM}/${dd} ${HH}:${mm}:${ss}`;
}

const padItem = (entry, space) => String(entry).padEnd(space, ' ');

const dataLog = async (fileIdentifier, data) => {
    const logItem = `${padItem(formatDate(new Date()), 20)}\t${padItem(crypto.randomUUID(), 36)}\t${data}\n`;
    try {
        const logDirectory = join(__dirname, '..', 'logs');
        if (!existsSync(logDirectory)) {
            await mkdir(logDirectory);
        }
        await appendFile(join(logDirectory, fileIdentifier), logItem);

    } catch (err) {
        console.log(err);
    }
}

export default dataLog;