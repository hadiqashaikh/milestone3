// Get references to the form and display area
let form = document.getElementById("Resume-form") as HTMLFormElement;
let resumedisplaye = document.getElementById ("resume-display") as HTMLElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
 event.preventDefault(); // Prevent page reload


    let name = (document.getElementById("Name") as HTMLInputElement).value;
    let email = (document.getElementById("Email") as HTMLInputElement).value; 
    let phone = (document.getElementById("Phone") as HTMLInputElement).value;
    let edu = (document.getElementById("Education") as HTMLTextAreaElement).value;
    let exp = (document.getElementById("Experience") as HTMLTextAreaElement).value; 
    let skills = (document.getElementById("Skills") as HTMLTextAreaElement).value; 

    // Generate the resume content dynamically
    let ResumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${edu}</p>
    <h3>Experience</h3>
    <p>${exp}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // Display generated resume
    if (resumedisplaye) {
        resumedisplaye.innerHTML = ResumeHtml;
    } else {
        console.error("The resume display element is missing");
    }
});

