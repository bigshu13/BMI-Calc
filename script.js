// Need a function that'll calculate peoples height and weight.
// Have it also give a error message if info provided is wrong for function

function calculateBMI() {
  let height = document.getElementById("Height").value;
  let weight = document.getElementById("Weight").value;
  let bmiError = "Credentials are wrong. Please reenter your info correctly";
  let bmiUnder = "Underweight";
  let bmiNormal = "Normal Weight";
  let bmiOver = "OverWeight";
  let bmiObesity = "Obesity";

  if (height === "" || weight === "") {
    // this if statement tells you if someone enters anything besides numbers you will get a error message
    document.getElementById("result").textContent = bmiError;
  } else if (height <= 0 || weight <= 0) {
    // and else if they enter a negative number you get a error message
    document.getElementById("result").textContent = bmiError;
  } else {
    let bmi = (weight / height ** 2) * 703;
    // else if all conditions are met it will calculate the info given
    document.getElementById("result").textContent = bmi.toFixed(2);
    // below is the function that takes the bmi result and catergorizes the number to Under, Normal, or Over
    if (bmi < 18.5) {
      //Tells you are underweight if bmi is less than 18.5
      document.getElementById("result").textContent =
        `${bmi.toFixed(2)} - ${bmiUnder}`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      //Tells you normal weight if bmi is between 18.5 and 24.9
      document.getElementById("result").textContent =
        `${bmi.toFixed(2)} - ${bmiNormal}`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      //Tells you normal weight if bmi is between 18.5 and 24.9
      document.getElementById("result").textContent =
        `${bmi.toFixed(2)} - ${bmiOver}`;
    } else {
      //Tells you are Obesity if your result is over 30 bmi
      document.getElementById("result").textContent =
        `${bmi.toFixed(2)} - ${bmiObesity}`;
    }
  }
}
