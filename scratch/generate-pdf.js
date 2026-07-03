const { jsPDF } = require("jspdf");
const fs = require("fs");

const doc = new jsPDF();
doc.text("John Doe Resume", 10, 10);
doc.text("Skills: React, Next.js, AI, Python, Node.js", 10, 20);
doc.text("Experience: Senior Software Engineer at Tech Corp.", 10, 30);
doc.text("Education: B.Tech in Computer Science", 10, 40);

const content = doc.output();
fs.writeFileSync("test-resume.pdf", content, "binary");
console.log("Test resume generated!");
