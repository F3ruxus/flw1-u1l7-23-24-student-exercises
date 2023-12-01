// html elements
let circle = document.querySelector(".circle");
let square = document.querySelector(".square");
let rectangle = document.querySelector(".rectangle");

circle.addEventListener("click", function() {

    // 1. Update the circle using the style property.
    // - Set the background color to purple.
    // - Set the width to 150px.
    // - Set the height to 150px.
  circle.style.padding = "150px";
  circle.style.backgroundColor = "grey";
  circle.style.width = "150px";
  circle.style.height = "150px";
});

square.addEventListener("click", function() {

    // 2. Update the square using the style property.
    // - Set the background color to yellow.
    // - Set the width to 150px.
    // - Set the height to 150px.
  square.style.backgroundColor = "yellow";
  square.style.width = "150px";
  square.style.height = "150px";
});

rectangle.addEventListener("click", function() {

    // 3. Update the rectangle using the style property.
    // - Set the background color to orange.
    // - Set the width to 250px.
    // - Set the height to 150px.
    rectangle.style.backgroundColor = "orange";
    rectangle.style.width = "250px";
    rectangle.style.height = "150px";
});

// Extension: Check out the available CSS properties here: https://www.w3schools.com/cssref/index.php 
// - Set a new CSS property and value for each shape using the same style property syntax.
// - See if you can get the rectangle to disappear when clicked (hint: check out the display CSS property)

// rectangle.addEventListener("click", function() {
//     rectangle.style.display = "none";
// });

// selector.style.cssProperty = "value";