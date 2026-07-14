import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/senio/OneDrive/Desktop/ADS DOT COM EDDITION 3/src/routes';
const files = fs.readdirSync(dir).filter(f => f.startsWith('services') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('grid-cols-2') && content.includes('group-hover:scale-105')) {
    // Add import if not exists
    if (!content.includes('ServiceImageGrid')) {
      content = content.replace(
        /import { Nav, Footer } from ".\/index";/,
        `import { Nav, Footer } from "./index";\nimport { ServiceImageGrid } from "@/components/ServiceImageGrid";`
      );
      content = content.replace(
        /import { Nav, Footer } from "\.\/index";/,
        `import { Nav, Footer } from "./index";\nimport { ServiceImageGrid } from "@/components/ServiceImageGrid";`
      );
    }

    // Use regex to replace the entire div with className="w-full md:w-1/2 grid grid-cols-2 gap-3" and all its children
    // Since it's nested HTML, a simple regex might fail. Let's find the start and end carefully.
    
    // Actually, looking at the files, the block is consistently:
    /*
              {/* Image grid *\/}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift border border-ink/5 group">
                  <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink">0{idx + 1}</span>
                  </div>
                </div>
                {s.images.slice(1).map((img, i) => (
                  <div key={img} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-ink/5 group">
                    <img src={img} alt={`${s.title} detail`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
    */

    // Some files might have (img) instead of (img, i). Some might use key={i}. 
    // We can use a regex that matches from `{/* Image grid */}` up to `</div>` just before `{/* Text */}`
    
    content = content.replace(
      /\{\/\* Image grid \*\/\}[\s\S]*?\{\/\* Text \*\/\}/g,
      `{/* Image grid */}\n              <ServiceImageGrid images={s.images} title={s.title} idx={idx} />\n\n              {/* Text */}`
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
