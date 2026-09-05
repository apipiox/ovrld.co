import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
const widths = [320, 480, 768, 1024, 1440, 1920];
await mkdir('public/images', { recursive: true });
for (const file of await readdir('assets/source')) {
  if (!/\.(png|webp|jpe?g)$/i.test(file)) continue;
  const name = file.replace(/\.[^.]+$/, '');
  for (const width of widths)
    await sharp(`assets/source/${file}`)
      .resize({ width })
      .webp({ quality: width < 1024 ? 78 : 84 })
      .toFile(`public/images/${name}-${width}.webp`);
  await sharp(`assets/source/${file}`)
    .resize({ width: 1440, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(`public/images/${name}.webp`);
}
