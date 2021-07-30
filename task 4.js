// JavaScript file task 4.js
// Created by Harrison Kong
// Copyright (C) Coursera 2020

function button1Clicked() {

  //alert("button 1 clicked!");

  var target1 = $("#target-1");

  if (target1 != null) {
    target1.text("Target 1 has been found!");
  };
}

function button2Clicked() {

  // alert("button 2 clicked");

  // your turn to try!!
  // modify this block of code to use JQuery!

  var target2 = $("#target-2");

  if (target2 != null) {
    target2.text("Target 2 discovered!");
  };

}

// change styles

function button3Clicked() {
  // alert("button 3 clicked!");

  var target1 = $("#target-1");

  if (target1 != null) {
    target1.css({"color": "red", "backgroundColor": "orange"});
  }
}

function button4Clicked() {
  // alert("button4Clicked!");

  // your turn to try!!
  // modify this block of code to use JQuery!

  var target2 = $("#target-2");

  if (target2 != null) {
    target2.css("backgroundColor", "orange");
  }
}

// JQuery AJAX

// the herokuapp.com url is there to get around a restriction called
// cross-site origin restriction, Recipe Puppy is our data provider

const url = "https://cors-anywhere.herokuapp.com/" +
            "http://www.recipepuppy.com/api/?i=onions,garlic";

log ("Searching for recipes with onion and garlic ...");

$.get(url,
      function(data, status) {
          log("status: " + status);
          var jsonObject = JSON.parse(data)
          jsonObject.results.forEach( function(recipe) { log(recipe.title); } );
      }
);
