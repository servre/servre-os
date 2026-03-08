// VitaaMain frontend JS: login/signup + dashboard customization + auto-save
document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------
     Dashboard Color Customization
  ---------------------------------*/
  const leftInput = document.getElementById("leftColor");
  const rightInput = document.getElementById("rightColor");

  function saveColors() {
    const left = leftInput ? leftInput.value : null;
    const right = rightInput ? rightInput.value : null;
    if(left && right) {
      localStorage.setItem("vitaa-left-color", left);
      localStorage.setItem("vitaa-right-color", right);

      // Update logo gradient dynamically
      const logo = document.querySelector(".logo");
      if(logo){
        logo.style.background = `linear-gradient(to right, ${left}, ${right})`;
        logo.style.webkitBackgroundClip = 'text';
        logo.style.color = 'transparent';
      }
    }
  }

  if(leftInput && rightInput){
    leftInput.addEventListener("input", saveColors);
    rightInput.addEventListener("input", saveColors);

    // Load saved colors
    leftInput.value = localStorage.getItem("vitaa-left-color") || "#9B59B6";
    rightInput.value = localStorage.getItem("vitaa-right-color") || "#6C3483";
    saveColors(); // apply immediately
  }

  /* -------------------------------
     Login & Signup Demo Handling
  ---------------------------------*/
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  if(signupForm){
    signupForm.addEventListener("submit", async (e)=>{
      e.preventDefault();
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      // Demo alert (replace with Netlify function fetch)
      alert(`Signup demo: Verification email sent to ${email}`);
      signupForm.reset();
    });
  }

  if(loginForm){
    loginForm.addEventListener("submit", async (e)=>{
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      // Demo alert (replace with Netlify function fetch)
      alert(`Login demo: Redirecting ${email} to dashboard`);
      loginForm.reset();

      // Example redirect to dashboard page
      window.location.href = "dashboard.html";
    });
  }

  /* -------------------------------
     Auto-save demo for forms
  ---------------------------------*/
  const forms = document.querySelectorAll("form input");
  forms.forEach(input=>{
    input.addEventListener("input", () => {
      const data = {};
      forms.forEach(i => data[i.id] = i.value);
      localStorage.setItem("vitaa-form-autosave", JSON.stringify(data));
    });
  });

  // Load saved form data
  const savedData = JSON.parse(localStorage.getItem("vitaa-form-autosave") || "{}");
  Object.keys(savedData).forEach(key=>{
    const el = document.getElementById(key);
    if(el) el.value = savedData[key];
  });

});
