const fs = require('fs');

let buildPath = '../docs/';
let urlPaths = [
  'iloveu',
  'anniversary'
];

for (const urlPath of urlPaths) {
    fs.copyFile(buildPath + 'index.html', buildPath + urlPath + '.html', (err) => {
        if (err) {
            console.error('index.html -> 404.html copy failed:');
            throw err;
        }
    });
}
