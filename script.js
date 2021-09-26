
/* This is the toggle switch for the hamburger menu. Clicking it will show and hide the menu.
Still trying to figure how how to add a smooth transition to the drop down menu*/

let navlinks  =  document.getElementsByClassName('navlinks')[0]
let hamburger =  document.getElementsByClassName('hamburger')[0]
hamburger.addEventListener('click', function(){ navlinks.classList.toggle('active')})