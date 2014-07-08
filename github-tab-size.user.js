// ==UserScript==
// @name        github-tab-size
// @namespace   http://userscripts.org/scripts/show/175752
// @description Changes the size of the tabs
// @include     https://github.com/*
// @version     0.0.1
// ==/UserScript==

var SIZE = 2;
var size = GM_getValue ("size");
if (!size){
	GM_setValue ("size", SIZE);
	size = SIZE;
}

GM_registerMenuCommand ("Change tab size", function (){
	size = prompt ("Tab size", size);
	GM_setValue ("size", size);
	location.reload ();
});

GM_addStyle ("pre { tab-size: " + size + " !important; -moz-tab-size: " + size +
		" !important; -o-tab-size: " + size + " !important}");
GM_addStyle ("table { tab-size: " + size + " !important; -moz-tab-size: " + size +
		" !important; -o-tab-size: " + size + " !important}");
