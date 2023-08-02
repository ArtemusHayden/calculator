const displayCont = document.querySelector('.display-cont')



const numberZero = document.querySelector('#zero')
let zero = document.createTextNode("0")


numberZero.addEventListener('click', ()=>{
    displayCont.appendChild(zero)
})

const numberOne = document.querySelector('#one')
let one = document.createTextNode("1")


numberOne.addEventListener('click', ()=>{
    displayCont.appendChild(one)
})


// html, .body {
//     width: 100%;
//     height: 100%;
//     margin: 0;
//     padding: 0;
// }

// .display-cont {
//     height: 100px;
//     width: 600px;
//     background-color: aqua;
//     margin: 16px;
//     box-sizing: border-box;
// }

// .calc-body, .display-cont, .button-cont, .body {
//     display: flex;
// }

// .calc-body {
//     margin: auto;
//     flex-direction: column;
//     border: 4px green;
//     border-style: solid;
//     box-sizing: border-box;
//     width: 650px;
// }

// .button-cont {
//     max-width: 600px;
//     gap: 16px;
//     flex-wrap: wrap;
//     justify-content: space-around;
// }
// button {
//     width: 280px;
//     height: 50px;
// }

// /* .body{
//     align-items: center;
//     justify-content: center
// } */