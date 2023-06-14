
void async function LinkResolver() {


  const hostProxy = window.location.host;
  let hostList = [];
  let hostListRegex = [];
  hostList.push(window.location.host.replace('.servleteer.com','').toLowerCase());
  const hostList_length = hostList.length;
  let hostListQuery = 'hostListQuery';
    
  for(let i=0;i<hostList_length;i++){
     hostListRegex.push(new RegExp(hostList[i], "gi"));
  }

  setInterval(async function() {

    relativeTagsFix('href');
    relativeTagsFix('src');
 

    proxyTagsFix('href');
    proxyTagsFix('src');
    proxyTagsFix('data-src');
    proxyTagsFix('style');
    proxyTagsFix('srcset');
    proxyTagsFix('data-srcset');
      
      styleTagsFix();

      
  }, 100);



function relativeTagsFix(attr){

    let relativeTags = document.querySelectorAll('['+attr+'^="/"],['+attr+'^="./"],['+attr+'^="../"],['+attr+']:not(['+attr+'*=":"])');
    const relativeTags_length = relativeTags.length;
    for (let i = 0; i < relativeTags_length; i++) {
     try {

        relativeTags[i].setAttribute(attr, relativeTags[i][attr]);

     } catch (e) { continue; }
    }

}
    
function proxyTagsFix(attr){

    hostListQuery = 'hostListQuery';
    for (let i = 0; i < hostList_length; i++) {
      hostListQuery = hostListQuery + ',' + `[`+attr+`*="/` + hostList[i] + `" i]:not([`+attr+`*="servleteer.com" i],[`+attr+`^="blob:"])`;
      hostListQuery = hostListQuery + ',' + `[`+attr+`*="/www.` + hostList[i] + `" i]:not([`+attr+`*="servleteer.com" i])`;
    }
    const attr_list = document.querySelectorAll(hostListQuery);
    const attr_list_length = attr_list.length;

    for (let i = 0; i < hostList_length; i++) {
      for (let x = 0; x < attr_list_length; x++) {
        try {
          attr_list[x][attr] = attr_list[x][attr].replace(hostListRegex[i], hostProxy).replaceAll('.servleteer.com.servleteer.com','.servleteer.com');
          /*if(attr_list[x].outerHTML.toLowerCase().includes(hostProxy+'/')){
          fixAllAttributes(attr_list[x]);
          }*/
        } catch (e) { continue; }
      }
    }

}

function styleTagsFix(){
const styleTags = document.querySelectorAll('style:not([url-rewritten])');
const styleTags_length = styleTags.length;
    for (let i = 0; i < hostList_length; i++) {
      for (let x = 0; x < styleTags_length; x++) {
        try {
          styleTags[x].setAttribute('url-rewritten','false');
          if(styleTags[x].textContent.toLowerCase().includes(hostProxy+'/')){
               styleTags[x].textContent = styleTags[x].textContent.replace(hostListRegex[i], hostProxy);
               styleTags[x].setAttribute('url-rewritten','true');
            }
        } catch (e) { continue; }
      }
    }


}
    
function fixAllAttributes(elem){
    
    for (let i = 0; i < hostList_length; i++) {
         for (const attr of elem.attributes) {
           elem.setAttribute(attr.name,attr.value.replace(hostListRegex[i], hostProxy));
         }
    }
    
}


}?.();
