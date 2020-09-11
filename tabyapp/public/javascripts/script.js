const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById(`container`);
const signUpletras = document.getElementById(`taby`);

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    signUpletras.classList.add("esconder");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    signUpletras.classList.remove("esconder");
});