const elementobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const classList = entry.target.classList;
            if (classList.contains('hidden')) {
                classList.add('show');
            } else if (classList.contains('heading-underline')) {
                classList.add('heading-show');
            }else if (classList.contains('hidden-right')) {
                classList.add('show');
            }
            // Add more conditions for different classes and animation classes as needed
        } 
    });
});

const elements = document.querySelectorAll('.hidden, .heading-underline, .hidden-right');
elements.forEach((el) => elementobserver.observe(el));

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

const navbar = document.querySelector('.navbar')

navbar.querySelector('.toggle').addEventListener('click',()=>{
	
	navbar.classList.toggle('collapsed')
	
})


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

  window.onscroll = function () {
	let scrollPos = window.scrollY;
	let arrow = document.getElementById("arrow");
	if (scrollPos <= 3) {
		arrow.classList.add("fade-out");
		arrow.classList.remove("fade-in");
	} 
};
