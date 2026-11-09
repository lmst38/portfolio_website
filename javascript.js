// coursework.html
// For every course, add an EventListener
// Then when the mouse is over course[i], change description to data-description[i]
    let courses = document.querySelectorAll('.course');
        if (courses.length > 0) { // only run this code on coursework.html
            let descriptions = document.querySelector('.description');
            for (let i = 0; i < courses.length; i++) {
                courses[i].addEventListener('mouseenter', function() {
                descriptions.innerHTML = this.getAttribute('data-description');
                });
// When mouse leaves course[i], change description back to default
        courses[i].addEventListener('mouseleave', function() {
        descriptions.innerHTML = 'Hover over a course to see its description';
        });
                                                      }
                                }

// contact.html
// Thanks for using the contact form
//  NB: use textContent to keep user input plain-text
    let contactForm = document.getElementById('contact-form');
        if (contactForm) {  // only run this code on contact.html
            contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // stop the form from reloading so the message shows
            document.getElementById('thanks_message').textContent='Thanks! But your message has NOT been sent. Please use the e-mail link in the sidebar to contact me.';
            });
                          }
