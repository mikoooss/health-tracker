var params = new URLSearchParams(window.location.search);
var age = Number(params.get('age')) || 25;
var height = Number(params.get('height')) || 170;
var weight = Number(params.get('weight')) || 70;
var goal = Number(params.get('goal')) || 1;
var bmi = weight / ((height / 100) * (height / 100));
var bmiText = "Normal";

if (bmi < 18.5) bmiText = "Underweight";
else if (bmi >= 25) bmiText = "Overweight";

var calories = weight * 30;

document.getElementById("stats").innerHTML =
    "BMI: " + bmi.toFixed(1) + " (" + bmiText + ")<br>" +
    "Calories: " + calories + " kcal/day";

document.getElementById("nutrition").innerHTML =
    "<h3>Nutrition</h3>" +
    "- Eat more protein<br>" +
    "- Drink water<br>" +
    "- Less sugar";

if (goal <= 1) {
    document.getElementById("activity").innerHTML =
        "<h3>Activity</h3>" +
        "- Walk 30 min<br>" +
        "- Light workout";
} else {
    document.getElementById("activity").innerHTML =
        "<h3>Activity</h3>" +
        "- Cardio 45 min<br>" +
        "- Training 3 times/week";
}

document.getElementById("meals").innerHTML =
    "<h3>Meals</h3>" +
    "Breakfast: eggs, oats<br>" +
    "Lunch: meat + rice<br>" +
    "Dinner: chicken + salad";

if (goal > 1.5) {
    document.getElementById("warning").innerHTML =
        "Too fast weight loss!";
}