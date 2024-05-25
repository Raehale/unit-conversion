/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function() {
    const convertInput = document.getElementById("convert-input").value;
    convert(convertInput);
});

/***CONVERT ***/
function convert(number) {
    const lengthConvertedText = document.getElementById("length-conversion");
    const volumeConvertedText = document.getElementById("volume-conversion");
    const massConvertedText = document.getElementById("mass-conversion");

    const feet = (number * 3.28084).toFixed(3);
    const meters = (number / 3.28084).toFixed(3);
    const gallons = (number * 0.264).toFixed(3);
    const liters = (number / 0.264).toFixed(3);
    const pounds = (number * 2.204).toFixed(3);
    const kilos = (number / 2.204).toFixed(3);
    
    lengthConvertedText.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`;
    volumeConvertedText.textContent = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`;
    massConvertedText.textContent = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos`;
}
