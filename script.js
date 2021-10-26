
/* This is the toggle switch for the hamburger menu. Clicking it will show and hide the menu.
Still trying to figure how how to add a smooth transition to the drop down menu. This works by using an array navlinks/hamburger [0], 
adds an event listener for a click and then toggles it active or inactive. It's basic but it works.*/

let navlinks  =  document.getElementsByClassName('navlinks')[0]
let hamburger =  document.getElementsByClassName('hamburger')[0]
hamburger.addEventListener('click', function(){ navlinks.classList.toggle('active')})