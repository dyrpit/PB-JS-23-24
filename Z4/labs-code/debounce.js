// Create a debounce function that allows efficient handling of time-consuming tasks

// Elements
const input = document.querySelector("#text");

// Listeners
input.addEventListener("input", function (event) {
  debounceInput(event.target.value);
});

// Functions
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function handleInput(value) {
  console.log("Input value:", value);
}

const debounceInput = debounce(handleInput, 500);
