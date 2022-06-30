// Create a function that accepts 2 arrays of words and returns the common words from each.
// Գրել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում է նրանց ընդհանուր տարրերը։
// Օրինակ։ 
// arr1 ["dog", "cat", "parrot"] 
// arr2 ["lizard", "rat", "cat"] 
// // Պատասխան։ ["cat"]

function RepeatedWords(arr1, arr2) {
    let commonWord = "";
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                commonWord += arr1[i] + " "
            }
        }
    }
    return commonWord;
};

const firstArray = ["dog", "cat", "parrot", "duck"];
const secondArray = ["duck", "rat", "cat", "lizard"];
console.log(RepeatedWords(firstArray, secondArray));