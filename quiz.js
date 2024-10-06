function checkAnswer(userAnswer, correctAnswer = 4) {
    if (userAnswer === correctAnswer) {
      console.log("Correct! Well done.");
      // Optionally, update a message on the webpage
      // document.getElementById('feedback').innerText = "Correct! Well done.";
    } else {
      console.log("That's incorrect. Try again!");
      // Optionally, update a message on the webpage
      // document.getElementById('feedback').innerText = "That's incorrect. Try again!";
    }
  }
  
  // Example usage:
  checkAnswer(4); // Correct! Well done.
  checkAnswer(2); // That's incorrect. Try again!

  function checkAnswer() {
    let correctAnswer = "4";
    document.querySelector('[name="quiz"]');
    let userAnswer = document.querySelector('[name="quiz"]:checked').value;
    document.querySelector('[name="quiz"]').checked;
    if (userAnswer === correctAnswer) {
      document.getElementById("feedback").innerHTML = "Correct! Well done.";
    } else {
      document.getElementById("feedback").innerHTML =
        "That's incorrect. Try again!";
    }
  }
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);  