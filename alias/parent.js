window.addEventListener(
  "message",
  (event) => {
    if ((!aliasSource)||(!(aliasSource).startsWith(event.origin))){return;}
  
    history.pushState({}, "", event.data.pushURL);
    
  },
  false
);
