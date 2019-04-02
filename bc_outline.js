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
      // previous level of the headings
      var prevLevel = 0;
      // running total of the article headings
      var headNum = 0;
      //loop through all of the child nodes of source article until no child nodes are left
      for (var n = source.firstChild; n !== null; n = n.nextSibling) {
            //examine only article headings
            var headLevel = headings.indexOf(n.nodeName);
            if (headLevel !== -1) {
                  // add an id to the heading if it is missing
                  headNum++;
                  // to check if there is an id already
                  if (n.hasAttribute("id") === false ) {
                        // if false you ad an id of head +headNum var which is added every time
                        n.setAttribute("id", "head" + headNum);
                  }
                  var listElem = document.createElement("li");

                  // create hypertext links to the document headings
                  var linkElem = document.createElement("a");
                  linkElem.innerHTML = n.innerHTML;
                  linkElem.setAttribute("href", "#" + n.id);

                  // append the hypertext link to the list item
                  listElem.appendChild(linkElem);
                  if (headLevel === prevLevel) {
                        // append the list item to the current list
                        outlineList.appendChild(listElem);
                  } else if (headLevel > prevLevel) {
                        // start a new nested list
                        var nestedList = document.createElement("ol");
                        nestedList.appendChild(listElem);
                        // append nested list to last item in the current list
                        outlineList.lastChild.appendChild(nestedList);
                        // change the current list to the nested list
                        outlineList = nestedList;
                  } else {
                        // append the list item to a higher list
                        // calculate the difference between the current and previous level
                        var levelUp = prevLevel - headLevel;
                        // go up to a higher level
                        for (var i = 1; i <= levelUp; i++) {
                              outlineList = outlineList.parentNode.parentNode;
                        }
                        outlineList.appendChild(listElem);
                  }
                  // update the value of prevLevel
                  prevLevel = headLevel;
            }
      }
}