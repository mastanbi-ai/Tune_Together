const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Toggle between sign-up and sign-in form
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.querySelector(".sign-up-container form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector(".sign-up-container input[type='text']").value;
    const email = document.querySelector(".sign-up-container input[type='email']").value;
    const password = document.querySelector(".sign-up-container input[type='password']").value;

    const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    alert(data.message);
    alert("press user menu in home page and sign in there");
    window.location.href="homepage.html";
});



