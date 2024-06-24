// select the open-btn button
let openBtn = document.getElementById('open-btn');
// select the modal-background
let modalBackground = document.getElementById('modal-background');
// select the close-btn 
let closeBtn = document.getElementById('close-btn');

// shows the modal when the user clicks open-btn
openBtn.addEventListener('click', function() {
  modalBackground.style.display = 'block';
});

// hides the modal when the user clicks close-btn
closeBtn.addEventListener('click', function() {
  modalBackground.style.display = 'none';
});

// hides the modal when the user clicks outside the modal
window.addEventListener('click', function(event) {
  // check if the event happened on the modal-background
  if (event.target === modalBackground) {
    // hides the modal
    modalBackground.style.display = 'none';
  }
});

//////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
