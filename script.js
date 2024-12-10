var questions    = [
      {
        question:"What is the largest Aquatic animal?",
        options : ["Collosal squid","orca","Blue Whale","Oarfish"],
        answer  :2
      },
      {
        question:"What is the fastest animal?",
        options :["Mexican pronghorn","Thomson's gazelle","Springbok","Cheetah"],
        answer  :3
      },
      {
        question:"What is the fastest animal in the sky?",
        options :["peregrine falcon","White-throated needletail swift", "Kiwi","Golden eagle"],
        answer  :0
      }
 ];
var score = 0;
var currentQuestionIndex=0;

function loadQuestion(){
  var questionContainer = document.getElementById("question-container");
  var optionsContainer = document.getElementById("options-container");

  if (currentQuestionIndex < questions.length){
      
       questionContainer.textContent = questions[currentQuestionIndex].question;
       optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.
    
    forEach(function(option, index) {
      var button = document.createElement("button");
      button.textContent = option ;

      button.onclick = function() { 
        checkAnswer(index);
      };
      optionsContainer.appendChild(button);
    }); 
    } else {
    showScore()
  }
}
  function checkAnswer(selectedIndex){
currentQuestionIndex++;
loadQuestion();
 }





loadQuestion();

// function Quizstart(){
//   marks= 0
//   score=0
// for (var i = 0; i< questions.length ; i++) {
//     var userAnswer = prompt(questions[i].question + "\n" + questions[i].options.join("\n"));

//     if (parseInt(userAnswer) === questions[i].answer+1){
//         score++;
//     }

//     marks= (score/questions.length)*100
// };
// alert("Your score is " + marks + "%")
// }

// alert("This is a test")
// var a=prompt("Enter")
// document.write("Success " + a)