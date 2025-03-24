// this is a project that takes in a user's age and checks if they are eligible to vote,drink, or drive displaying different messages accordingly.
document.getElementById("checkButton").addEventListener("click", function () {
  //get the value from the input
  const ageValue = parseInt(document.getElementById("ageInput").value);
  console.log(typeof ageValue);
  //selecting where to display the results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  //checking for empty input or negative value
  if (isNaN(ageValue) || ageValue < 0) {
    resultDiv.innerHTML = "please enter a valid age";
    return;
  }
  //checking eligibility to vote
  if (ageValue >= 18) {
    resultDiv.innerHTML += "You are eligible to vote</br>";
  } else {
    resultDiv.innerHTML += "You are not eligible to vote</br>";
  }
  //checking eligibility to drink alcohol
  if (ageValue >= 21) {
    resultDiv.innerHTML += "You are eligible to drink alcohol</br>";
  } else {
    resultDiv.innerHTML += "You are not eligible to drink alcohol</br>";
  }
  //checking eligibility to drive
  if (ageValue >= 16) {
    resultDiv.innerHTML += "You are eligible to drive</br>";
  } else {
    resultDiv.innerHTML += "You are not eligible to drive</br>";
  }
});
