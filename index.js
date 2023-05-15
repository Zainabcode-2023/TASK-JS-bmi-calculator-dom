function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height / 100;
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  alert("your bmi is " + bmi);

  if (bmi <= 18.5) {
    console.log("underweight");
  } else if (bmi <= 18.5 || bmi >= 25) {
    console.log("healthy weight");
  } else if (bmi >= 25 || bmi <= 30) {
    console.log("overweight");
  } else if (bmi >= 30) {
    console.log("above obesity");
  }
  alert(" the bmi state is:" + bmi);
}

let age;
let bmi_State;
if (age >= 19 || age <= 25) {
  console.log("BMI state is between 19 to 24");
} else if (age <= 25 || age >= 34) {
  console.log("BMI state is between 20 to 25");
} else if (age <= 35 || age >= 44) {
  console.log("BMI state is between 21 to 26");
} else if (age <= 45 || age >= 54) {
  console.log("BMI state is between 22 to 27");
} else if (age <= 55 || age >= 64) {
  console.log("BMI state is between 23 to 28");
} else if (age >= 65) {
  console.log("BMI state is between 24 to 29");
}
alert("your BMI state is healthy" + bmi_State);
