function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / Math.pow(height, 2));
    var interpretation = Math.floor(bmi)
    if (interpretation < 18.5) {
        console.log("Your BMI is " + bmi + ", so you are underweight.");
    }
    if (interpretation >= 18.5 && bmi <= 24.9) {
        console.log("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    if (interpretation > 24.9) {
        console.log("Your BMI is " + bmi + ", so you are overweight.");
    }
    
    return interpretation;
}
console.log(bmiCalculator(65, 1.8));
