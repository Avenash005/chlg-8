async function generate() {
  const input = document.getElementById("input").value;

  if (!input) {
    alert("Enter something");
    return;
  }

  document.getElementById("output").innerText = "Generating...";

  const res = await fetch("https://ai-chatbot-backend-5it0.onrender.com/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ input })
  });

  const data = await res.json();

  document.getElementById("output").innerText = data.result;
}