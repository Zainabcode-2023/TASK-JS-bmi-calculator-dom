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
