
void async function LinkResolver() {


  const hostProxy = window.location.host;
  let hostList = [];
  hostList.push(window.location.host.replace('.servleteer.com',''));
  const hostList_length = hostList.length;
  let hostListQuery = 'hostListQuery';

  setInterval(async function() {


    function blobFix(attr){


    let blobs = document.querySelectorAll('video['+attr+'*=".servleteer.com"]['+attr+'^="blob:"]');
    const blobs_length = blobs.length;
    for (let i = 0; i < blobs_length; i++) {
      try {
  
          console.log(blobs[i][attr]);

        blobs[i][attr]=blobs[i][attr].replaceAll('.servleteer.com','');
          
        blobs[i].setAttribute('url',blobs[i][attr]);
        let blobClone=blobs[i].cloneNode(true);
          blobs[i].parentElement.appendChild(blobClone);
          
      } catch (e) { continue; }
    }

}


}?.();