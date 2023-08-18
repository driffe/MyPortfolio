// Function to switch between quizzes
function openQuiz(evt, quiz) {
    // Hide all quiz contents and deactivate all buttons
    const tabcontents = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
        tablinks[i].classList.remove("active");
    }

    // Show the selected quiz content and mark the button as active
    document.getElementById(quiz).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Function to check Quiz 01 answer
function check01() {
    const finalAns = 4;
    const element01 = document.getElementById("ansBox01");
    const tempAns = element01 ? element01.value : 0;

    if (parseInt(tempAns) === finalAns) {
        // Block the input and provide feedback
        alert("Answer!");
        element01.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 01
function hintCheck01() {
    const value01 = parseInt(document.getElementById("textbox01-1").value) || 0;
    const value02 = parseInt(document.getElementById("textbox02-1").value) || 0;

    let ans;
    if (value01 < value02) {
        ans = value02 % value01;
    } else {
        ans = value01 % value02;
    }

    document.getElementById("result01").value = ans;
}

// Function to check Quiz 02 answer
function check02() {
    const finalAns = 9;
    const element02 = document.getElementById("ansBox02");
    const tempAns = element02 ? element02.value : 0;

    if (parseInt(tempAns) === finalAns) {
        // Block the input and provide feedback
        element02.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 02
function hintCheck02() {
    const value01 = parseInt(document.getElementById("textbox01-2").value) || 0;
    const value02 = parseInt(document.getElementById("textbox02-2").value) || 0;

    const temp = value01 + value02;
    while(true) {
        temp = temp % 12;
        if(temp > 12) {
            break;
        }
    }
    let ans = temp;

    document.getElementById("result02").value = ans;
}

// Function to check Quiz 03 answer
function check03() {
    const finalAns = 277;
    const element03 = document.getElementById("ansBox03");
    const tempAns = element03 ? element03.value : 0;

    if (parseInt(tempAns) === finalAns) {
        // Block the input and provide feedback
        element03.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 03 (17 ? 10 = 277) 
function hintCheck03() {
    const value01 = parseInt(document.getElementById("textbox01-3").value) || 0;
    const value02 = parseInt(document.getElementById("textbox02-3").value) || 0;

    const result01 = value01 + value02;
    const result02 = Math.abs(value01 - value02);
    const ans = result01.toString() + result02.toString();

    document.getElementById("result03").value = ans;
}

// Function to check Quiz 04 answer
function check04() {
    const finalAns = 37;
    const element04 = document.getElementById("ansBox04");
    const tempAns = element04 ? element04.value : 0;

    if (parseInt(tempAns) === finalAns) {
        element04.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 04
function hintCheck04() {
    const value01 = parseInt(document.getElementById("textbox01-4").value) || 0;
    const value02 = parseInt(document.getElementById("textbox02-4").value) || 0;
    const ans = 0;

    if(value01 > value02) {
        ans = value01 * 2 - value02;
    } else {
        ans = value02 * 2 - value01;
    }

    document.getElementById("result04").value = ans;
}