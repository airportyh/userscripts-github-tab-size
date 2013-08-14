// ==UserScript==
// @name        github-tab-size
// @namespace   http://userscripts.org/scripts/show/175752
// @description Changes the size of the tabs
// @include     https://github.com/*
// @version     0.0.1
// ==/UserScript==

var SIZE = 2;
var size = +GM_getValue ("size");
if (!size){
	GM_setValue ("size", SIZE);
	size = SIZE;
}

GM_registerMenuCommand ("Change tab size", function (){
	size = prompt ("Tab size", size);
	GM_setValue ("size", size);
	location.reload ();
});

document.body.style.tabSize = size;
document.body.style.MozTabSize = size;
document.body.style.oTabSize = size;