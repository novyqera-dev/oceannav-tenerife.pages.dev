importScripts('./coastal-core.js');
self.onmessage=e=>{try{self.postMessage({id:e.data.id,path:CoastCore.plan(e.data.points,e.data.elements,e.data.margin)})}catch(error){self.postMessage({id:e.data.id,error:error.message})}};
