import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);
const rootDirPath = path.resolve(currentDirPath, '..');
const sourceChannelsDirPath = path.join(rootDirPath, 'channels');
const publicDirPath = path.join(rootDirPath, 'site', 'public');
const targetChannelsDirPath = path.join(publicDirPath, 'channels');

await mkdir(publicDirPath, { recursive: true });
await cp(sourceChannelsDirPath, targetChannelsDirPath, {
  force: true,
  recursive: true,
});