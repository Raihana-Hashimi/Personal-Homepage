let slideIndex = 1;
showSlides(slideIndex);

// Automatic slide change every 5 seconds
setInterval(function() {
    showSlides(slideIndex += 1);
}, 5000);

function currentSlide(n) {
    clearInterval(slideInterval);  // Clear the automatic slide change interval when the user manually changes slides
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Restart automatic slide change after manual slide change
let slideInterval = setInterval(function() {
    showSlides(slideIndex += 1);
}, 5000);
