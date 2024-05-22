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
    },
    {
        rollNo: 103,
        name: "Purshottam",
        class: 5,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 104,
        name: "Mamata",
        class: 5,
        gender: "Female",
        testScore: []
    },
    {
        rollNo: 105,
        name: "Sneha",
        class: 5,
        gender: "Female",
        testScore: []
    },
    {
        rollNo: 201,
        name: "Rahul",
        class: 6,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 202,
        name: "Kiran",
        class: 6,
        gender: "Female",
        testScore: []
    },
    {
        rollNo: 203,
        name: "Bharti",
        class: 6,
        gender: "Female",
        testScore: []
    },
    {
        rollNo: 204,
        name: "Darshan",
        class: 6,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 205,
        name: "Mohit",
        class: 6,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 303,
        name: "Santosh",
        class: 7,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 304,
        name: "Bighnesh",
        class: 7,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 305,
        name: "Chiku",
        class: 7,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 401,
        name: "Soumyakant",
        class: 7,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 402,
        name: "Suryakant",
        class: 7,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 501,
        name: "Vinod",
        class: 8,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 502,
        name: "Subham",
        class: 8,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 503,
        name: "Spandan",
        class: 8,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 504,
        name: "Rocky",
        class: 8,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 505,
        name: "Satish",
        class: 8,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 601,
        name: "Raj",
        class: 9,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 602,
        name: "Sahil",
        class: 9,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 603,
        name: "Pooja",
        class: 9,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 604,
        name: "Chandan",
        class: 9,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 605,
        name: "Kishore",
        class: 9,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 701,
        name: "Bhabani",
        class: 10,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 702,
        name: "Salman",
        class: 10,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 703,
        name: "Ranvir",
        class: 10,
        gender: "Male",
        testScore: []
    },
    {
        rollNo: 704,
        name: "Kareena",
        class: 10,
        gender: "Female",
        testScore: []
    },
    {
        rollNo: 705,
        name: "Arjun",
        class: 10,
        gender: "Male",
        testScore: []
    },
]

let option;

let createRandomNumber = () => {
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
    console.log("1. Take Test\n2. Generate Result\n3. View Students Result\n 4. View Class wise Result");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function displayClasses() {
    console.log("1. Class 5\n2. Class 6\n3.  Class 7\n4.  Class 8\n5.  Class 9\n6.  Class 10");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function displayClassWiseOutput(arrOfClasses, classOption) {
    console.log(`Here are your class${classOption} results`);
    arrOfClasses.map((eachClass) => {
        eachClass.map((objsInClass) => {
            if (objsInClass.class === classOption) {
                console.log(objsInClass);
            }
        })
    })
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

function GenerateResult() {
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
                percentage = Math.floor((total / 300) * 100);
                student.total = total;
                student.percentage = percentage;
            })
            total = 0;
        })
        console.log("All the results are generated successfully");
    }
}


function storeClassWiseInArray() {
    let class5Arr = []
    let class6Arr = []
    let class7Arr = []
    let class8Arr = []
    let class9Arr = []
    let class10Arr = []
    let wholeClassArr = [class5Arr, class6Arr, class7Arr, class8Arr, class9Arr, class10Arr]


    studentList.map((student) => {

        switch (student.class) {
            case 5:
                class5Arr[class5Arr.length] = student;
                break;
            case 6:
                class6Arr[class6Arr.length] = student;
                break;
            case 7:
                class7Arr[class7Arr.length] = student;
                break;
            case 8:
                class8Arr[class8Arr.length] = student;
                break;
            case 9:
                class9Arr[class9Arr.length] = student;
                break;
            case 10:
                class10Arr[class10Arr.length] = student;
                break;
        }
    })
    return wholeClassArr;
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
    GenerateResult();
    option = displayMenu()
}

if (option === 3) {

    if (studentList[0].total) {
        console.log(`
+------+--------------------+-------+----------+------------+
| Roll No   |        Name       | Total Marks | Percentage |
+------+--------------------+-------+----------+------------+`);

        studentList.map(({ rollNo, name, total, percentage }) => {
            console.log(`
+------+--------------------+-------+----------+------------+
| ${rollNo}   |        ${name}       | ${total} | ${percentage} |
+------+--------------------+-------+----------+------------+`);
        })
        console.log("We have successfuly displayed your reults");
        option = displayMenu();
    }

    if (studentList[0].testScore.length == 0) {
        console.log("You have to take test");
        option = displayMenu()
    }

    if (option === 1) {
        TakeTest();
        console.log("Test has taken successfully");
        option = displayMenu()
        if (option == 3) {
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
                total = 0;
            })

        }
    }
}

if (option == 4) {  //! UC2

    console.log("Select which class result you want");
    let classOption = displayClasses();
    let arrOfClasses = storeClassWiseInArray();

    switch (classOption) {
        case 5:
            displayClassWiseOutput(arrOfClasses, classOption);
            break;
        case 6:
            displayClassWiseOutput(arrOfClasses, classOption);
            break;
        case 7:
            displayClassWiseOutput(arrOfClasses, classOption);
            break;
        case 8:
            displayClassWiseOutput(arrOfClasses, classOption);
            break;
        case 9:
            displayClassWiseOutput(arrOfClasses, classOption);
            break;
        case 10:
            displayClassWiseOutput(arrOfClasses, classOption);
            break;
        default:
            console.log("Enter valid Option Please");
    }

}