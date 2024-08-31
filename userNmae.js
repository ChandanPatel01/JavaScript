// let username1=prompt("Enter full name");
//   let add="@";
// let username= add.concat(username1);
// console.log(username);


//--------------------------------------------------------------------------------------------------------------------------------------------------

// var number = prompt("Enter a number:");

// // String ko number mein convert karte hain
// number = parseInt(number);

// // Check karte hain agar number 5 ka multiple hai
// if (number % 5 === 0) {
//     alert(number + " is a multiple of 5.");
// } else {
//     alert(number + " is not a multiple of 5.");
// }
//-----------------------------------------------------------------------------------------------------------------------------------------

// User se student ka score input lete hain
var score = prompt("Enter the student's score:");

// String ko number mein convert karte hain
score = parseInt(score);

// Score ke hisaab se grade assign karte hain
var grade;

if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 79) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
} else {
    grade = "Invalid score"; // Agar score 0-100 ke beech nahi hai
}

// Final grade ko display karte hain
alert("The student's grade is: " + grade);
