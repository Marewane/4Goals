const bubbles = document.querySelectorAll('.bubble');
const screens = document.querySelectorAll('.screen');
const points = document.querySelectorAll('.point');

console.log(screens)
// Initialize: Show first screen and mark first dot & icon as active
if (screens.length > 0) screens[0].classList.add('active'); // .classList.add('active')
if (points.length > 0) points[0].classList.add('active');
if (bubbles.length > 0) {
    const firstIcon = bubbles[0].querySelector('.bubble_icon');
    if (firstIcon) firstIcon.classList.add('active');
}

bubbles.forEach((bubble, index) => {
    const icon = bubble.querySelector('.bubble_icon');

    bubble.addEventListener('mouseenter', () => {
        // 1. Remove 'active' from ALL icons
        document.querySelectorAll('.bubble_icon').forEach(el => {
            el.classList.remove('active');
        });

        // 2. Add 'active' to THIS bubble's icon
        icon?.classList.add('active');

        // 3. Hide all screens, show only corresponding one → TOGGLE CLASS
        screens.forEach((screen, i) => {
            if (i === index) {
                screen.classList.add('active');
            } else {
                screen.classList.remove('active');
            }
        });

        // 4. Update dots
        points.forEach((point, i) => {
            point.classList.toggle('active', i === index);
        });
    });

    bubble.addEventListener('mouseleave', () => {
        // Optional: Reset to first item on mouse leave
        // Remove active from current
        icon?.classList.remove('active');

        // Reset to first
        if (bubbles[0]) {
            const firstIcon = bubbles[0].querySelector('.bubble_icon');
            if (firstIcon) firstIcon.classList.add('active');
        }
        if (screens[0]) {
            screens.forEach(screen => screen.classList.remove('active'));
            screens[0].classList.add('active');
        }
        if (points[0]) {
            points.forEach(point => point.classList.remove('active'));
            points[0].classList.add('active');
        }
    });
});