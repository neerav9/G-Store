const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.querySelector('form').addEventListener('submit', function(event) {
	var email = document.querySelector('input[type="email"]').value;
	var password = document.querySelector('input[type="password"]').value;

	if (!email || !password) {
		alert('Please fill in all fields');
		event.preventDefault(); 
	}
});