/*=========================================
        DOWNLOAD PDF
=========================================*/

const downloadBtn = document.getElementById("downloadResume");

downloadBtn.addEventListener("click",()=>{

window.print();

});

/*=========================================
        REVEAL
=========================================*/

const reveals=document.querySelectorAll("section");

function reveal(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.classList.add("active");

section.classList.add("reveal");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*=========================================
        SKILL BAR
=========================================*/

window.addEventListener("load",()=>{

document.querySelectorAll(".bar").forEach(bar=>{

const width=bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

},300);

});

});