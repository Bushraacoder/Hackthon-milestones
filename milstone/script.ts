// Get references to the button and the skills section
const toggleButton = document.getElementById("toggle skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;

// Set initial display style if needed
skills.style.display = 'block'; // Change to 'none' if you want it hidden by default

// Add event listener for the button
toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});
