document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  
  if (username === "admin" && password === "1234") {
    window.location.href = "https://myselfvaish.app.n8n.cloud/webhook/26415194-a184-49cc-9cef-d3bee524c344?chatInput="
    document.getElementById("error-msg").innerText = "Invalid username or password!";
  }
});