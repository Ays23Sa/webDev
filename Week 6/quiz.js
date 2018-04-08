(function() {
  function buildQuiz() {
    
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

     
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        
        answerContainers[questionNumber].style.color = "red";
      }
    });

    
    resultsContainer.innerHTML = `RESULTS: ${numCorrect} out of ${myQuestions.length} Correct Answer`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "When was the QuickShop Online Store launched?",
      answers: {
        a: "2016",
        b: "2017",
        c: "2018",
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the CEO of QuickShop ?",
      answers: {
        a: "Ayushi",
        b: "Aditi",
        c: "Anant"
      },
      correctAnswer: "a"
    },
    {
      question: "How many cities are covered in the network of QuickShop services?",
      answers: {
        a: "5",
        b: "4",
        c: "3",
        
      },
      correctAnswer: "b"
    }
  ];

  
  buildQuiz();
	
    submitButton.addEventListener("click", showResults);
})();