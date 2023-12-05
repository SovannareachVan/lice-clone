window.onscroll = function() {
    showBackToTopButton();
  };
  
  function showBackToTopButton() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }




  var slideIndex = 0;
showSlide();

function showSlide() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)
}



  // JavaScript function to toggle the overlay
  function toggleOverlay() {
    var Overlay = document.getElementById('Overlay');
    Overlay.style.display = (Overlay.style.display === 'none' || Overlay.style.display === '') ? 'flex' : 'none';
  }



//my js
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    
    }
    else{
      reveals[i].classList.remove('active');
    }

  }
}



