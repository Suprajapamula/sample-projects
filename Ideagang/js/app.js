
    document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Commercial Displays","Small Displays","Digital Signage","Smart TV","Android-Based Displays","Smart Displays"];
    const animatedTextElement = document.getElementById("animatedText");
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        let text = texts[index];

        if (isDeleting) {
            if (charIndex > 0) {
                animatedTextElement.innerHTML = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeText, 100);  // Adjust the speed of backspacing here
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(typeText, 500);  // Delay before starting to type next text
            }
        } else {
            if (charIndex < text.length) {
                animatedTextElement.innerHTML = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeText, 100);  // Adjust the speed of typing here
            } else {
                isDeleting = true;
                setTimeout(typeText, 2000);  // Delay before starting to backspace
            }
        }
    }

    typeText();
});


var productsNavItem=document.getElementById("productsNav-item");
var featuresNavItem=document.getElementById("featuresNav-item");
var contactNavItem=document.getElementById("contactNav-item");
productsNavItem.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById("productsSection");
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    console.log("targetPosition" ,targetPosition)
    const offset = 100;
    console.log('Current vertical scroll position:', window.pageYOffset);
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
});

featuresNavItem.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById("featuresSection");
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    console.log("targetPosition2" ,targetPosition)
    const offset = 80;
    console.log('Current vertical scroll position2:', window.pageYOffset);
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
});


contactNavItem.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById("footerSection");
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    console.log("targetPosition3" ,targetPosition)
    const offset = 60;
    console.log('Current vertical scroll position3:', window.pageYOffset);
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
});


