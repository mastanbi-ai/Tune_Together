const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');

// Activate sign-up panel (if applicable)
if (signUpButton) {
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
}

document.querySelector(".sign-up-container form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector(".sign-up-container input[type='text']").value.trim();
    const email = document.querySelector(".sign-up-container input[type='email']").value.trim();
    const password = document.querySelector(".sign-up-container input[type='password']").value.trim();

    // Basic validation
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            alert(data.message);
            alert("Press 'User Menu' on the home page and sign in there.");
            window.location.href = "homepage.html";
        } else {
            alert(data.error || "Sign-up failed. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please check your connection and try again.");
        console.error("Sign-up Error:", error);
    }
});
