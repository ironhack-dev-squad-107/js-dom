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
