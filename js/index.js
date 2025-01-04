
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
     currentlyActiveAccordionItemHeader.classList.toggle("active");
     currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


let testim = document.getElementById("testim");
let testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children);
let testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children);
let testimleftArrow = document.getElementById("left-arrow");
let testimrightArrow = document.getElementById("right-arrow");
let testimSpeed = 4500;
let currentSlide = 0;
let currentActive = 0;
let testimTimer;

window.onload = function (){
    function playSlide(slide){
        for (let k = 0; k < testimDots.length; k++){
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        
        if (slide < 0){
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide >= testimContent.length) {
            slide = currentSlide = 0;
        }
        
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed);
    }

    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    }); 

    testimrightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    }); 

    for (let i = 0; i < testimDots.length; i++){
        testimDots[i].addEventListener("click", function (){
            playSlide(currentSlide = testimDots.indexOf(this));
        });
    }

    playSlide(currentSlide);
}
