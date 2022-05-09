// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    
    
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // } OR you can do the above four lines with just a single line using toggle method

    links.classList.toggle("show-links");
})