// JavaScript file common.js
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// ===============================================

function log(nonObj) {

  if (typeof nonObj == "object") {
    nonObj = "*** log( ) Error: expecting a non-object ***";
    return;
  };

  if (nonObj == "undefined") { nonObj = "undefined"; }

  if (typeof nonObj != "string") { nonObj = nonObj.toString(); }

  var tbody = document.getElementById("log");

  if (tbody != null) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + encodeHtml(nonObj) + "</td>";
    tbody.append(tr);
  }
}

// ===============================================

function logObject(obj) {

  // for (const [key, value] of Object.entries(obj)) {
  //   log(key + " : " + value);
  // }

  if (typeof obj != "object") {
    nonObj = "*** logObject( ) Error: expecting an object ***";
    return;
  };

  var pairs = Object.entries(obj).map( function(pair) {
    return pair[0] + " : " + pair[1] });
  var singleStr = pairs.reduce( function(a, b) { return a + ",_-newline-_" + b; } )

  log(singleStr);
}

// ===============================================

// Utility function to encode special characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
  if (typeof str == "string") {
    str = str.replace(/&lt/g, '&amp;lt');
    str = str.replace(/&gt/g, '&amp;gt');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/ /g, '&nbsp;');
    str = str.replace(/_-newline-_/g, '<br />');
    return str;
  }
}
