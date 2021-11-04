
/* This is the toggle switch for the hamburger menu. Clicking it will show and hide the menu.
Still trying to figure how how to add a smooth transition to the drop down menu. This works by using an array navlinks/hamburger [0], 
adds an event listener for a click and then toggles it active or inactive. It's basic but it works.*/

let navlinks  =  document.getElementsByClassName('navlinks')[0]
let hamburger =  document.getElementsByClassName('hamburger')[0]
hamburger.addEventListener('click', function(){ navlinks.classList.toggle('active')})

/* Image slider - I used the code instructions from w3schools to adapt this to my website, its pretty
straight-forward. It adds functionality to the forward and previous button on the image gallery, and 
allows it to cycle through each image and repeat over and over. At first I started with a method that
stacked all of the images on top of each other, hid the overflow and then cycled through them, but I found
this method to be much easier to understand and implement.
 */
var ImageIndex = 1;
showImages(ImageIndex);

function moveImage(n) {
  showImages(ImageIndex += n);
}
function currentImage(n) {
  showImages(ImageIndex = n);
}
function showImages(n) {
  var i;
  var images = document.getElementsByClassName("allImages");
  var circle = document.getElementsByClassName("circle");
  if (n > images.length) {ImageIndex = 1}
  if (n < 1) {ImageIndex = images.length}
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }
  for (i = 0; i < circle.length; i++) {
      circle[i].className = circle[i].className.replace(" active", "");
  }
  images[ImageIndex-1].style.display = "block";
  circle[ImageIndex-1].className += " active";
};









