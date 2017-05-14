// ==UserScript==
// @name         Twitch Prevent Autoplay
// @namespace    https://thetimmaeh.com/tpa
// @version      0.1
// @description  Prevents Autoplay in embedded Twitch Players
// @author       TheTimmaeh
// @match        *://player.twitch.tv/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/TheTimmaeh/Twitch-Prevent-Autoplay/master/tpa.user.js
// @updateURL    https://raw.githubusercontent.com/TheTimmaeh/Twitch-Prevent-Autoplay/master/tpa.user.js
// ==/UserScript==

// Initialize GET Object
var get = {};

// Read GET Parameters
var parameters = document.location.search.substr(1, document.location.search.length).split('&');

// Fill GET Object with GET Parameters
for(var i = 0; i <= parameters.length; i++) if(typeof parameters[i] === 'string' && parameters[i].length > 1) get[parameters[i].split('=')[0]] = parameters[i].split('=')[1] || null;

// Check for Video Source
if(typeof get.channel !== 'undefined' || typeof get.video !== 'undefined' || typeof get.collection !== 'undefined'){

  // Check for Autoplay Parameter
  if(typeof get.autoplay === 'undefined' || get.autoplay == 'true'){

    // Set Autoplay
    get.autoplay = false;

    // Build new iFrame URL
    var newurl = window.location.href.replace(window.location.search, '') + '?';

    // Add Parameters to iFrame URL
    for(var parameter in get) newurl += parameter + '=' + get[parameter] + '&';

    // Redirect to new iFrame URL
    document.location.href = newurl;
  }
}
