/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Andy Zhang
      Date: 09/10/2023

      Filename: project02-03.js
 */
//reference html elements
const square = document.getElementById("square");
const triangle = document.getElementById("triangle");
const circle = document.getElementById("circle");
const feedbackParagraph = document.getElementById("feedback");

// Add mouseover event listeners to each shape div
square.addEventListener("mouseover", () => {
  feedbackParagraph.textContent = "You hovered over the square.";
});

triangle.addEventListener("mouseover", () => {
  feedbackParagraph.textContent = "You hovered over the triangle.";
});

circle.addEventListener("mouseover", () => {
  feedbackParagraph.textContent = "You hovered over the circle.";
});

// Add mouseout event listerns to each shape div
square.addEventListener("mouseout", () => {
  feedbackParagraph.textContent = "";
});

triangle.addEventListener("mouseout", () => {
  feedbackParagraph.textContent = "";
});

circle.addEventListener("mouseout", () => {
  feedbackParagraph.textContent = "";
});
