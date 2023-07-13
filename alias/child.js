if(window!=window.top){

  
  window.parent.postMessage({pushURL:window.location.pathname}, "*");
  

  window.addEventListener(
  "message",
  (event) => {
    
    if(event.data.action='linkAlias'){

      linkAlias(event.data.hostname);
      
    }
  },
  false
);



  
}

function linkAlias(hostname){


  
}
