if(window!=window.top){
  window.parent.postMessage({pushURL:window.location.pathname}, "*");
}
