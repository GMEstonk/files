function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

document.addEventListener("DOMContentLoaded", (event) => {

let textNodes = textNodesUnder(document.querySelector('main'));
const textNodes_length=textNodes.length;
  for(let i=0;i<textNodes_length;i++){try{
    textNodes[i].textContent=textNodes[i].replaceAll('Wiki','Lengua');
  }catch(e){continue;}}

  
});
