function changeBar(x) {
	x.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function showModal(x) {
	
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	//var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	
    modal.style.display = "block";
    modalImg.src = x.src;
    captionText.innerHTML = x.alt;
	
}

