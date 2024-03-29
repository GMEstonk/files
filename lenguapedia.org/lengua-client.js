function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}


/*function changeIcon(rel){
  let ici=document.querySelector('link[rel="'+rel+'"]');
  if(ici){
    let ic2 = document.createElement('link');
    ic2.setAttribute('rel',rel);
    ic2.setAttribute('href','https://styles.redditmedia.com/t5_8xtdjf/styles/communityIcon_g8if68b1ahjb1.png#');
    ici.remove();
    document.head.appendChild(ic2);
  }
}
changeIcon('icon');
changeIcon('apple-touch-icon');*/


globalThis.windowURL=window.location.href.toLowerCase();
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

  if((windowURL=='https://lenguapedia.org')||(windowURL=='https://lenguapedia.org/')){

    
    if(!main.innerHTML.toString().includes('https://api.lenguapedia.org/corsFetch/https://files.servleteer.com/lenguapedia.org/searchPage.html')){
      main.innerHTML=`
      <iframe style="border:none;padding:0px; margin:0px;width:100%;height:100vh;" src="https://api.lenguapedia.org/corsFetch/https://files.servleteer.com/lenguapedia.org/searchPage.html?"`+new Date().getTime()+`></iframe>
          <style>
    iframe[src*="https://api.lenguapedia.org/corsFetch/https://files.servleteer.com/lenguapedia.org/searchPage.html"]{
      border:none;
      padding:0px;
      margin:0px;
      width:100%;
      height:100vh;
    } 
    </style>`;
    }
  }


  
}

document.addEventListener("DOMContentLoaded",e=>rewriteWikiLengua());
setInterval(async I=>rewriteWikiLengua(),300);
rewriteWikiLengua();

function lastLoad(){
//https://files-servleteer-vercel-app.vercel.app/lenguapedia/default/mods.css
  if(!document.querySelector('link[wiki-css="wiki.css"]')){
    let oldCss=document.querySelector('link[href*="wiki.css"]');
    if(oldCss){oldCss.remove();}
  let mods_css = document.createElement('link');
  mods_css.href = 'https://files-servleteer-vercel-app.vercel.app/lenguapedia/en/wiki.css?5';
  mods_css.setAttribute('rel','stylesheet');
    mods_css.setAttribute('wiki-css','wiki.css');
  document.body.appendChild(mods_css);
  }
  let hideMain=document.querySelector('style[hide-main]');
  if(hideMain){hideMain.remove();}
}

  document.addEventListener("load",e=>{
  
   lastLoad();
    
  });

if((document.readyState=='complete')
  ||(document.currentScript.outerHTML.toString().includes('defer'))){
  
lastLoad();
  
}

setTimeout(function(){

lastLoad();
  
},5000);
