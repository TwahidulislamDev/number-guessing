// code screen one start
let playerOneNameInput = document.querySelector(".playerOneNameInput");
let PlayerOneStartGameBtn = document.querySelector(".PlayerOneStartGameBtn");
let screenOneError = document.querySelector(".screenOneError");
// Screen One Name Screen

PlayerOneStartGameBtn.addEventListener("click", function () {
  let FirstInputFieldText = playerOneNameInput.value;
  if (FirstInputFieldText == "") {
    screenOneError.style.display = "block";
  } else {
    document.querySelector(".screenTwo").style.display = "block";
    document.querySelector(".screenOne").style.display = "none";
  }
});
// code screen one End

// Code Screen Two Number
// let playerOneNumberHeadding = document.querySelector(".playerOneNumberHeadding");
let playerOneNumberInput = document.querySelector(".playerOneNumberInput");
let PlayerOneLetsPlayBtn = document.querySelector(".PlayerOneLetsPlayBtn");
let screenOneNumberError = document.querySelector(".screenOneNumberError");

PlayerOneLetsPlayBtn.addEventListener("click", function () {
  let firstInputFieldNumber = playerOneNumberInput.value;
  if (firstInputFieldNumber >= 0 && firstInputFieldNumber < 11) {
    if (firstInputFieldNumber == "") {
      screenOneNumberError.style.display = "block";
    } else {
      document.querySelector(".screenThree").style.display = "block";
      document.querySelector(".screenTwo").style.display = "none";
    }
  } else {
    document.querySelector(".InvalidInputError").style.display = "block";
  }
});
// code screen Two End

// code screen Three start
let playerTwoNameInput = document.querySelector(".playerTwoNameInput");
let playerTwoStartGameBtn = document.querySelector(".playerTwoStartGameBtn");
let playerTwoScreenOneError = document.querySelector(
  ".playerTwoScreenOneError"
);

playerTwoStartGameBtn.addEventListener("click", function () {
  let secondInputFieldText = playerTwoNameInput.value;
  if (secondInputFieldText == "") {
    playerTwoScreenOneError.style.display = "block";
  } else {
    document.querySelector(".screenFour").style.display = "block";
    document.querySelector(".screenThree").style.display = "none";
  }
});
// code screen Three End

// code screen Four start
// let playerOneNumberHeadding = document.querySelector(".playerOneNumberHeadding");
let playerTwoNumberInput = document.querySelector(".playerTwoNumberInput");
let PlayerTwoLetsPlayBtn = document.querySelector(".PlayerTwoLetsPlayBtn");
let screenTwoNumberError = document.querySelector(".screenTwoNumberError");
let winScreen = document.querySelector(".winScreen");
let player01Name = document.querySelector(".player01Name");
let player02Name = document.querySelector(".player02Name");
let WinLost = document.querySelector(".WinLost");
let faildText = document.querySelector(".faildText");
let faildTextTwo = document.querySelector(".faildTextTwo");

let chances = [];
PlayerTwoLetsPlayBtn.addEventListener("click", function () {
  let lastInputFieldNumber = playerTwoNumberInput.value;
  if (lastInputFieldNumber < 11) {
    if (lastInputFieldNumber == "") {
      screenTwoNumberError.style.display = "block";
    } else {
      if (
        Number(playerOneNumberInput.value) == Number(playerTwoNumberInput.value)
      ) {
        winScreen.style.display = "block";
        document.querySelector(".screenFour").style.display = "none";
        player01Name.innerHTML = playerTwoNameInput.value;
      } else {
        chances.push(lastInputFieldNumber);
        if (chances.length == 3) {
          winScreen.style.display = "block";
          document.querySelector(".screenFour").style.display = "none";
          player01Name.innerHTML = playerOneNameInput.value;
          WinLost.innerHTML = "🎉Win The Game🎉";
          player02Name.innerHTML = playerTwoNameInput.value;
          faildText.innerHTML = "🙅‍♂️ Sorry, You are Failed🙅‍♂️";
          faildTextTwo.innerHTML = "You used all your Chances.Try Next Time!!!";
          faildText.style.color = "red";
        }
      }
    }
  } else {
    document.querySelector(".InvalidInputError02").style.display = "block";
  }
});

// code screen Four End
