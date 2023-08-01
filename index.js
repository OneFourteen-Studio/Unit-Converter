const convertBtn = document.querySelector('#convert-btn')
let userInput = document.querySelector('#user-input')
const length = document.querySelector('#length')
const volume = document.querySelector('#volume')
const mass = document.querySelector('#mass')
let leftConvert
let rightConvert
let measurement1
let measurement2
let conversion = `${userInput} ${measurement1} = ${leftConvert} ${measurement2} | ${userInput} ${measurement2} = ${rightConvert} ${measurement1} `

// reusable variables for conversion measurements
function measurement(section) {
    if(section === 'length') {
        measurement1 = "meters"
        measurement2 = "feet"
    } else if(section === 'volume') {
        measurement1 = "liters"
        measurement2 = "gallons"
    }else if(section === 'mass') {
        measurement1 = "kilograms"
        measurement2 = "pounds"
    }
    
    return measurement1, measurement2
}

// create p tag and add class under length, volume, mass divs
function createP () {
    let convertP = document.createElement("p")
    convertP.classList.add('conversion-p')
    return convertP
}


function lengthConvert() {
    pTag = createP()
    leftConvert = userInput * 3.281
    rightConvert = userInput / 3.281
    measurement("length")
    length.appendChild(pTag)
    pTag.textContent = conversion

}

convertBtn.addEventListener('click', lengthConvert())