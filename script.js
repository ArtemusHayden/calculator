let numbers = []
const NUMBER_OF_TERMS_EVALUATED = 2;
let termNumber=""
let add = subtract = divison = multiply = decimal = operator = false;
var term=""
const displayCont = document.querySelector('.display-cont')
let equalCounter = 0;

equalJustClicked = false;

function addFun(array) {
    return Number((array[NUMBER_OF_TERMS_EVALUATED -2] + array[NUMBER_OF_TERMS_EVALUATED - 1]))
}

function subtractFun(array){
    return Number((array[NUMBER_OF_TERMS_EVALUATED -2] - array[NUMBER_OF_TERMS_EVALUATED - 1]))
}

function divisonFun(array){
    if (array[NUMBER_OF_TERMS_EVALUATED - 1] === 0){
        return "*explosion noises*"
    } else {
    return Number((array[NUMBER_OF_TERMS_EVALUATED -2] / array[NUMBER_OF_TERMS_EVALUATED - 1]))
    }
}

function multiplyFun(array){
    return Number((array[NUMBER_OF_TERMS_EVALUATED -2] * array[NUMBER_OF_TERMS_EVALUATED - 1]))
}

function equalClicked(value) {
    if (equalJustClicked === false) {
        if (equalCounter > 0){
            numbers.pop();
        }

        createTerm(value);
        create(value)

        displayCont.innerHTML="";
        
        if (add === true){
            let returnValue = addFun(numbers)
            create(returnValue);
            numbers = [returnValue]
            add = false;

        } else if (subtract === true){
            let returnValue = subtractFun(numbers)
            create(returnValue);
            numbers = [returnValue]
            subtract = false;

        } else if (divison === true){
            let returnValue = divisonFun(numbers)
            create(returnValue);
            numbers = [returnValue]
            divison = false;

        } else {
            let returnValue = multiplyFun(numbers)
            create(returnValue);
            numbers = [returnValue]
            multiply = false;
        }
        equalCounter += 1
        operator = decimal = false
    }
    equalJustClicked = true
    decimal = true;
}

function operatorClicked(value) {
    if (operator === false){
        createTerm(value);
    termNumber="";

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

    operator = true;
    decimal = false;
    equalJustClicked = false;
}

function createTerm(){
    numbers.push(Number(termNumber));
}

function getNumber(value) {
    if (equalJustClicked === false){
        termNumber += value
        create(value); 
    }
}

function getDecimal(value){
    if (decimal === false){
        termNumber += value
        create(value)
    }
    decimal = true; 

}

function create(value){
    var term = document.createElement('div');
    term.textContent = value;
    term.classList.add('term')
    displayCont.appendChild(term);
}

function allClear(){
    operator = false
    numbers.length = 0
    termNumber=""
    displayCont.innerHTML=""
    equalJustClicked = false
    equalCounter = 0;
}

function clearTerm(){
    if (equalJustClicked === false){
        equalCounter = 0;
        termNumber = termNumber.slice(0,-1);

        let numOfElements = document.getElementsByClassName('term').length;
        displayCont.removeChild(displayCont.children[numOfElements-1])
    } 
    
}




// clear term on operator does not work