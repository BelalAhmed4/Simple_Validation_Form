document.getElementById('validationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Check inputs
  checkInput(name);
  checkInput(email);
  checkInput(password);
});

function checkInput(input) {
  if (input.value.trim() === '') {
    input.parentElement.classList.add('error');
  } else {
    input.parentElement.classList.remove('error');
  }
}