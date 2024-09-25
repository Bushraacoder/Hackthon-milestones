// Get references to the button and the skills section
var toggleButton = document.getElementById("toggle skills");
var skills = document.getElementById("skills");
// Set initial display style if needed
skills.style.display = 'block'; // Change to 'none' if you want it hidden by default
// Add event listener for the button
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
