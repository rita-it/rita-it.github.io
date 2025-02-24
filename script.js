function viewProjectDetails(project) {
  alert("You clicked on " + project + " details.");
}

// Optional: Add form submission logic
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent!');
  document.getElementById('contact-form').reset();
});
