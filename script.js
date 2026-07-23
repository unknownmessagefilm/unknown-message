// ==========================================
// UNKNOWN MESSAGE - Official Website
// script.js
// ==========================================

// Navbar Active Link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});


// Fade Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s ease";

    observer.observe(section);

});


// Gallery Popup

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.95)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.cursor = "pointer";
        popup.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "10px";
        image.style.boxShadow = "0 0 35px red";

        popup.appendChild(image);

        popup.onclick = () => popup.remove();

        document.body.appendChild(popup);

    });

});


// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff2a2a";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.transition = ".3s";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// Hero Poster Animation

const poster = document.querySelector(".hero-poster");

if(poster){

    setInterval(() => {

        poster.style.transform = "scale(1.03)";

        setTimeout(() => {

            poster.style.transform = "scale(1)";

        },800);

    },3000);

}


// Watch Button Glow

const watchBtn = document.querySelector(".watch-btn");

if(watchBtn){

    setInterval(() => {

        watchBtn.style.boxShadow = "0 0 40px red";

        setTimeout(() => {

            watchBtn.style.boxShadow = "0 0 20px red";

        },700);

    },1800);

}