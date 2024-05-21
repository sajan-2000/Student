let studentList = [{
    rollNo: 101,
    name: "Sajan",
    class: 5,
    gender: "Male",
    testScore: []
},
{
    rollNo: 102,
    name: "Durga",
    class: 5,
    gender: "Male",
    testScore: []
}
// {
//     rollNo: 103,
//     name: "Purshottam",
//     class: 5,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 104,
//     name: "Mamata",
//     class: 5,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 105,
//     name: "Sneha",
//     class: 5,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 201,
//     name: "Rahul",
//     class: 6,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 202,
//     name: "Kiran",
//     class: 6,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 203,
//     name: "Bharti",
//     class: 6,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 204,
//     name: "Darshan",
//     class: 6,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 205,
//     name: "Mohit",
//     class: 6,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 301,
//     name: "Ritu",
//     class: 7,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 302,
//     name: "Rajat",
//     class: 7,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 303,
//     name: "Santosh",
//     class: 7,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 304,
//     name: "Bighnesh",
//     class: 7,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 305,
//     name: "Chiku",
//     class: 7,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 401,
//     name: "Soumyakant",
//     class: 7,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 402,
//     name: "Suryakant",
//     class: 7,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 403,
//     name: "Priti",
//     class: 7,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 404,
//     name: "Bhavna",
//     class: 7,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 405,
//     name: "Anajna",
//     class: 7,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 501,
//     name: "Vinod",
//     class: 8,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 502,
//     name: "Subham",
//     class: 8,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 503,
//     name: "Spandan",
//     class: 8,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 504,
//     name: "Rocky",
//     class: 8,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 505,
//     name: "Satish",
//     class: 8,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 601,
//     name: "Raj",
//     class: 9,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 602,
//     name: "Sahil",
//     class: 9,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 603,
//     name: "Pooja",
//     class: 9,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 604,
//     name: "Chandan",
//     class: 9,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 605,
//     name: "Kishore",
//     class: 9,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 701,
//     name: "Bhabani",
//     class: 10,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 702,
//     name: "Salman",
//     class: 10,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 703,
//     name: "Ranvir",
//     class: 10,
//     gender: "Male",
//     testScore: []
// },
// {
//     rollNo: 704,
//     name: "Kareena",
//     class: 10,
//     gender: "Female",
//     testScore: []
// },
// {
//     rollNo: 705,
//     name: "Arjun",
//     class: 10,
//     gender: "Male",
//     testScore: []
// },
]

let option;

let createRandomNumber=()=> {
    return Math.floor(Math.random() * 100);
}
function displayingTotalAndPercentageForOption3() {

    console.log(`
+------+--------------------+-------+----------+------------+
| Roll No   |        Name       | Total Marks | Percentage |
+------+--------------------+-------+----------+------------+`);
    studentList.map((students) => {
        let name = students.name;
        let rollNo = students.rollNo;
        students.testScore.map((student) => {
            for (const key in student) {
                total += student[key]
            }
            percentage = Math.floor((total / 300) * 100) + "%";
            student.total = total;
            student.percentage = percentage;
            console.log(`
+------+--------------------+-------+----------+------------+
| ${rollNo}   |        ${name}        | ${student.total} | ${student.percentage} |
+------+--------------------+-------+----------+------------+`);
        })
    })

}

function displayMenu() {
    console.log("1. Take Test\n2. Generate Result\n3. View Students Result");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}
   


function TakeTest() {
    for (let item of studentList) {
        item.testScore = [{
            "Geography": createRandomNumber(),
            "English": createRandomNumber(),
            "Biology": createRandomNumber()
        }]
    }
}

function viewResult() {
    if (studentList[0].testScore.length == 0) {
        console.log("You have to take test");
        option = displayMenu()
    }
    if (option === 1) {
        TakeTest();
        option = displayMenu()
    }

    if (studentList[0].testScore.length > 0) {

        studentList.map((student) => {     //! mapping on every object and adding testscores to the total variable
            student.testScore.map((ele) => {
                for (const key in ele) {
                    total += ele[key];
                }
                percentage = Math.floor((total / 300) * 100)+"%";
                student.total = total;
                student.percentage = percentage;
            })
            total = 0;
        })
        console.log("All the results are generated successfully");
    }
}

function checKingIfNotPresentThenCreate() {

    if (!studentList[0].total) {

        displayingTotalAndPercentageForOption3()
        console.log("We have successfuly displayed your reults");

    } else if (studentList[0].total) {

       displayingTotalAndPercentageForOption3()
        console.log("We have successfuly displayed your reults");

    }

}

option = displayMenu(); //! To get the user input value

let total = 0;
let percentage = 0;

    if (option === 1) {
        TakeTest();
        console.log("Test has taken successfully");
        option = displayMenu()
    }

if (option === 2) {
    viewResult();
        option = displayMenu()
    }

if (option === 3) {
    if (studentList[0].testScore.length == 0) {
        console.log("You have to take test");
        option = displayMenu()
    } else {
        checKingIfNotPresentThenCreate()
    }

    if (option === 1) {
        TakeTest();
        console.log("Test has taken successfully");
        option = displayMenu()
        if (option == 3) {
            checKingIfNotPresentThenCreate()
        }
    }
    option = displayMenu()
    }
    
