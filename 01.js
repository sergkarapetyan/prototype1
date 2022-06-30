// 1. Find the value that is not being repeated inside the given array.
// Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
// Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b'
function notRepeatedValue(arr) {
   root: for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if ((arr[i] === arr[j]) && (i !== j)){ 
                continue root;
            }
        }
        return arr[i];
    }
};
const array = ["b", "c", "k", "a", "b", "c", "a"];
console.log(notRepeatedValue(array));