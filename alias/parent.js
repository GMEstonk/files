window.addEventListener(
  "message",
  (event) => {
    if ((!aliasSource)||(!(aliasSource).startsWith(event.origin))){return;}
  
    history.pushState({}, "", event.data.pushURL);
    
  },
  false
);
if(window!=window.top){
  window.top.location=window.location;
}


function sendHost(){

  document.querySelector('iframe').contentWindow.postMessage({hostname:window.location.hostname},"*");
  
}
