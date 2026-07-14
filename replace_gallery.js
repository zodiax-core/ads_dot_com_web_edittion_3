import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/senio/OneDrive/Desktop/ADS DOT COM EDDITION 3/src/routes';
const files = fs.readdirSync(dir).filter(f => f.startsWith('services_') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Add import if not exists
  if (!content.includes('ServiceThumbnailGallery')) {
    content = content.replace(
      /import { PageShell } from "@\/components\/page-shell";/,
      `import { PageShell } from "@/components/page-shell";\nimport { ServiceThumbnailGallery } from "@/components/ServiceThumbnailGallery";`
    );
  }

  // Replace usage
  content = content.replace(
    /<Gallery images=\{s\.images\} alts=\{s\.alts\} \/>/g,
    `<ServiceThumbnailGallery images={s.images} alts={s.alts} />`
  );
  
  content = content.replace(
    /<ImageGallery images=\{s\.images\} alts=\{s\.imageAlts\} \/>/g,
    `<ServiceThumbnailGallery images={s.images} alts={s.imageAlts} />`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
}
