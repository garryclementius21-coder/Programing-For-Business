document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  clearErrors();

  let valid =
    validateUsername() &
    validateAge() &
    validateAddress() &
    validateOccupation() &
    validateContact() &
    validateSkills();

  if (valid) {
    alert("Form submitted successfully!");
  }
});

function clearErrors() {
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
}

function validateUsername() {
  let username = document.getElementById("username").value.trim();
  if (username === "") {
    document.getElementById("usernameError").textContent = "Username is required";
    return false;
  }
  return true;
}

function validateAge() {
  let age = document.getElementById("age").value.trim();
  if (age === "" || age < 1) {
    document.getElementById("ageError").textContent = "Enter a valid age";
    return false;
  }
  return true;
}

function validateAddress() {
  let address = document.getElementById("address").value.trim();
  if (address.length < 5) {
    document.getElementById("addressError").textContent = "Address too short";
    return false;
  }
  return true;
}

function validateOccupation() {
  let job = document.getElementById("occupation").value;
  if (job === "") {
    document.getElementById("occupationError").textContent = "Please choose an occupation";
    return false;
  }
  return true;
}

function validateContact() {
  let contact = document.querySelector('input[name="contact"]:checked');
  if (!contact) {
    document.getElementById("contactError").textContent = "Choose a contact type";
    return false;
  }
  return true;
}

function validateSkills() {
  let skills = document.querySelectorAll('input[name="skills"]:checked');
  if (skills.length === 0) {
    document.getElementById("skillsError").textContent = "Select at least 1 skill";
    return false;
  }
  return true;
}
