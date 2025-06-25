function generateMolecule() {
  const prompt = document.getElementById('prompt').value;
  const resultDiv = document.getElementById('result');

  if (!prompt.trim()) {
    resultDiv.innerHTML = "<p>Please enter a prompt.</p>";
    return;
  }

  fetch('https://myselfvaish.app.n8n.cloud/webhook/26415194-a184-49cc-9cef-d3bee524c344?chatInput='+prompt)
  .then(response => response.text())
  .then(data => {
    resultDiv.innerHTML = `
      <h3>Generated Molecule</h3>
      <p> ${data}</p>
    `;
  })
  .catch(error => {
    console.error("Error:", error);
    resultDiv.innerHTML = "<p>Something went wrong. Try again.</p>";
  });
}
