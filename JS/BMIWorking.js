var heightInput = document.querySelector('.height-input');
var weightInput = document.querySelector('.weight-input');
var calculateButton = document.querySelector('.btn');
var result = document.querySelector('.result');
var statement = document.querySelector('.statement');
var clearButton = document.querySelector('.btn-clear');
var height, weight, BMI;


calculateButton.addEventListener('click', function() {
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    result.innerHTML = BMI;

    if(BMI < 18.5) {
        statement.innerHTML = 'You are underweight.! Please eat some food!';
    } else if(BMI > 18.5 && BMI < 24.5) {
        statement.innerHTML = 'Your are Normal & Healthy.! Chill. ';
    }else if(BMI > 24.5 && BMI <29.9) {
        statement.innerHTML = 'Your are overweight! Please do some dite!';
    }else {
        statement.innerHTML = ' You should take appointment from the Doctor!';
    }
});

clearButton.addEventListener('click', function() {
    result.innerHTML = '';
    statement.innerHTML = '';
    
});