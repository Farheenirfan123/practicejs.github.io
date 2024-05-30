//QUESTION NO 1

// for(let i=0; i<=100; i++){
//     if(i % 2 !== 0){
//         console.log('i=', i)
//     }
// }

//QUESTION 2
 
// let gameNum = 25
// let userNum = prompt('Enter number')

// while(userNum != gameNum){
//     userNum = prompt('You Enter wrong number, guess again')
// }
// console.log('Congratulations you enter the right number')

// let fullName = prompt('Enter you fullName')
// let str = '@';
// let result = str.concat(fullName + fullName.length)
// console.log(result)

let strn = 'farheenirfan'
let res = strn.toUpperCase()
console.log(res)

let marks = [85, 97, 44, 37, 76, 60]
let sum = 0

for(let val of marks){
    sum += val
}
let avr = sum / marks.length
console.log(avr)

let price = [250, 645, 300, 900, 50]

for (let i = 0; i < price.length; i++) {
   let offer = price[i] / 10
   price[i] -= offer
}
console.log(price)


let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

companies.splice(2 , 1, 'Ola')

// function

const mult = (a, b)=>{
return a * b
}

// function countVowel(str) {
//     let count = 0
//     for(let char of str) {
//         if(char === 'a' || char === 'e' || char === "i" || char === 'o' || char === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

const arrowCont = (str) => {
    let count = 0
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === "i" || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

let num = [1, 2, 3, 4, 5]

 num.forEach((val)=>{
    console.log(val**2)
})

let arr = [93, 78 , 98, 99, 45, 90]
let arr1 = arr.filter((val)=>{
return val > 90
})
console.log(arr1)

let n = prompt('Enter a number')

let array = []

for (let i=1; i<=n; i++) {
    array[i - 1] = i;
}
console.log(array)

const newval = array.reduce((prev, curr) =>{
    return prev + curr
})
console.log('sum =', newval)

const newval2 = array.reduce((prev, curr) =>{
    return prev * curr
})
console.log('multiply =', newval2)