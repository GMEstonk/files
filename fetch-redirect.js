let replaceHost = window.location.host.replace('.servleteer.com','');

window.nativeFetch = window.fetch;

window.customFetch = async function(request, headers) {

  var req;
  var response;
  if (typeof request == 'string') {
    request = request.replaceAll(replaceHost, window.location.host).replaceAll('.servleteer.com.servleteer.com','.servleteer.com');
    req = new Request(request, headers);
    response = await window.nativeFetch(req);
    response.requestInputObject = req;
  } else {
    response = await window.nativeFetch(request, headers);
  }
  if (typeof request == 'object') {

    response.requestInputObject = request;

  } else {

    response.requestInputURL = request;
    response.requestInputObject = req;

  }

  if (headers) { response.requestInputHeaders = headers; }

  return response;

}
window.fetch = window.customFetch;


