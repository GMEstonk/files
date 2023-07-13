window.addEventListener(
  "message",
  (event) => {
    if ((!aliasSource)||(!("https://"+aliasSource).startsWith(event.origin))){return;}

    history.pushState({}, "", event.data.pushURL);
    
  },
  false
);
