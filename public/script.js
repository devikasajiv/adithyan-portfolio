const form = document.getElementById('contactForm');
const response = document.getElementById('response'); // make sure your HTML has <p id="response"></p>

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };
  try {
    const res = await fetch('http://localhost:4000/api/contact', { // port 4000
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    response.textContent = result.message;
    form.reset();
  } catch (err) {
    response.textContent = 'Error sending message';
  }
});
