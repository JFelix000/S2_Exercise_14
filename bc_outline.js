"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Jose Felix
   Date:   3.29.19

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

// generate an outline based on H1-H6 headings in the src doc
window.addEventListener("load", makeOutLine);

function makeOutLine() {
      // location of the document outline
      var outline = document.getElementById("outline");
      // source document for the outline
      var source = document.getElementById("doc");
      // this creates an h1 element in the document
      var mainHeading = document.createElement("h1");
      // creates the ol element
      var outlineList = document.createElement("ol");
      // in create text node this is the text that you will render in the page
      var headingText = document.createTextNode("Outline");
      // appends headingText to be the child to mainHeading
      mainHeading.appendChild(headingText);
      //gets the element of id outline and making mainHeading the child of that
      outline.appendChild(mainHeading);
      // outLineList is added to outline - the element with the id of outline - and made a child to it (appendChild)
      outline.appendChild(outlineList);
      //this is to call the function and uses the parameters to make it work
      createList(source, outlineList);
}
// function to make a list in the html dynamically
function createList(source, outlineList) {
      //headings for the outline
      var headings= ["H1", "H2", "H3", "H4", "H5", "H6"];
      //loop through all of the child nodes of source article until no child nodes are left
      for (var n = source.firstChild; n !== null; n = n.nextSibling) {
            //examine only article headings
            var headLevel = headings.indexOf(n.nodeName);
            if (headLevel !== -1) {
                  var listElem = document.createElement("li");
                  listElem.innerHTML = n.firstChild.nodeValue;
                  outlineList.appendChild(listElem);
            }
      }
}