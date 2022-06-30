// 17. * Return array of courses including average evaluation for each course,
// Վերադարձնել բոլոր առարկաների ցուցակը և նրանց միջին քննական արդյունքը։
const evaluations = [
    {
        studentId: 1,
        studentName: "John Doe",
        courseId: 1,
        courseName: "JS Bootcamp",
        score: 70
    },
    {
        studentId: 1,
        studentName: "John Doe",
        courseId: 2,
        courseName: "JS Level 0",
        score: 60
    },
    {
        studentId: 1,
        studentName: "John Doe",
        courseId: 3,
        courseName: "JS Level 1",
        score: 50
    },
    {
        studentId: 2,
        studentName: "Tom Colins",
        courseId: 1,
        courseName: "JS Bootcamp",
        score: 60
    },
    {
        studentId: 2,
        studentName: "Tom Colins",
        courseId: 2,
        courseName: "JS Level 0",
        score: 50
    },
    {
        studentId: 2,
        studentName: "Tom Colins",
        courseId: 3,
        courseName: "JS Level 1",
        score: 40
    },
    {
        studentId: 3,
        studentName: "Sarah Conor",
        courseId: 1,
        courseName: "JS Bootcamp",
        score: 45
    },
    {
        studentId: 3,
        studentName: "Sarah Conor",
        courseId: 2,
        courseName: "JS Level 0",
        score: 35
    },
    {
        studentId: 3,
        studentName: "Sarah Conor",
        courseId: 3,
        courseName: "JS Level 1",
        score: 25
    }
];

function coursesScoreAverage(arr) {
    let result = {};
    let coursesCount = 0;
    let keyCount = 0
    for (let courses of arr) {
        if (result[courses.courseName]) {
            result[courses.courseName] = result[courses.courseName] + courses.score;
            coursesCount++;
        }
        else result[courses.courseName] = courses.score;
    }
    for (let keyWordsCount in result) {
        keyCount++;
    }
    for (let results in result) {
        result[results] = result[results] / ((coursesCount + keyCount) / (keyCount));
    }
    return result;
};
console.log(coursesScoreAverage(evaluations));