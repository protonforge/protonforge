// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("physics-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const topic = form.elements["topic"].value;

        // Perform calculations based on the selected topic
        let result;
        switch (topic) {
            case "mechanics":
                result = "Mechanics calculations will be performed here.";
                break;
            case "electricity":
                result = "Electricity calculations will be performed here.";
                break;
            case "magnetism":
                result = "Magnetism calculations will be performed here.";
                break;
            // Add more cases for additional topics
            default:
                result = "Please select a topic.";
        }

        // Display the result
        resultDiv.textContent = result;
    });
});
