window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== "https://alias-source"){return;}

    history.pushState({}, "", event.data.pushURL);
    
  },
  false
);
