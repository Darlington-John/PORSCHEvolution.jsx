/*
const container = document.getElementById('container');
const targetDiv = document.getElementById('targetDiv');
const threshold = 300; // Adjust this threshold as needed

window.addEventListener('scroll', () => {
    const containerPosition = container.getBoundingClientRect().top;

    if (containerPosition <= threshold) {
        // Calculate the opacity based on the distance from the threshold
        const opacity = 1 - containerPosition / threshold;

        // Apply the calculated opacity to the targetDiv
        targetDiv.style.opacity = opacity.toString();
    } else {
        targetDiv.style.opacity = '0'; // Hide the targetDiv
    }
});



function scrollToDiv(Intro) {
    const div = document.getElementById(Intro);
    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
} */