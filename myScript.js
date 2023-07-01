/* Code for the navbar, it removes the class when a link is clicked */
function closeNavbar() {
  var navCheckbox = document.getElementById("nav");
  navCheckbox.checked = false;
}

var links = document.querySelectorAll(".nav-wrapper ul li a");
links.forEach(function(link) {
  link.addEventListener("click", closeNavbar);
});



const elementobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          const classList = entry.target.classList;
          if (classList.contains('hidden-slide')) {
              classList.add('show');
          } else if (classList.contains('heading-underline')) {
              classList.add('heading-show');
          }else if (classList.contains('fade-in-animate')) {
              classList.add('show-fade');
          }
          // Add more conditions for different classes and animation classes as needed
      } 
  });
});

const elements = document.querySelectorAll('.hidden-slide, .heading-underline, .fade-in-animate');
elements.forEach((el) => elementobserver.observe(el));


function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  var elementRect = element.getBoundingClientRect();
  var absoluteElementTop = elementRect.top + window.scrollY;
  var middle = absoluteElementTop - (window.innerHeight / 8);
  
  window.scrollTo({ top: middle, behavior: "smooth" });
}

document.querySelectorAll("[data-scroll-to]").forEach(function(button) {
  button.addEventListener("click", function() {
    var elementId = button.getAttribute("data-scroll-to");
    scrollToElement(elementId);
  });
});



function scrollDownHandler() {
  let arrow = document.getElementById("arrow");
  arrow.classList.add("fade-out");
  arrow.classList.remove("fade-in");
}

var lastScrollPosition = 0;

window.addEventListener("scroll", function() {
  var currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    scrollDownHandler();
  }

  lastScrollPosition = currentScrollPosition;
});


const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "gm2s2KyLqv4hkb62M";
const serviceID = "service_8pk57ln";
const templateID = "template_a9t8apu";


contactForm.addEventListener("submit", e=>{
    e.preventDefault();
    submitBtn.innerText = "Just A Moment...";
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong";
    });

});
