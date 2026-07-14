import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/senio/OneDrive/Desktop/ADS DOT COM EDDITION 3/src/routes';
const files = fs.readdirSync(dir).filter(f => f.startsWith('services') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix double imports
  if (content.includes('import { ServiceImageGrid } from "@/components/ServiceImageGrid";\nimport { ServiceImageGrid } from "@/components/ServiceImageGrid";')) {
    content = content.replace(
      'import { ServiceImageGrid } from "@/components/ServiceImageGrid";\nimport { ServiceImageGrid } from "@/components/ServiceImageGrid";',
      'import { ServiceImageGrid } from "@/components/ServiceImageGrid";'
    );
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed double import in ${file}`);
  }
}
