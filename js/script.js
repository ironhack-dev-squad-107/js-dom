console.log("Does script.js work?");

var dog = document.querySelector("h1");

// the browser will run this function when the H1 is CLICKED
dog.onclick = function() {
  console.log("coucou DOG click");

  var cat = document.querySelector("#cat");
  cat.innerHTML = "MEOW";
  cat.style.backgroundColor = "black";
  cat.style.color = "white";

  // use querySelectorAll for getting more than one tag from the DOM
  var mice = document.querySelectorAll(".mouse");
  // loop to work with the results of the NodeList (it's like an array)
  mice.forEach(function(oneMouse, index) {
    oneMouse.innerHTML = "Mouse #" + index;
    oneMouse.style.backgroundColor = "grey";
    oneMouse.style.color = "white";
  });
};

// -----------------------------------------------------------------------------

var mouseButton = document.querySelector("button");

mouseButton.onclick = function() {
  console.log("coucou BUTTON click");

  // create the new tag (createElement makes new DOM objects)
  var newMouse = document.createElement("div");
  newMouse.classList.add("mouse");

  // add the new tag to the parent element
  // (appendChild adds a new DOM object to a tag WITHOUT deleting anything)
  var mouseWrapper = document.querySelector(".mouse-hole");
  mouseWrapper.appendChild(newMouse);

  // use querySelectorAll for getting more than one tag from the DOM
  var mice = document.querySelectorAll(".mouse");
  // loop to work with the results of the NodeList (it's like an array)
  mice.forEach(function(oneMouse, index) {
    oneMouse.innerHTML = "Mouse #" + index;
    oneMouse.style.backgroundColor = "grey";
    oneMouse.style.color = "white";
  });
};
