const fs = require('fs');

const files = [
  'components/LocalSchema.js',
  'public/llms.txt',
  'public/llms-full.txt',
  'public/.well-known/llms.txt',
  'app/layout.js'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replaceAll('contact@chittortech.online', 'chittortech@gmail.com');
    content = content.replaceAll('["chittortech@gmail.com", "chittortech@gmail.com"]', '"chittortech@gmail.com"');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Processed:', file);
  }
});
