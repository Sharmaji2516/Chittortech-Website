const fs = require('fs');
const filePath = 'c:\\Users\\iSTART CHITTORGARH\\Documents\\Web Development Projects\\Chittortech-Website-main\\app\\admin\\page.js';

const content = fs.readFileSync(filePath, 'utf8');

const guardRegex = /\s*<div className=\{\`desktop-only-guard \$\{isMobileDevice \? 'active' : ''\}\`\}>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const match = content.match(guardRegex);
if (match) {
    console.log('MATCHED TEXT:');
    console.log(JSON.stringify(match[0]));
    
    // Check what is left immediately after
    const afterIndex = content.indexOf(match[0]) + match[0].length;
    console.log('AFTER TEXT:');
    console.log(JSON.stringify(content.substring(afterIndex, afterIndex + 50)));
} else {
    console.log('No match!');
}
