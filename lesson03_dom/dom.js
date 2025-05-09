document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("main-title");
  const button = document.getElementById("btn");
  const output = document.getElementById("output");

  title.textContent = "Welcome to DOM!";
  title.style.color = "purple";
  title.style.fontSize = "2rem";
  button.style.backgroundColor = "pink";

  button.addEventListener("click", function () {
    output.textContent = "You clicked the button!";
  });

  document.addEventListener("keydown", function (event) {
    console.log("You pressed:", event.key);
    output.textContent = `You pressed: ${event.key}`;
  });
});