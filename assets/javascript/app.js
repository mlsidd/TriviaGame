var doneButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var timer = document.getElementById("timer");
var tryAgainButton = document.getElementById("tryAgain");
tryAgainButton.style.display = "none";


var questionArray = [
        {
            question: "1.  No! I'm going to limit myself to doing everything girls do wrong in relationships.  Basically everything we know guys hate.",
            a:  "a.  Sleepless in Seattle",
            b:  "b. How to Lose a Guy in 10 Days",
            c:  "c.  Serendipity",
            d:  "d.  The Ugly Truth",
            answer:  "d"
        },
        {
            question:  "2.  I guess in this society being male and an asshole makes you worthy of our time.",
            a:  "a.  10 Things I Hate About You",  
            b: "b.  Runaway Bride",
            c:  "c.  How to Lose a Guy in 10 Days",
            d:  "d.  Along Came Polly",
            answer: "a"
        },
        {
            question:  "3.  I came here tonight because when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
            a: "a.  Runaway Bride",
            b:  "b.  When Harry Met Sally",
            c:  "c.  Sleepless in Seattle",  
            d: "d.  Serendipity",
            answer: "b"
        },
        {
            question:  "4.  I can treat that jackass like any other faceless groom. That's just what I'm gonna do.  Why? Because he's nothing! Because I love a challenge! And because I am a goddamn professional!",
            a:  "a.  Wedding Crashers",
            b:  "b.  The Wedding Planner", 
            c:  "c.  Pretty Woman",  
            d:  "d.  How to Lose a Guy in 10 Days", 
            answer: "b"
        },
        {
            question:  "5.  Oh why don't you go back to your double-wide and fry something!  Nobody talks to my mama like that!",
            a:  "a.  Serendipity",
            b:  "b.  Runaway Bride",
            c:  "c.  Sweet Home Alabama",
            d:  "d.  Along Came Polly",
            answer: "c"
        },
        {
            question:  "6.  Marriage is like an unfunny, tense version of 'Everybody Loves Raymond",
            a:  "a.  Knocked Up",
            b:  "b.  Wedding Crashers",
            c:  "c.  The Proposal",
            d:  "d.  Sweet Home Alabama",
            ansewr: "a"
        },
        {
            question:  "7.  Seriously!? It's like you're photoshopped!",
            a: "a.  Serendipity",
            b:  "b.  Pretty Woman",
            c:  "c.  Runaway Bride",
            d:  "d.  Crazy Stupid Love",
            answer: "d"
        },
        {
            question:  "8.  Is it true that if you don't use it, you lose it?",
            a: "a. Pretty Woman ",
            b:  "b.  How to Lose a Guy in 10 Days",
            c:  "c.  The 40 Year Old Virgin  ",
            d:  "d. Serendipity",
            answer: "c"
        }];



function showQuiz(){
    tryAgainButton.style.display = "none";
    startButton.style.display = "none";

for (var i = 0; i < questionArray.length; i++) {
    var questionDiv = $("<div class='question'>");
    var answerDiv = $("<div id='answers'>");

    questionDiv.append(questionArray[i].question);
    answerDiv.append("<input type='radio' class = 'clicker' value='a' name='"+i+"'>" + questionArray[i].a);
    answerDiv.append("<input type='radio' class = 'clicker' value='b' name='"+i+"'>" + questionArray[i].b);
    answerDiv.append("<input type='radio' class = 'clicker' value='c' name='"+i+"'>" + questionArray[i].c);
    answerDiv.append("<input type='radio' class = 'clicker' value='d' name='"+i+"'>" + questionArray[i].d) + "<br id='br'>";

    $("input[name='i']:radio").addClass('radioButtons');

    $("#quiz").append(questionDiv);
    $("#quiz").append(answerDiv);
    
    

}
}

startButton.addEventListener('click', showQuiz);
startButton.addEventListener('click', run);



doneButton.addEventListener('click', showResults);

//create timer that counts down 2 minutes

var number = 180;

    var intervalId;

    $("#done").on("click", stop);

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;

//display the timer

      $("#time").html("<h2 id='time'> Seconds Left:  " + number + "</h2>");

//when time is up, clear the interval

      if (number === 0) {

        stop();

        alert("Your Time is Up!  Let's see how you did...");
      }
    }

    function stop() {

      clearInterval(intervalId);
      showResults();
    }

    function showResults() {
        $("#quiz").empty();
        doneButton.style.display = "none";
        clearInterval(intervalId);
        tryAgainButton.style.display = "block";
    }


    tryAgainButton.addEventListener('click', reset);

    function reset() {
        window.location.reload();
    };

    
