function togglePassword() {
    const password = document.getElementById("password");
    const eyeIcon = document.querySelector(".eye i");

    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

document.querySelector(".login-btn").addEventListener("click", function () {
    alert("مرحبًا بك في منصة اربح بسهولة مع كردو عفرين");
});

document.querySelector(".register-btn").addEventListener("click", function () {
    alert("سيتم فتح صفحة إنشاء الحساب قريبًا.");
});
