const fs=require('fs');
let text=fs.readFileSync("api.txt","utf-8");
console.log("original content");
console.log(text);
text=text.replace('content',"file");
console.log("modified content");
console.log(text);