

// let array1 = [1,2,3,4,5,6,7,8,9,10];
// let reversedList = [];
// let arraylength = array1.length
// for( let i = 0; i < arraylength; i++) {
//     let tempVariable = array1.pop();
//     reversedList.push(tempVariable)
// }

// console.log('array1', array1)
// console.log('reversd array', reversedList)

// function reversal (paramiter1) {
//     let arraylength = paramiter1.length
//     let reversedList = [];
// for( let i = 0; i < arraylength; i++) {
//     let tempVariable = paramiter1.pop();
//     reversedList.push(tempVariable)
// }
// return reversedList
// }
// console.log('result', reversal(array1))

function reversal (string1) {
    let array1 = string1.split('');
    array1.reverse();
    return array1.join(',')
}
console.log(reversal('Hello World'))
