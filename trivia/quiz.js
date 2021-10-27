// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const errorDiv = document.getElementById("error");
const nonerrorDiv = document.getElementById("nonerror");
let element = 0;



// create some variables

//const lastQuestion = questions.length - 1;
let correct;
let lastQuestion = 1;
let runningQuestion = 0;
let count = 0;
let pause = false;
const questionTime = 100; // 60s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
/* CHANGE questions TO HARDCODE LATER */
let questions = [];

// Reset Timer
function resetTimer(){
    count = 0;
}
function pauseTimer(){
    clearInterval(TIMER);
}
function resumeTimer(){
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}
function doSomething(){
    console.log("something done");
}
function howManyBool(cat, total,dif){
    url = 'https://opentdb.com/api.php?amount='+total+'&difficulty='+dif+'&category='+cat;
    console.log("how many url", url);
    let fetchRes = fetch(url);
            fetchRes.then(res => 
                res.json()).then(d => {  
                    if(d.response_code == 0){
                        for(let i=0; i<d.results.length; i++){
                            if(d.results[i].type == "boolean") { 
                                console.log("bool!!", element);
                                element++;
                                
                            }
                        }
                        if(d.results.length == 50){
                            document.getElementById("ctotal").innerHTML += ("-?");
                        } else {
                            document.getElementById("ctotal").innerHTML += ("-"+(element));
                        }
                    } else {
                        element = 0;
                    }
                })  
    
}
function howMany(){
        let c = document.getElementById("category").value;
        let dif = document.getElementById("difficulty").value;
        let url;
        element = 0;
        if(c == "1") {
            url = "https://opentdb.com/api_count_global.php"
        } else {
            url = "https://opentdb.com/api_count.php?category="+c;
        }
        console.log(url);
        let fetchRes = fetch(url);
            fetchRes.then(res => 
                res.json()).then(d => {  
                console.log(d);
                    if(c == "1"){
                        document.getElementById("ctotal").innerHTML = d.overall.total_num_of_questions-1;
                    } else {
                        switch (dif){
                              case "easy":
                                console.log("easy");
                                howManyBool(c,d.category_question_count.total_easy_question_count,dif);
                                //console.log("sub",sub);
                                console.log("element",element);
                                document.getElementById("ctotal").innerHTML = (d.category_question_count.total_easy_question_count);
                                break;
                              case "medium":
                                console.log("medium");
                                howManyBool(c,d.category_question_count.total_medium_question_count,dif);
                                document.getElementById("ctotal").innerHTML = (d.category_question_count.total_medium_question_count);
                                break;
                              case "hard":
                                console.log("hard");
                                howManyBool(c,d.category_question_count.total_hard_question_count,dif);
                                document.getElementById("ctotal").innerHTML = (d.category_question_count.total_hard_question_count);
                                break;
                              case "any":
                                console.log("any");
                                document.getElementById("ctotal").innerHTML = (d.category_question_count.total_question_count-1);
                                break;
                              default:
                                console.log("not found");
                            } 
                    }
                })  
        
}
function create(){
        document.getElementById("error").innerHTML = '';
        document.getElementById("nonerror").innerHTML = '';
        document.getElementById("holiday").innerHTML = '';
        let c = document.getElementById("category").value;
        let n = document.getElementById("quantity").value;
        let d = document.getElementById("difficulty").value;
        let t = 'multiple';
        let url;
        if(c == "1" && d == "any"){  url = 'https://opentdb.com/api.php?amount='+n+'&type=multiple'; }
        if(c == "1" && d != "any"){  url = 'https://opentdb.com/api.php?amount='+n+'&difficulty='+d+'&type=multiple'; }
        if(c != "1" && d == "any"){  url = 'https://opentdb.com/api.php?amount='+n+'&category='+c+'&type=multiple'; } 
        if(c != "1" && d != "any"){  url = 'https://opentdb.com/api.php?amount='+n+'&category='+c+'&difficulty='+d+'&type=multiple'; }
        console.log(url);
        setTimeout(doSomething, 3000);
        
        let fetchRes = fetch(url);
        fetchRes.then(res => 
            res.json()).then(d => { 
                // CHANGE questions TO HARDCODE LATER 
                questions = d["results"];
                if(d.response_code == 1){
                    nonerror.style.display = "none";
                    error.style.display = "block";
                    error.style.color = "red";
                    document.getElementById("error").innerHTML = 'Not Enough Data :( <button onclick="location.reload()">reload</button>'; 
                } else if (d.response_code != 0){
                    nonerror.style.display = "none";
                    error.style.display = "block";
                    error.style.color = "red";
                    document.getElementById("error").innerHTML = 'Invalid Parameter <button onclick="location.reload()">reload</button>';
                } else {
                    nonerror.style.display = "none";
                    error.style.display = "block";
                    error.style.color = "teal";
                    document.getElementById("error").innerHTML = 'Quiz Created <button onclick="create()">create again</button><button onclick="startQuiz()">start quiz</button>';
                }
                console.log("code->",d.response_code);
                console.log("questions->",questions);
            
            })  
        
}

function runHalloween(){
    questions = [
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Celts",
            difficulty: "medium",
            incorrect_answers: ["Vikings","Moors","Romans"],
            question: "Halloween was started by which group of people?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Spiderman",
            difficulty: "medium",
            incorrect_answers: ["Elsa","Ghost","Pumpkin"],
            question: "What’s the most popular Halloween costume for kids in 2021?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Bart",
            difficulty: "simpsons",
            incorrect_answers: ["Maggie","Lisa","Marge"],
            question: "Lisa reads the story of 'The Raven' and Homer sees himself as the narrator. Who did Homer see as the raven?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Reese's",
            difficulty: "hmmmm idk",
            incorrect_answers: ["M$M's","Milk Duds","Snickers"],
            question: "Which of these types of candy is the most popular in the USA during Halloween?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Jack-in-the-box",
            difficulty: "simpsons",
            incorrect_answers: ["Hoola Hoop","Basketball","Doll"],
            question: "Bart turns Homer into a ______",
        },        
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Apple bobbing",
            difficulty: "super duper easy",
            incorrect_answers: ["Dipping for pears","Gone pineapple fishing","That’s my tomato!"],
            question: "What’s the name of the activity that involves grabbing floating fruit with your teeth?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Ireland",
            difficulty: "super duper easy",
            incorrect_answers: ["Brazil","India","Germany"],
            question: "In which country did Halloween start?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Good/Evil",
            difficulty: "simpsons",
            incorrect_answers: ["Good/Bad","Sad/Mad","On/Off"],
            question: "On the back of Bart's Krusty doll was a switch. What were the choices?",
        },  
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "1993",
            difficulty: "medium",
            incorrect_answers: ["1987","1999","2003"],
            question: "The modern classic The Nightmare Before Christmas was released in what year?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Daughter",
            difficulty: "easy",
            incorrect_answers: ["Mother","Father","Son"],
            question: "Wednesday Addams is which member of the Addams family?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Linus",
            difficulty: "hard",
            incorrect_answers: ["Snoopy","Sally","Schroeder"],
            question: "In the 1966 classic ‘It’s the Great Pumpkin, Charlie Brown’, which character explains the tale of the Great Pumpkin?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Apples",
            difficulty: "medium",
            incorrect_answers: ["Chestnuts","Grapes","Potatoes"],
            question: "Lamb’s Wool’ a popular Halloween drink in the 18th Cent was made of milk and…",
        },  
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Samhainophobia",
            difficulty: "hard",
            incorrect_answers: ["Hallophopbia","Triskaphobia","Hellenologophobia"],
            question: "What is the phobia of Halloween called?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Saint",
            difficulty: "medium",
            incorrect_answers: ["Spook","Spirit","Sin"],
            question: "What does the word ‘Hallow’ mean?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Mexico",
            difficulty: "medium",
            incorrect_answers: ["Italy","Scotland","Aboriginal Austrailia"],
            question: "Which country celebrates Halloween by eating sweet skulls?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Coven",
            difficulty: "medium",
            incorrect_answers: ["Cauldron","Commune","Cauldron"],
            question: "What is a group of witches called?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Dan Aykroyd",
            difficulty: "medium",
            incorrect_answers: ["Rick Moranis","Ernie Hudson","Bill Murray"],
            question: "Which actor in ‘Ghostbusters’ was also a co-writer of the film?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Bobby Pickett",
            difficulty: "hard",
            incorrect_answers: ["Billy Ray Cyrus","Frank Sinatra","Frankie Avalon"],
            question: "Who sings the song, Monster Mash?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Victor",
            difficulty: "medium",
            incorrect_answers: ["Francois","Boris","Schweitzer"],
            question: "What was Dr. Frankenstein’s first name?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Human beings",
            difficulty: "hard",
            incorrect_answers: ["Jewelry","Goats","Hair"],
            question: "What did the Druids sacrifice to the Gods?",
        },
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Marge",
            difficulty: "simpsons",
            incorrect_answers: ["Mr Burns","Bart","Homer"],
            question: "Who was the head vampire?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Marge",
            difficulty: "simpsons",
            incorrect_answers: ["Mr Burns","Bart","Homer"],
            question: "Who was the head vampire?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "He got an axe in the back",
            difficulty: "simpsons",
            incorrect_answers: ["He got fired","He gets lost","Zoomed into outer Space"],
            question: "What happened to Willie in all three parts?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Erotic Cakes",
            difficulty: "simpsons",
            incorrect_answers: ["Chocolate Store","TV Store","Liquor Stores"],
            question: "What shop did Homer go into when he came to the 3D world?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Hugo",
            difficulty: "simpsons",
            incorrect_answers: ["Barb","Trab","Billy"],
            question: "What is Bart's twin named?",
        }, 
        {
            category: "Halloween",
            type: "multiple",
            correct_answer: "Ralph",
            difficulty: "simpsons",
            incorrect_answers: ["Wendel","Martin","Lewis"],
            question: "In 'Nightmare Cafeteria', who was the last kid left in the room after Bart, Lisa and Milhouse snuck out?",
        }
    ]
        questions.sort(() => Math.random() - 0.5);
        console.log("In Run Halloween",questions);
        setTimeout(doSomething, 3000);
        startQuiz();
}

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    let ran = Math.floor((Math.random() * 4) + 1);
    let title = q.correct_answer.replace(/\s/g, '');
    question.innerHTML = "<p><h3>"+q.category+"["+q.difficulty+"]</h3>"+ q.question +"</p>";
    if(q.category != "Halloween") { 
        qImg.innerHTML = "<img alt="+title+" title="+title+" src='img/logo.png'>";
    } else {
        qImg.innerHTML = "<img alt="+title+" title="+title+" src='img/halloween.jpg'>";
    }
    switch(ran) {
      case 1:
            correct = 'D';
            choiceA.innerHTML = q.incorrect_answers[0];
            choiceB.innerHTML = q.incorrect_answers[1];
            choiceC.innerHTML = q.incorrect_answers[2];
            choiceD.innerHTML = q.correct_answer;
        break;
      case 2:
            correct = 'A';
            choiceA.innerHTML = q.correct_answer;
            choiceB.innerHTML = q.incorrect_answers[0];
            choiceC.innerHTML = q.incorrect_answers[2];
            choiceD.innerHTML = q.incorrect_answers[1];
        break;
      case 3:
            correct = 'B';
            choiceA.innerHTML = q.incorrect_answers[0];
            choiceB.innerHTML = q.correct_answer;
            choiceC.innerHTML = q.incorrect_answers[2];
            choiceD.innerHTML = q.incorrect_answers[1];
        break;
      case 4:
            correct = 'C';
            choiceA.innerHTML = q.incorrect_answers[0];
            choiceB.innerHTML = q.incorrect_answers[1];
            choiceC.innerHTML = q.correct_answer;
            choiceD.innerHTML = q.incorrect_answers[2];
        break;
      default:
        // code block
    } 

}

//start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    console.log("In Start Quiz");
    lastQuestion = questions.length - 1;
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
    console.log("TIMER ",TIMER);
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    
    //if( answer == questions[runningQuestion].correct_answer){
    if(answer == correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += '<br><button onclick="location.reload()">Play Again</button>';
}





















