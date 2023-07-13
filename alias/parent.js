window.addEventListener(
  "message",
  (event) => {
    if ((!aliasSource)||(event.origin !== ("https://"+aliasSource))){return;}

    history.pushState({}, "", event.data.pushURL);
    
  },
  false
);
