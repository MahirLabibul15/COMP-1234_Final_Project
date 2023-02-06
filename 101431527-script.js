alert("Welcome to my first Javascript program in COMP1234")


// GETTING FIRST NAME AND LAST NAME
let firstName = prompt("Please enter your first name", "Mahir Labibul");

while (isNaN(firstName) === false || firstName === ""){
    if (isNaN(firstName) === false){
        firstName = prompt("You have entered a number. Please enter your first name","Mahir Labibul");
    }

    if (firstName === ""){
        firstName = prompt("The first name is a required field. Please enter your first name","Mahir Labibul")
    }
}

let lastName = prompt("Please enter your last name","Haque");

while (isNaN(lastName) === false || lastName === ""){
    if (isNaN(lastName) === false){
        lastName = prompt("You have entered a number. Please enter your last name","Haque");
    }

    if (lastName === ""){
        lastName = prompt("The last name is a required field. Please enter your last name","Haque");
    }
}

if (isNaN(firstName) === true && isNaN(lastName) === true){
    console.log("Full Name:", firstName, lastName);
}

// GETTING PROGRAM OF STUDY
let programName = prompt("Please enter your program name", "Computer Systems Analyst");
console.log("Program name:", programName);



// GETTING YEAR OF STUDY
let studyYear = parseInt(prompt("Please enter your year of study", "1"))

while (isNaN(studyYear) === true || studyYear === null || studyYear < 1 || studyYear > 3){
    studyYear = parseInt(prompt("Please enter your year of study"))
}

if (isNaN(studyYear) === false && studyYear >= 1 && studyYear <= 3){
    console.log("Year of study:", studyYear);
}


// PUSHING ALL THE VALUES TO THE HTML FILE
let full_name = document.getElementById("full_name");
full_name.innerHTML = "Full Name: " + firstName + " " + lastName;

let program_of_study = document.getElementById("program_of_study");
program_of_study.innerHTML = "Program name: " + programName;

let year_of_study = document.getElementById("year_of_study");
year_of_study.innerHTML = "Year of study: " + studyYear;

console.log(isNaN(12.345));