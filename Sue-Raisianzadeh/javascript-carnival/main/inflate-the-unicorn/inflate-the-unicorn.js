  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


function changeImage() {
  let images = document.getElementsByClassName("inflate-an-image");
  let imageSources = ["./images/unicorn-0.png", "./images/unicorn-1.png", "./images/unicorn-2.png", "./images/unicorn-3.png"];
 
  for (let i = 0; i < images.length; i++) {
    let currentImageIndex = 0;
    images[i].onclick = function() {
      currentImageIndex = (currentImageIndex + 1) % imageSources.length;
      images[i].src = imageSources[currentImageIndex];
    };
  }
}

changeImage();

