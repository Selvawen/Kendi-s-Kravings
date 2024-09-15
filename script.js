// Menu open function
function openMenu() {
    document.body.classList.add("menu--open");
}

// Menu close function
function closeMenu() {
    document.body.classList.remove("menu--open");
}

// Contact form validation (assuming the Contact Us page form structure)
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            const email = document.querySelector("#email").value;
            if (!validateEmail(email)) {
                e.preventDefault();  // Prevent form submission
                alert("Please enter a valid email address.");
            }
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Additional functionality can go here as needed

