// let english = Number(prompt("Your English Marks"));
// let science = Number(prompt("Your Science Marks"));
// let computer = Number(prompt("Your Computer Marks"));
// let biology = Number(prompt("Your Biology Marks"));
// let physics = Number(prompt("Your Physics Marks"));


document.querySelector(".eng-marks").innerHTML = english;
document.querySelector(".sci-marks").innerHTML = science;
document.querySelector(".com-marks").innerHTML = computer;
document.querySelector(".bio-marks").innerHTML = biology;
document.querySelector(".phy-marks").innerHTML = physics;

let total_marks = (english + science + computer + biology + physics);

document.querySelector(".total-marks").innerHTML = total_marks;

let percentage = ((total_marks / 500) * 100);

document.querySelector(".percentage").innerHTML = Math.round(percentage) + "%";


if(percentage >= 25){

   document.querySelector(".pass-fail-text").innerHTML = "CONGRATULATIONS YOU'RE PASS";
   document.querySelector(".pass-fail-text").style.color = "green";
   
   
}else{
    
    document.querySelector(".pass-fail-text").innerHTML = "YOU'RE FAIL";
    document.querySelector(".pass-fail-text").style.color = "red";
}

function add (a,b) {
    
    return a + b;
}

console.log(add(5,5));