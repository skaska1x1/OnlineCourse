// burger > toggle.active
document.querySelector(".header__burger-lines").addEventListener('click', function()  {
    document.querySelector(".header__burger").classList.toggle('active');
});

// slider
var offset = null;
var section = document.querySelector('.team__slider');
var slider = document.querySelector('.team__slider-line');
var btnNext = document.querySelector('.next');
var btnPrev = document.querySelector('.prev');
console.log(offset);

btnNext.addEventListener('click', function () {
   offset += 315;
   if (offset > 630) {
       offset = 0;
   };
   slider.style.left = -offset + 'px';
   
});

btnPrev.addEventListener('click', function () {
   offset -= 315;
   if (offset < 0) {
       offset = 630;
   };
   slider.style.left = -offset + 'px';
});

// slider2
var sliderTest = document.querySelector('.testimonails__slider');
var sectionTest = document.querySelector('.testimonails__slider-line');
var btnNextTest = document.querySelector('.next-test');
var btnPrevTest = document.querySelector('.prev-test');
// cards id
var cardId1 = document.querySelector('#test-card1');
var cardId2 = document.querySelector('#test-card2');
var cardId3 = document.querySelector('#test-card3');
var cardId4 = document.querySelector('#test-card4');
var cardId5 = document.querySelector('#test-card5');

btnNextTest.addEventListener('click', function () {
    offset += 1024;
    if (offset > 4096) {
        offset = 0;
    };
    sectionTest.style.left = -offset + 'px';
    
    
    if(sectionTest.style.left == 0 +'px' ){
        cardId1.classList.toggle('active-dot')
        cardId5.classList.remove('active-dot')
    }
    
    if(sectionTest.style.left >= -1024+'px' && sectionTest.style.left <= -2048+'px'){
        cardId2.classList.toggle('active-dot')
        cardId1.classList.remove('active-dot')

    }
    
    if(sectionTest.style.left >= -2048+'px' && sectionTest.style.left <= -3072+'px'){
        cardId3.classList.toggle('active-dot')
    }
    
    if(sectionTest.style.left >= -3072+'px' && sectionTest.style.left <= -4096+'px'){
        cardId4.classList.toggle('active-dot')
    }
    
    if(sectionTest.style.left >= -4096+'px' && sectionTest.style.left <= -5120+'px'){
        cardId5.classList.toggle('active-dot')
    }

 });
 


 btnPrevTest.addEventListener('click', function () {
    offset -= 1024;
    if (offset < 0) {
        offset = 4096;
    };
    sectionTest.style.left = -offset + 'px';

    if(sectionTest.style.left <= -5120 +'px' && sectionTest.style.left <= -4096+'px'){
        cardId5.classList.toggle('active-dot')
        cardId1.classList.remove('active-dot')
    }
    
    if(sectionTest.style.left <= -4096+'px' && sectionTest.style.left <= -3072+'px'){
        cardId4.classList.toggle('active-dot')
        cardId5.classList.remove('active-dot')
    }
    
    if(sectionTest.style.left <= -3072+'px' && sectionTest.style.left <= -2048+'px'){
        cardId3.classList.toggle('active-dot')
    }
    
    if(sectionTest.style.left <= -2048+'px' && sectionTest.style.left <= -1024+'px'){
        cardId2.classList.toggle('active-dot')
        cardId4.classList.remove('active-dot')
    }
    
    if(sectionTest.style.left == 0+'px' ){
        cardId1.classList.toggle('active-dot')
        cardId2.classList.toggle('active-dot')
    }
 });

 // hover btnPrevTest

 btnPrevTest.addEventListener('mouseover', function(e) {
    // e.target.style.overflow ='hidden'
    // e.target.style.width = '0px'
    // e.target.style.height = '0px'
 })

//  if(btnPrevTest.style.hover){
//     btnPrevTest.style.height = '0px'
//     btnPrevTest.style.width = '0px'
//     btnPrevTest.style.overflow = 'hidden'

//  }