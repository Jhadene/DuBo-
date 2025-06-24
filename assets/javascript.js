
document.getElementById('signupForm')?.addEventListener('submit',function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const plan = document.getElementById('plan').value;

     alert("Thank you for registering your interest in our gym. Please look out for an email in your inbox to complete creating your account to allow you access the booking system.");

    // Optionally clear the form
    this.reset();
});

