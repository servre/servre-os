// Demo JS for login/signup and dashboard customization
document.addEventListener("DOMContentLoaded", () => {

  // Auto-save logo colors
  const leftInput = document.getElementById("leftColor");
  const rightInput = document.getElementById("rightColor");

  function saveColors() {
    const left = leftInput ? leftInput.value : null;
    const right = rightInput ? rightInput.value : null;
    if(left && right) {
      localStorage.setItem("vitaa-left-color", left);
      localStorage.setItem("vitaa-right-color", right);
    }
  }

  if(leftInput && rightInput){
    leftInput.addEventListener("input", saveColors);
    rightInput.addEventListener("input", saveColors);

    // Load saved colors
    leftInput.value = localStorage.getItem("vitaa-left-color") || "#9B59B6";
    rightInput.value = localStorage.getItem("vitaa-right-color") || "#6C3483";
  }

  // Simple form handling (demo only)
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  if(signupForm){
    signupForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      alert("Signup demo: verification email sent!");
    });
  }

  if(loginForm){
    loginForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      alert("Login demo: redirect to dashboard!");
    });
  }
});
