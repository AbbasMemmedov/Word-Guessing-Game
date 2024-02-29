const wordBank = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "computer",
  "keyboard",
  "internet",
  "software",
  "mountain",
  "ocean",
  "forest",
  "desert",
  "river",
  "basketball",
  "soccer",
  "tennis",
  "volleyball",
  "music",
  "guitar",
  "piano",
  "violin",
  "drums",
  "book",
  "library",
  "reading",
  "writing",
  "novel",
  "dog",
  "cat",
  "bird",
  "fish",
  "hamster",
  "car",
  "bicycle",
  "train",
  "airplane",
  "ship",
  "house",
  "building",
  "street",
  "city",
  "country",
  "friend",
  "family",
  "love",
  "happiness",
  "dream",
  "sun",
  "moon",
  "star",
  "planet",
  "galaxy",
  "universe",
  "tree",
  "flower",
  "grass",
  "mountain",
  "valley",
  "ocean",
  "river",
  "lake",
  "cloud",
  "rain",
  "snow",
  "wind",
  "fire",
];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex];
}
const randomWord = getRandomWord();
console.log(randomWord);

let startBtn = document.querySelector(".StartBtn");
function start() {
  startBtn.style.display = "none";
  let allInputs = document.createElement("div");
  allInputs.classList.add("allInput");
  for (let index = 0; index < randomWord.length; index++) {
    let input = document.createElement("input");
    if (index > 0) {
      input.classList.add("input");
    }
    input.type = "text";
    input.maxLength = 1;
    input.addEventListener("input", function () {
      if (this.value.length === this.maxLength) {
        const nextInput = this.nextElementSibling;
        if (nextInput !== null) {
          nextInput.focus();
        }
      }
    });
    if (index === 0) {
      input.value = randomWord[index].toUpperCase();
      input.style.backgroundColor = "deepskyblue";
      input.style.boxShadow = "0 0 15px deepskyblue";
    }
    allInputs.appendChild(input);
  }

  let tryBtn = document.createElement("button");
  tryBtn.textContent = "TRY";
  tryBtn.classList.add("tryBtn");
  tryBtn.setAttribute("onclick", "Try()");
  allInputs.appendChild(tryBtn);

  let container = document.querySelector(".container");
  container.appendChild(allInputs);
}

function Try() {
  let inputs = document.querySelectorAll(".allInput input");
  let randomLetters = randomWord.split("");
  let newLine = document.createElement("br");
  let container = document.querySelector(".container");
  container.appendChild(newLine);

  for (let i = 0; i < randomWord.length; i++) {
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.maxLength = 1;
    newInput.addEventListener("input", function () {
      if (this.value.length === this.maxLength) {
        const nextInput = this.nextElementSibling;
        if (nextInput !== null) {
          nextInput.focus();
        }
      }
    });
    if (inputs[i] && inputs[i].value.toLowerCase() === randomLetters[i]) {
      newInput.value = inputs[i].value;
      newInput.style.backgroundColor = "limegreen";
      newInput.style.boxShadow = "0 0 15px green";
      newInput.style.borderColor = "green";
    } else {
      newInput.value = inputs[i].value;
      newInput.style.backgroundColor = "red";
      newInput.style.boxShadow = "0 0 15px red";
      newInput.style.borderColor = "red";
    }
    container.appendChild(newInput);
  }
  let delInput = document.querySelector(".input");
  delInput.value = "";
  for (i = 1; i < inputs.length; i++) {
    inputs[i].value = "";
    inputs[i].style.backgroundColor = "";
  }
}
