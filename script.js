const displayCont = document.querySelector('.display-cont')

let numbers = []
const NUMBER_OF_TERMS_EVALUATED = 2;
let termNumber=""
let add, subtract, divison, multiply, operator = false;



function addFun(total, number) {
    total += number
    return total
}

function subtractFun(){return "sub"}

function divisonFun(){return "div"}

function multiplyFun(total, number){
    total = 1;
    total * number
    return total;
}




function equalClicked() {
    numbers.push(Number(termNumber));
    if (add === true){
        console.log(numbers.reduce(addFun)); 
    } else if (subtract === true){
        console.log(numbers.reduce(subtractFun))
    } else if (divison === true){
        console.log(numbers.reduce(divisonFun))
    } else {
        console.log(numbers.reduce(multiplyFun))
    }
}

function operatorClicked(value) {
    operator = true;
    numbers.push(Number(termNumber));
    termNumber=""
    console.log(numbers)

    if (value === "+"){
        add = true;
    } else if (value === "-"){
        subtract = true;
    } else if (value === "/") {
        divison = true;
    } else {
        multiply = true;
    }
}

function getNumber(value) {
    termNumber += value
    console.log(termNumber)

}












// function getNumber(value) {
//     if (operator === true)
//         if (numbers.length < NUMBER_OF_TERMS_EVALUATED) {
//             numbers.push(Number(termNumber));
//             console.log(numbers)

//             termNumber += value
//             console.log(termNumber)


//         } else {
//             console.log(numbers.reduce(add));
//             numbers.push(numbers.reduce(add));
//             numbers = []
//             console.log(numbers)
//     } else {
//         termNumber += value
//         console.log(termNumber)
//     }
// }

// function operatorClicked() {
//     operator = true;
// }

// function add(total, number) {
//     total += number
//     return total
// }


// let numbers = []
// const NUMBER_OF_TERMS_EVALUATED = 2;
// let total = 0

// function getNumbers(value) {
//     numbers.push(value);
//     console.log(numbers)
// }
// function add(total, number) {
//     total += number
//     return total
// }


// function getNumbers(value) {
    // if (numbers.length < NUMBER_OF_TERMS_EVALUATED) {
    //     numbers.push(Number(value));
    //     console.log(numbers)
    // } else {
    //     console.log(numbers.reduce(add));
    //     numbers.push(numbers.reduce(add));
    //     numbers = []
    //     console.log(numbers)
    // }
// }