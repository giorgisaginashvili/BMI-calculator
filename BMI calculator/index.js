// index.js
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', calculateBMI);

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    let bmi;

    if (metricRadio.checked) {
        
        bmi = weight / Math.pow(height / 100, 2);
    } else if (imperialRadio.checked) {
       
        const heightInInches = height * 0.393701;
        const weightInPounds = weight * 2.20462;
        bmi = weightInPounds / Math.pow(heightInInches, 2) * 703;
    } else {
        alert('Please select a unit system');
        return;
    }

    const bmiRounded = bmi.toFixed(2);
    const bmiCategory = getBMICategory(bmiRounded);

    resultParagraph.textContent = `Your BMI is ${bmiRounded} (${bmiCategory})`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}