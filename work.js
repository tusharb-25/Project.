document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        const output = document.createElement("output");
        output.textContent = slider.value + "%";
        slider.insertAdjacentElement("afterend", output);

        slider.addEventListener("input", function () {
            output.textContent = this.value + "%";
        });
    });
});

// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const formData = new FormData(contactForm);
        fetch("https://mail.google.com", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                contactForm.reset(); 
            } else {
                alert("Failed to send message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });
});

