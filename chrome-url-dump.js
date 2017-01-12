#!/usr/bin/env osascript -l JavaScript

ObjC.import('stdlib');

var chrome = Application("Google Chrome");
var result = '';
if (chrome.running()) {
  Application("Google Chrome").windows().forEach(function (window) {
    if (window.mode() == 'normal') {
      window.tabs().forEach(function (tab) {
        result += tab.url()+"\n";
      });
      result += "\n";
    }
  });
}

(result.length) ? result.trim() : $.exit(0);