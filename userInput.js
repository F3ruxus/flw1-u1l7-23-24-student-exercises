// button and div element
let saveButton = document.querySelector('.save-button');
let displayMessage = document.querySelector('.actual-display-message')

// click event for button
saveButton.addEventListener('click', function() {
    

    // 1. Take a look at the userInput.html file to look over the elements there.
  

    // 2. Declare a variable called userInput.
    // - Select the class of the input field using querySelector.
    // - Add the value method.
  var userInput = document.querySelector(".user-input").value;

    // 2. Set the innerHTML of the display div to the user input.
  displayMessage.innerHTML = userInput;


});

// Storing user data example //
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//  let userInput = document.querySelector("input").value;
// };


// .value example
// 1 click event {
// 2  let userInput = html.value;
// 3 };
