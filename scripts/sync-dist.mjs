import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);
const rootDirPath = path.resolve(currentDirPath, '..');
const distDirPath = path.join(rootDirPath, '.site-dist');

await mkdir(rootDirPath, { recursive: true });
const distEntries = await readdir(distDirPath, { withFileTypes: true });

for (const distEntry of distEntries) {
	const sourceEntryPath = path.join(distDirPath, distEntry.name);
	const targetEntryPath = path.join(rootDirPath, distEntry.name);

	await rm(targetEntryPath, { recursive: true, force: true });
	await cp(sourceEntryPath, targetEntryPath, { recursive: distEntry.isDirectory() });
}
