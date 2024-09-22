// Get references to the form and display area
var form = document.getElementById("Resume-form");
var resumedisplaye = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var edu = document.getElementById("Education").value;
    var exp = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // Generate the resume content dynamically
    var ResumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(edu, "</p>\n    <h3>Experience</h3>\n    <p>").concat(exp, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display generated resume
    if (resumedisplaye) {
        resumedisplaye.innerHTML = ResumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
