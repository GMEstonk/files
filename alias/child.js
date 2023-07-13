if(window!=window.top){

  
  window.parent.postMessage({pushURL:window.location.pathname}, "*");
  

  window.addEventListener(
  "message",
  (event) => {
    console.log(event);
    if(event.data.action=='linkAlias'){

      linkAlias(event.data.hostname);
      
    }
  },
  false
);



  
}

function linkAlias(hostname){
  let alist = document.querySelectorAll('a[href]:not([href^="http"])');
  console.log(alist);
  let alist_length=alist.length;
    
  for(let i=0;i<alist_length;i++){
     if(alist[i].href!=alist[i].getAttribute('href')){
       alist[i].setAttribute('href',alist[i].href);
     }
  }

  alist = document.querySelectorAll('a[href^="'+window.location.origin+'"]');
  alist_length=alist.length;
    
  for(let i=0;i<alist_length;i++){
     alist[i].href=alist[i].href.replace(window.location.hostname,hostname);
  }
  
}
