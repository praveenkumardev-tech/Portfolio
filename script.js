const video1 = document.getElementById('projectVideo-1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo-3');
const hoverSign = document.querySelector(".hover-sign");

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1,video2,video3];

videoList.forEach(function(video){
  video.addEventListener('mouseover', function(){
    video.play();
    hoverSign.classList.add('active');
  })
  video.addEventListener('mouseout', function(){
    video.pause();
    hoverSign.classList.remove('active');
  })
})

// sidebar elements
menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
})

close.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
})


document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS (Use your correct Public Key)
  emailjs.init("J0gPZHjoLJsQndDYT");

  // Attach event listener to the form
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send form data using EmailJS
    emailjs.sendForm("service_wbswp7f", "template_hmye5ke", this)
      .then(function(response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        
        // Reset form after successful submission
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
      });
  });
});


