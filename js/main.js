function changeBar(x) {
	x.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
 // Get the modal
  var modal = document.getElementById('myModal');
  // Get the image and insert it inside the modal - use its "alt" text as a caption
	//var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  var slides = document.getElementsByClassName("mySlides");
 

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  var current = slides[slideIndex-1];   
 
  modalImg.src = current.src;
  captionText.innerHTML = current.alt;
}

