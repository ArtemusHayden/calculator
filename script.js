let numbers = []
const NUMBER_OF_TERMS_EVALUATED = 2;
let termNumber=""
let add, subtract, divison, multiply, operator = false;
var term=""
const displayCont = document.querySelector('.display-cont')

function addFun(total, number) {
    console.log(total, number)
    total += number
    return Number(total)
}

function subtractFun(array){
    return Number((array[NUMBER_OF_TERMS_EVALUATED -2] - array[NUMBER_OF_TERMS_EVALUATED - 1]))
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

function equalClicked(value) {
    createTerm();
    create(value)
    if (add === true){
        create(numbers.reduce(addFun)); 
        add = false;
    } else if (subtract === true){
        create(subtractFun(numbers))
        subtract = false;
    } else if (divison === true){
        create(divisonFun(numbers))
        divison = false;
    } else {
        create(multiplyFun(numbers))
        multiply = false;
    }
}

function operatorClicked(value) {
    operator = true;
    createTerm();
    termNumber="";
    console.log(numbers);

    if (value === "+"){
        add = true;
    } else if (value === "-"){
        subtract = true;
    } else if (value === "/") {
        divison = true;
    } else {
        multiply = true;
    }

    create(value);
}

function createTerm(){
    numbers.push(Number(termNumber));
}

function getNumber(value) {
    termNumber += value
    create(value); 
}

function create(value){
    var term = document.createElement('div');
    term.textContent = value;
    term.classList.add('term')
    displayCont.appendChild(term);
}

function allClear(){
    numbers = []
    termNumber=""
    displayCont.innerHTML="";
}

function clearTerm(){
    createTerm();
    numbers.pop()
    termNumber=""
    
    let numOfElements = document.getElementsByClassName('term').length;
    displayCont.removeChild(displayCont.children[numOfElements-1])
}

