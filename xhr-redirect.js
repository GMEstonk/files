
let rH = window.location.host.replace('.servleteer.com','');
if(!XMLHttpRequest.nativeOpen){
XMLHttpRequest.prototype.nativeOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.customOpen = function(method, url, asynch, user, password) {
  url = url.replaceAll(rH, window.location.host);
  url=url.replace('gql.reddit.com/','gql.reddit.com.servleteer.com/');
  url=url.replaceAll('.servleteer.com.servleteer.com','.servleteer.com');
  this.method = method;
  this.requestURL = url;
  this.asynch = asynch;
  if (user) { this.user = user; }
  if (password) { this.password = password; }
  this.requestHeaders = new Map();

  return this.nativeOpen(method, url, asynch, user, password);

}

XMLHttpRequest.prototype.open = XMLHttpRequest.prototype.customOpen;



/*//////////////////////////////////////////////////////////////////////////*/


XMLHttpRequest.nativeOpen = XMLHttpRequest.open;

XMLHttpRequest.customOpen = function(method, url, asynch, user, password) {
  url = url.replaceAll(rH, window.location.host);
  url=url.replace('gql.reddit.com/','gql.reddit.com.servleteer.com/');
  url=url.replaceAll('.servleteer.com.servleteer.com','.servleteer.com');
  this.method = method;
  this.requestURL = url;
  this.asynch = asynch;
  if (user) { this.user = user; }
  if (password) { this.password = password; }
  this.requestHeaders = new Map();

  return this.nativeOpen(method, url, asynch, user, password);

}

XMLHttpRequest.open = XMLHttpRequest.customOpen;
  
}
