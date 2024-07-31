document.addEventListener("DOMContentLoaded", function() {
    const folderPath = "images"; 
    const imageCount = 4; 
    const slider = document.getElementById("slider");
    const slides = document.getElementById("slides");
    const indicators = document.getElementById("indicators");

    for (let i = 1; i <= imageCount; i++) {
        let slide = document.createElement("div");
        slide.className = "slide";
        let img = document.createElement("img");
        img.src = `${folderPath}/image${i}.png`;
        img.alt = `Image ${i}`;
        slide.appendChild(img);
        slides.appendChild(slide);

        let indicator = document.createElement("span");
        indicator.className = "indicator";
        indicator.setAttribute("data-slide-to", i - 1);
        indicator.addEventListener("click", function() {
            showSlides(slideIndex = i - 1);
        });
        indicators.appendChild(indicator);
    }

    let slideIndex = 0;
    let timer;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("indicator");
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "flex";
        dots[slideIndex].className += " active";
        clearTimeout(timer);
        timer = setTimeout(() => plusSlides(1), 5000); 
    }

    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
});
