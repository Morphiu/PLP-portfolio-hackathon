// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    alert(`Thank you, ${name}! Your message has been sent.\nWe'll respond to ${email} shortly.`);
    e.target.reset();
  });
  
  // Handle CV download
  document.querySelector(".btn[href='#']").addEventListener("click", function (e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "cv/Maryanne Wambui CV.pdf"; // Update with the actual path to the PDF file
    link.download = "Maryanne_Wambui_CV.pdf";
    link.click();
  });
  