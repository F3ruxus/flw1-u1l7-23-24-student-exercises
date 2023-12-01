// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Juan";
    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://www.google.com/url?sa=i&url=https%3A"
    // 3. Updated the src of main to a photo that's be your first post.
  main.src = "https://wallup.net/wp-content/uploads/2019/09/295784-mountains-landscapes-nature-california-streams-land.jpg"
});


// String Interpolation example
let name = 'John';
let greeting = `Hello, ${name}!`;

console.log(greeting); // Hello, John!


// Template Literals example
let a = 10;
let b = 20;
let result = `Sum of a and b is ${a + b}.`;
console.log(result); // The sum of a and b is 30.

// InnerHTML example
let name2 = "Sara";
name2.innerHTML = `Hello, ${name2}!`;
