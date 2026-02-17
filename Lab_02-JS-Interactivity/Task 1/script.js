// Correct answers
let a1 = "hyper text markup language";
let a2 = "styling";
let a3 = "javascript";
let a4 = "scripting";
let a5 = "document object model";

function checkQuiz() {
    let score = 0;

    let q1 = document.getElementById("q1").value.toLowerCase();
    let q2 = document.getElementById("q2").value.toLowerCase();
    let q3 = document.getElementById("q3").value.toLowerCase();
    let q4 = document.getElementById("q4").value.toLowerCase();
    let q5 = document.getElementById("q5").value.toLowerCase();

    if (q1 === a1) score++;
    if (q2.includes(a2)) score++;
    if (q3 === a3) score++;
    if (q4 === a4) score++;
    if (q5 === a5) score++;

    let result = document.getElementById("result");
    result.innerHTML = "Your Score: " + score + " / 5";

    // Conditional feedback
    if (score === 5) {
        result.style.background = "lightgreen";
        result.innerHTML += "<br>Excellent!";
    } 
    else if (score >= 3) {
        result.style.background = "lightblue";
        result.innerHTML += "<br>Good job!";
    } 
    else {
        result.style.background = "lightcoral";
        result.innerHTML += "<br>Try again!";
    }
}

function resetQuiz() {
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("q4").value = "";
    document.getElementById("q5").value = "";

    let result = document.getElementById("result");
    result.innerHTML = "";
    result.style.background = "transparent";
}
