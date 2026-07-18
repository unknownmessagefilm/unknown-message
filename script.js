// ===============================
// UNKNOWN MESSAGE
// Official Website Script
// ===============================

// Release Date
const releaseDate = new Date("July 24, 2026 19:08:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdown = setInterval(function(){

const now = new Date().getTime();

const distance = releaseDate - now;

if(distance <= 0){

clearInterval(countdown);

document.getElementById("countdown").innerHTML=`

<h2 style="color:#ff2a2a">

🎬 NOW STREAMING

</h2>

<a

class="btn"

href="https://youtu.be/mZIXCPlwgiw"

target="_blank">

▶ WATCH FULL MOVIE

</a>

`;

return;

}

days.innerHTML=Math.floor(distance/(1000*60*60*24));

hours.innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

minutes.innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

seconds.innerHTML=Math.floor((distance%(1000*60))/1000);

},1000);


// Navbar Active

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(a=>a.classList.remove("active"));

link.classList.add("active");

});

});


// Fade Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition=".8s";

observer.observe(sec);

});


// Gallery Zoom

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.95)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";
popup.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="10px";
image.style.boxShadow="0 0 25px red";

popup.appendChild(image);

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

});

});


// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff2a2a";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};