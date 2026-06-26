const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace import { motion ... } with import { m ... }
  // Only if motion is imported from framer-motion
  if (content.includes('from "framer-motion"') || content.includes("from 'framer-motion'")) {
    const originalContent = content;
    
    // Regex to replace motion with m in the import statement
    content = content.replace(/import\s*\{([^}]*)\b(motion)\b([^}]*)\}\s*from\s*['"]framer-motion['"]/g, (match, p1, p2, p3) => {
      return match.replace(/\bmotion\b/, 'm');
    });

    // Replace <motion. and </motion.
    content = content.replace(/<motion\./g, '<m.');
    content = content.replace(/<\/motion\./g, '</m.');

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Refactored ${file}`);
      changed = true;
    }
  }
});
console.log('Done refactoring.');
