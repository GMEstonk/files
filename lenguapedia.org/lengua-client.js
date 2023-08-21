function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}
const windowURL=window.location.href.toLowerCase();
function rewriteWikiLengua(){
  const main = document.querySelector('main');
  if(!main){return;}
  let textNodes = textNodesUnder(main);
  const textNodes_length=textNodes.length;
    for(let i=0;i<textNodes_length;i++){try{
      let text = textNodes[i].textContent;
      if(text.includes('Wiki')){
        textNodes[i].textContent=text.replaceAll('Wiki','Lengua');
      }
      if(text.includes('Languapedia')){
        textNodes[i].textContent=text.replaceAll('Languapedia','Lenguapedia');
      }     
      if(text.includes('Languagepedia')){
        textNodes[i].textContent=text.replaceAll('Languagepedia','Lenguapedia');
      }     
      if(text.includes('Linguapedia')){
        textNodes[i].textContent=text.replaceAll('Linguapedia','Lenguapedia');
      }            
    }catch(e){continue;}}

  if((windowURL=='https://lenguapedia.org')||(windowURL=='https://lenguapedia.org')){
      main.innerHTML=`<iframe src="https://filers.lenguapedia.org/lenguapedia.org/searchPage"></iframe>`
  }
  
}

document.addEventListener("DOMContentLoaded",e=>rewriteWikiLengua());
setInterval(async I=>rewriteWikiLengua(),300);
rewriteWikiLengua();
