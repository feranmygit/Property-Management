
// Get the section to reveal
const section = document.querySelector('.hidden-section');

// Create an Intersection Observer to detect when the section enters the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add the class to trigger the animation
    }
  });
}, { threshold: 0.7 }); // Trigger when 10% of the section is visible

// Observe the target section
observer.observe(section);




// Select all the cards
const cards = document.querySelectorAll('.Detail-Blog-Card-Grids');

// Iterate over each card and add event listeners for hover effects
cards.forEach(card => {
  // Mouse move event for rotating the card based on mouse position
  card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();  // Get card's dimensions and position
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    // Calculate mouse position relative to the card's center
    const mouseX = e.clientX - cardRect.left - cardWidth / 2;
    const mouseY = e.clientY - cardRect.top - cardHeight / 2;

    // Calculate rotation angles
    const rotateX = -(mouseY / (cardHeight / 2)) * 10;  // Tilt on X axis
    const rotateY = (mouseX / (cardWidth / 2)) * 10;    // Tilt on Y axis

    // Apply the rotation to the card
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Reset the rotation when the mouse leaves the card
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// const goTo = document.getElementById('goTo');
// const removeGoto = document.getElementById('removeGoto');
// const hambugger = document.getElementById('hambugger');

// goTo.addEventListener('click', function(){
//   removeGoto.classList.toggle('input');
// })