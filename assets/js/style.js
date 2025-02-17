document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.toggle-btn');
    const toggler = document.querySelector('.toggle-btn i'); // Ambil ikon di dalam tombol

    if (hamburger && toggler) {
        hamburger.addEventListener('click', function() {
            document.querySelector('#sidebar').classList.toggle('active');
            toggler.classList.toggle('bx-menu');
            toggler.classList.toggle('bx-x');
        });
    }

    const togglePassword = document.getElementById("togglePassword");
    if (togglePassword) {
        togglePassword.addEventListener("click", function() {
            let passwordField = document.getElementById("password");
            if (passwordField) {
                if (passwordField.type === "password") {
                    passwordField.type = "text";
                    this.classList.replace("bx-show", "bx-low-vision");
                } else {
                    passwordField.type = "password";
                    this.classList.replace("bx-low-vision", "bx-show");
                }
            }
        });
    }
});
