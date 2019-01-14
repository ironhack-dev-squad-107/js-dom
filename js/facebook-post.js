console.log("Is Facebook Post's JS file connected?");

var postBtn = document.querySelector(".post-button");

postBtn.onclick = function() {
  console.log("coucou POST COMMENT click");
  // search for the text field where the user typed their comment
  var textField = document.querySelector(".comment-input");

  // create the new tag (createElement makes new DOM objects)
  var newLi = document.createElement("li");
  // use the text field's VALUE to get what the user typed
  newLi.innerHTML = textField.value + " <button class='delete'>🗑</button>";

  // add the new tag to the parent element
  // (appendChild adds a new DOM object to a tag WITHOUT deleting anything)
  var list = document.querySelector(".comment-list");
  list.appendChild(newLi);

  // reset the text back to empty after the comment is posted
  textField.value = "";

  // search for the delete button INSIDE the new <li>
  var oneButton = newLi.querySelector(".delete");

  // add click functionality to the NEW button
  oneButton.onclick = function() {
    console.log("coucou DELETE button");
    // get the PARENT of the <button> (the <li> tag)
    var parentLi = oneButton.parentNode;
    // remove the <li> from the DOM
    parentLi.remove();
  };
};

// -----------------------------------------------------------------------------

// delete button functionality for the buttons that ALREADY EXIST
// (comments added later won't work with this)
var deleteBtnArray = document.querySelectorAll(".delete");

// for each delete button...
deleteBtnArray.forEach(function(oneButton) {
  // add click functionality to the button
  oneButton.onclick = function() {
    console.log("coucou DELETE button");
    // get the PARENT of the <button> (the <li> tag)
    var parentLi = oneButton.parentNode;
    // remove the <li> from the DOM
    parentLi.remove();
  };
});
