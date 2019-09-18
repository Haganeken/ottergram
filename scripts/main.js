var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var DETAIL_FRAME_SELECTOR = "[data-image-role=\"frame\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var HIDDEN_DETAIL_CLASS = "hidden-detail";
var TINY_EFFECT_CLASS = "is-tiny";
var ESC_KEY = 27;

function addKeyPressHandler() {
  "use strict";
  document.body.addEventListener("keyup", function(event) {
    event.preventDefault();
    /*eslint-disable-next-line no-console*/
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  "use strict";
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function showDetails() {
  "use strict";
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  },
  50);
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

//WIP button action w3schools
/*var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("thumbnail-item");
  var dots = document.getElementsByClassName("dot");
  if ( n > slides.length)
  {
    slideIndex=1;
  }
  if( n < 1)
  {
    slideIndex = slides.length;
  }
  for ( i = 0 ; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  for ( i = 0; i < dots.length; i++)
  {
    dots[i].className= dots[i].classNAme.replace("active","");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += "active";
}*/



initializeEvents();
