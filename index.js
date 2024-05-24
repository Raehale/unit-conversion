/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function() {
    const convertInput = document.getElementById("convert-input").value;
    lengthConversion(convertInput);
    volumeConversion(convertInput);
    massConversion(convertInput);
});

/***CONVERT LENGTH */
function lengthConversion(number) {
    const lengthConvertedText = document.getElementById("length-conversion");
    const feet = (number * 3.28084).toFixed(3);
    const meters = (number / 3.28084).toFixed(3);
    lengthConvertedText.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`;
}

/***CONVERT VOLUME */
function volumeConversion(number) {
    const volumeConvertedText = document.getElementById("volume-conversion");
    const gallons = (number * 0.264).toFixed(3);
    const liters = (number / 0.264).toFixed(3);
    volumeConvertedText.textContent = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`;
}

/***CONVERT MASS */
function massConversion(number) {
    const massConvertedText = document.getElementById("mass-conversion");
    const pounds = (number * 2.204).toFixed(3);
    const kilos = (number / 2.204).toFixed(3);
    massConvertedText.textContent = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos`;
}
