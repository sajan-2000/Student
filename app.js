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
        rollNo: 301,
        name: "Ritu",
        class: 7,
        gender: "Female",
        testScore: []
    },
    {
        rollNo: 302,
        name: "Rajat",
        class: 7,
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
            percentage = Math.floor((total / 300) * 100);
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

function displayMenu() {
    console.log("1. Take Test\n2. Generate Result\n3. View Students Result\n4. View Class wise Result\n5. Detail Anlysis of result");
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

function checKingIfNotPresentThenCreate() {

    if (!studentList[0].total) {

        displayingTotalAndPercentageForOption3()
        console.log("We have successfuly displayed your reults");

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
    // option = displayMenu()
    // return //? How to exit?
}

let classOption;
let arrOfClasses;

if (option == 4) {

    // console.log("Select which class result you want");
    // classOption = displayClasses();
    arrOfClasses = storeClassWiseInArray();
    console.log(arrOfClasses);
    option = displayMenu();

}

if (option === 5) { //! UC4

    let averageTotalMarks = [];
    let percentageArr = [];
    let avgPercentage = 0;
    let totalPercentageOfEachClass = 0;
    let allMarks = 0;
    let average = 0;
    let count = 0;
    let classDemo;
    let grade;
    let fail = 0;
    let pass = 0;
    let failedPercentage = 0;
    let passsedPercentage = 0;

    console.log(`
+---------+-----------------+-----------------+----------------+-------------+--------------------+---------------------+--------------------
| Class   |  Total Students | Avg Total Marks | Avg Percentage | Class Grade | Failed Students No | Passed Students No. | Failed Students Percentage | Passed Students Percentage |
+---------+-----------------+-----------------+----------------+-------------+--------------------+---------------------+------------------`);

    arrOfClasses.map((eachClass) => {
        eachClass.map((classObj) => {
            classObj.percentage < 35 ? fail++ : pass++;
            count++;
            allMarks += classObj.total;
            totalPercentageOfEachClass += classObj.percentage;
            classDemo = classObj.class;

        })

        average = Math.floor(allMarks / count);
        averageTotalMarks[averageTotalMarks.length] = average;
        avgPercentage = Math.floor(totalPercentageOfEachClass / count);
        percentageArr[percentageArr.length] = avgPercentage

        failedPercentage = Math.floor((fail / count) * 100) + "%";
        passsedPercentage = Math.floor((pass / count) * 100) + "%";
        if (avgPercentage >= 60) {
            grade = "A"
        } else if (avgPercentage < 60 && avgPercentage >= 50) {
            grade = "B"
        } else if (avgPercentage < 50 && avgPercentage >= 40) {
            grade = "C"
        } else {
            grade = "F"
        }
        // console.log(`${classDemo}  ${average} ${avgPercentage} ${grade} ${pass} ${fail} ${failedPercentage} ${passsedPercentage}`);

        console.log(`
+--------------------------------------------+-------------------------------+-----------------+------ ----------------+---------------+--------------------+
| ${classDemo}  |  ${count}  |        ${average}        |           ${avgPercentage}             |            ${grade}          |          ${fail}         |         ${pass}     |             ${failedPercentage}          |    ${passsedPercentage}    |
+------------------+--------------------------+------------------------------+----------------+-------------+--------------------+---------------------+-`);

        count = 0; 6
        fail = 0;
        pass = 0;
        failedPercentage = 0;
        passsedPercentage = 0;
        allMarks = 0;
        totalPercentageOfEachClass = 0;
    })

    option = displayMenu();
}


