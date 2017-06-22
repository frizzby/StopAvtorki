// ==UserScript==
// @name           StopIt
// @namespace      http://example.com
// @description    StopIt
// @include        *citydog*
//
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js
// ==/UserScript==
 
var els = document.getElementsByTagName("*");
for(var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.innerHTML = el.innerHTML.replace(/(торка$|торка\s)/gi, 'тор ');
  el.innerHTML = el.innerHTML.replace(/(нерка$|нерка\s)/gi, 'нер ');
}
