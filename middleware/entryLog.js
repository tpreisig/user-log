import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import { mkdir, appendFile } from "node:fs/promises";
import { format } from 'date-fns';
import crypto from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dataLog = async (fileIdentifier, data) => {
    const logItem = `${format(new Date(), 'yyyy/MM/dd HH:mm:ss')}\t${crypto.randomUUID()}\t${data}\n`;
    try {
        const logDirectory = join(__dirname, '..', 'logs');
        if (!existsSync(logDirectory)) {
            await mkdir(logDirectory);
        }
        await appendFile(join(logDirectory, fileIdentifier), data);

    } catch (err) {
        console.log(err);
    }
}

export default dataLog;