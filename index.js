const convertBtn = document.querySelector('#convert-btn')
const conversions = document.querySelectorAll('.conversion-p')
const length = document.getElementById('length-text')
const volume = document.getElementById('volume-text')
const mass = document.getElementById('mass-text')
const mToFt = 3.281
const lToG =  3.785
const kgToLb = 2.205
let leftConvert
let rightConvert
let userInput = document.querySelector('#user-input')
let conversion 

function getLength() {
    leftConvert = (userInput.value * mToFt).toFixed(3)
    rightConvert = (userInput.value / mToFt).toFixed(3)
    conversion = `${userInput.value} meters = ${leftConvert} feet | ${userInput.value} feet = ${rightConvert} meters`
    length.textContent = conversion
}

function getVolume() {
    leftConvert = (userInput.value * lToG).toFixed(3)
    rightConvert = (userInput.value / lToG).toFixed(3)
    conversion = `${userInput.value} liters = ${leftConvert} gallons | ${userInput.value} gallons = ${rightConvert} liters`
    volume.textContent = conversion
}

function getMass() {
    leftConvert = (userInput.value * kgToLb).toFixed(3)
    rightConvert = (userInput.value / kgToLb).toFixed(3)
    conversion = `${userInput.value} kilograms = ${leftConvert} pounds | ${userInput.value} pounds = ${rightConvert} kilograms`
    mass.textContent = conversion
}

function renderConversion() {
    getLength()
    getVolume()
    getMass()
}

convertBtn.addEventListener('click', renderConversion)