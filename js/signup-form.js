function showWelcomeMessage() {
  alert("Welcome to EduConnect - Newsletter Signup");
}

function validateForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;

  if (firstName === "" || lastName === "") {
    alert("Please fill in both First Name and Last Name fields.");
    return false;
  }
  alert("Thank you. Your form has been submitted.");
  return true;
}

