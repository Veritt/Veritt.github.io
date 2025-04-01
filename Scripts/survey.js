document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("byoForm");
    const coursesContainer = document.getElementById("coursesContainer");
    const addCourseButton = document.getElementById("addCourse");

    // Prevent form submission without required fields
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        } else {
            event.preventDefault();
            displayFormData();
        }
    });

    // Reset form functionality
    form.addEventListener("reset", () => {
        coursesContainer.innerHTML = '<input type="text" name="courses[]" placeholder="Course Name">';
    });

    // Add new course text box
    addCourseButton.addEventListener("click", () => {
        const courseInput = document.createElement("div");
        courseInput.innerHTML = `
            <input type="text" name="courses[]" placeholder="Course Name">
            <button type="button" class="deleteCourse">Delete</button>
        `;
        coursesContainer.appendChild(courseInput);

        // Add delete functionality
        courseInput.querySelector(".deleteCourse").addEventListener("click", () => {
            courseInput.remove();
        });
    });

    // Display form data and replace form
    function displayFormData() {
        const formData = new FormData(form);
        const output = document.createElement("div");
        output.innerHTML = `
            <h3>Form Submission</h3>
            <p>Name: ${formData.get("name")}</p>
            <p>Mascot: ${formData.get("mascot")}</p>
            <p>Image Caption: ${formData.get("imageCaption")}</p>
            <p>Personal Background: ${formData.get("personalBackground")}</p>
            <p>Professional Background: ${formData.get("professionalBackground")}</p>
            <p>Academic Background: ${formData.get("academicBackground")}</p>
            <p>Background in Web Development: ${formData.get("webDevBackground")}</p>
            <p>Primary Computer Platform: ${formData.get("primaryPlatform")}</p>
            <p>Courses: ${formData.getAll("courses[]").join(", ")}</p>
            <p>Funny Thing: ${formData.get("funnyThing")}</p>
            <p>Anything Else: ${formData.get("anythingElse")}</p>
        `;
        form.replaceWith(output);
    }
});
