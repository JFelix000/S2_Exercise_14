"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Jose Felix
   Date:   3.29.19 

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/
window.addEventListener("load", setupStyles);

function setupStyles() {
    // create a link element for the page view styles
    var pageStyle = document.createElement("link");
    pageStyle.setAttribute("href", "bc_page.css");
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("disabled", "disabled");

    // append the link element to the document head
    document.head.appendChild(pageStyle);
    pageStyle.disabled = true;

    // insert some buttons for the style switcher
    var buttonDIV = document.createElement("div");
    buttonDIV.setAttribute("id", "styleButtons");

    var webButton = document.createElement("input");
    webButton.setAttribute("type", "button");
    webButton.setAttribute("value", "Web View");

    var pageButton = document.createElement("input");
    pageButton.setAttribute("type", "button");
    pageButton.setAttribute("value", "Page View");

    buttonDIV.appendChild(webButton);
    buttonDIV.appendChild(pageButton);

    document.body.insertBefore(buttonDIV, document.body.firstChild);

    // append an embeded styleSheet to the document head
    var buttonStyles = document.createElement("style");
    document.head.appendChild(buttonStyles);

    // add style rules to the embedded style sheet
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "div#styleButtons { \
            position: fixed \
        }", 0);
}