const displayCont = document.querySelector('.display-cont')

let numbers = []
const NUMBER_OF_TERMS_EVALUATED = 2;
let termNumber=""
let add, subtract, divison, multiply, operator = false;

function addFun(total, number) {
    total += number
    return total
}

function subtractFun(array){
    return (array[NUMBER_OF_TERMS_EVALUATED -2] - array[NUMBER_OF_TERMS_EVALUATED - 1])
}

function divisonFun(array){
    return (array[NUMBER_OF_TERMS_EVALUATED -2] / array[NUMBER_OF_TERMS_EVALUATED - 1])
}

function multiplyFun(array){
    const intial = 1;
    const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, intial)
  return sumWithInitial
}

function equalClicked() {
    numbers.push(Number(termNumber));
    if (add === true){
        console.log(numbers.reduce(addFun)); 
    } else if (subtract === true){
        console.log(subtractFun(numbers))
    } else if (divison === true){
        console.log(divisonFun(numbers))
    } else {
        console.log(multiplyFun(numbers))
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
