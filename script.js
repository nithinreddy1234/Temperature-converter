function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemperature;
    let resultUnit;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature.');
        return;
    }

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemperature = temperature + 273.15;
        resultUnit = 'Kelvin';
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
