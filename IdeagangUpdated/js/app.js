var headers = document.querySelectorAll('.card-header');

headers.forEach(function(header) {
    header.addEventListener('click', function() {
        var icon = this.querySelector('.details-section i');
        if (icon) {
            icon.classList.toggle('cross');
        }
    });

    header.addEventListener('dblclick', function() {
        var icon = this.querySelector('.details-section i');
        if (icon) {
            icon.classList.remove('cross');
        }
    });
});

    document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll('.navbar-nav .nav-item');

    navItems.forEach(function(navItem) {
      
        navItem.addEventListener('click', function() {
            
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });


  
        $('.consulting-services-container').on('wheel', function (e) {
            const container = $(this);
            const scrollAmount = 100;
    
            if (e.originalEvent.deltaY > 0) {
                // Scroll right when scrolling down
                container.scrollLeft(container.scrollLeft() + scrollAmount);
            } else {
                // Scroll left when scrolling up
                container.scrollLeft(container.scrollLeft() - scrollAmount);
            }
            e.preventDefault();
            if (container.scrollLeft() + container.innerWidth() >= container[0].scrollWidth) {
                // Scroll to the next section if reached the end
                $('html, body').animate({
                    scrollTop: container.offset().top + container.outerHeight(true)
                }, 800); // Adjust the animation speed as needed
            }
        });

        var cardHeaders = document.querySelectorAll('.businessJourneyAccordianCardHeader');

        cardHeaders.forEach(function(header) {
            header.addEventListener('click', function() {
                var currentCard = this.closest('.card');
                var isCurrentlyClicked = currentCard.classList.contains('clicked');
                document.querySelectorAll('.businessJourneyAccordianCard').forEach(function(card) {
                    card.classList.remove('clicked');
                });
                if (!isCurrentlyClicked) {
                    currentCard.classList.add('clicked');
                }
            });
        
            header.addEventListener('dblclick', function() {
                var card = this.closest('.card');
                if (card) {
                    card.classList.remove('clicked');
                }
            });
        });

         /////////////// 1st svg script start 
         window.addEventListener('scroll', function () {
            const svg = document.querySelector('.svg_underline--ic2 path');
            const svgContainer = document.querySelector('.svg_underline--ic2');
            const svgPosition = svgContainer.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // Check if the SVG is in view
            if (svgPosition < screenHeight && svgPosition > 0) {
                svg.style.strokeDashoffset = '0'; // Start drawing
            } else {
                svg.style.strokeDashoffset = '1000'; // Reset when out of view
            }
        });
        /////////////// 1st svg script end 




        /////////////// 2nd svg script start 

        window.addEventListener('scroll', function () {
            const svgContainers = document.querySelectorAll('.circled-word_svg--ic2-pe0');
            const screenHeight = window.innerHeight;

            svgContainers.forEach(container => {
                const svgPosition = container.getBoundingClientRect().top;
                const svgPaths = container.querySelectorAll('path');

                if (svgPosition < screenHeight && svgPosition > 0) {
                    // Start animation
                    container.classList.add('scroll-draw');
                    svgPaths.forEach(path => {
                        path.style.strokeDashoffset = '0'; // Hide the stroke
                        // Trigger reflow to restart the animation
                        void path.offsetWidth;
                    });
                } else {
                    // Reset animation
                    container.classList.remove('scroll-draw');
                    svgPaths.forEach(path => {
                        path.style.strokeDashoffset = '1000'; // Hide the stroke
                        // Trigger reflow to restart the animation
                        void path.offsetWidth;
                    });
                }
            });
        });
        /////////////// 2nd svg script end 





        /////////////// 3rd svg script start 

        window.addEventListener('scroll', function () {
            const heading = document.querySelector('.highlight-text');
            const headingPosition = heading.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // Check if the heading is in view
            if (headingPosition < screenHeight && headingPosition > 0) {
                heading.classList.add('animate-bg');
            } else {
                heading.classList.remove('animate-bg');
            }
        });
        /////////////// 3rd svg script end 




        /////////////// 4th & 5th svg script start 

        window.addEventListener('scroll', function () {
            const svgContainers = document.querySelectorAll('.svg_arrow--ic2');
            const screenHeight = window.innerHeight;

            svgContainers.forEach(container => {
                const svgPosition = container.getBoundingClientRect().top;
                const svgPaths = container.querySelectorAll('path');

                if (svgPosition < screenHeight && svgPosition > 0) {
                    // Start animation
                    container.classList.add('scroll-draw');
                    svgPaths.forEach(path => {
                        path.style.strokeDashoffset = '0'; // Hide the stroke
                        // Trigger reflow to restart the animation
                        void path.offsetWidth;
                    });
                } else {
                    // Reset animation
                    container.classList.remove('scroll-draw');
                    svgPaths.forEach(path => {
                        path.style.strokeDashoffset = '1000'; // Hide the stroke
                        // Trigger reflow to restart the animation
                        void path.offsetWidth;
                    });
                }
            });
        });
        /////////////// 4th & 5th svg script end 






        /////////////// 6th svg script start 

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll() {
            const elements = document.querySelectorAll('.highlight--em0-1-bc0-bg0');

            elements.forEach(element => {
                if (isElementInViewport(element)) {
                    element.classList.add('animate');
                    // Add animation delay for each character
                    const chars = element.querySelectorAll('.char');
                    chars.forEach((char, index) => {
                        char.style.transitionDelay = `${index * 0.1}s`; // Adjust delay as needed
                    });
                } else {
                    element.classList.remove('animate');
                    // Reset animation delay
                    const chars = element.querySelectorAll('.char');
                    chars.forEach(char => {
                        char.style.transitionDelay = '0s'; // Reset delay
                    });
                }
            });
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check in case the element is already in the viewport
        handleScroll();
        /////////////// 6th svg script end 










        /////////////// 7th svg script start 
        function isElementInViewport2(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll2() {
            const elements = document.querySelectorAll('.svg_guarantee--ic2');

            elements.forEach(element => {
                if (isElementInViewport2(element)) {
                    element.classList.add('animate');
                } else {
                    element.classList.remove('animate');
                }
            });
        }
        window.addEventListener('scroll', handleScroll2);
        handleScroll2();
        /////////////// 7th svg script end 
    
});
