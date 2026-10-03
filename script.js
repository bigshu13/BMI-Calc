// Need a function that'll calculate peoples height and weight.
// Have it also give a error message if info provided is wrong for function

function calculateBMI() {
  let height = document.getElementById("Height").value;
  let weight = document.getElementById("Weight").value;
  let bmiError = "Credentials are wrong. Please reenter your info correctly";

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
  }
}
