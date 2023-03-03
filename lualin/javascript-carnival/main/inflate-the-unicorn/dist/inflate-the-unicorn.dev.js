"use strict";

var _jsConfetti = _interopRequireDefault(require("js-confetti"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var jsConfetti = new _jsConfetti["default"]();
jsConfetti.addConfetti(); // Variables to declare img tags in html file and image source with images in order

var images = document.getElementsByClassName('inflate-an-image');
var imageSources = ['./images/unicorn-0.png', './images/unicorn-1.png', './images/unicorn-2.png', './images/unicorn-3.png']; // Changes image of each image tag every time it gets clicked as per the order of imageSources

function changeImages() {
  var _loop = function _loop(i) {
    var imageIdx = 1;
    images[i].addEventListener('click', function () {
      images[i].src = imageSources[imageIdx];
      imageIdx = (imageIdx + 1) % imageSources.length;

      if (imageIdx === 0) {
        console.log('yay!');
      }
    });
  };

  for (var i = 0; i < images.length; i++) {
    _loop(i);
  }
} // Call functions here


changeImages();