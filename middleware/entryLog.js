import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import { mkdir, appendFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const dataLog = async (filename, data) => {
    try {
        const logDirectory = join(__dirname, '..', 'logs');
        if (!existsSync(logDirectory)) {
            await mkdir(logDirectory);
        }
        await appendFile(join(logDirectory, filename), data);

    } catch (err) {
        console.log(err);
    }
}

export default dataLog;