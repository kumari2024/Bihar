document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}, for reaching out! We'll get back to you soon.`);
  this.reset();
});
