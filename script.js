const celciusInput = document.getElementById('celciusInput');
const kelvinInput = document.getElementById('kelvinInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const resetButton = document.getElementById('resetButton');
const rankineInput = document.getElementById('rankineInput');


// Function to convert Celcius to Kelvin  Fahrenheit and Rankine
function convertCelcius() {
    const celcius = parseFloat(celciusInput.value);
    kelvinInput.value = celcius + 273.15;
    fahrenheitInput.value = (celcius * 9/5) + 32;
    rankineInput.value = (celcius + 273.15) * 9/5;
}

// Function to convert Kelvin to Celcius  Fahrenheit and Rankine
function convertKelvin() {
    const kelvin = parseFloat(kelvinInput.value);
    celciusInput.value = kelvin - 273.15;
    fahrenheitInput.value = (kelvin - 273.15) * 9/5 + 32;
    rankineInput.value = kelvin * 9/5;
}

// Function to convert Fahrenheit to Celcius  Kelvin and Rankine
function convertFahrenheit() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    celciusInput.value = (fahrenheit - 32) * 5/9;
    kelvinInput.value = (fahrenheit - 32) * 5/9 + 273.15;
    rankineInput.value = fahrenheit + 459.67;
}

// Function to convert Rankine to Celsius  Fahrenheit and Kelvin
function convertRankine() {
    const rankine = parseFloat(rankineInput.value);
    celciusInput.value = (rankine - 491.67) * 5/9;
    kelvinInput.value = (rankine * 5/9);
    fahrenheitInput.value = rankine - 459.67;
}

// Event listener for Celcius input
celciusInput.addEventListener('input', convertCelcius);

// Event listener for Kelvin input
kelvinInput.addEventListener('input', convertKelvin);

// Event listener for Fahrenheit input
fahrenheitInput.addEventListener('input', convertFahrenheit);

// Event listener for Rankine input
rankineInput.addEventListener('input', convertRankine);


// Event listener for Reset button
resetButton.addEventListener('click', function() {
    celciusInput.value = '';
    kelvinInput.value = '';
    fahrenheitInput.value = '';
    rankineInput.value = '';
});