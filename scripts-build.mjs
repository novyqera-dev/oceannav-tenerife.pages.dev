import{cp,mkdir,rm}from'node:fs/promises';
await rm('public',{recursive:true,force:true});await mkdir('public');
for(const file of ['index.html','app.js','premium.css','nav-core.js','professional.js','connected.js','coastal-core.js','coastal-worker.js','sw.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','vendor'])await cp(file,'public/'+file,{recursive:true});
console.log('Public assets built from explicit allowlist.');
