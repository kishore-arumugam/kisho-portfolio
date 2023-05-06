var typed = new Typed('.multiple-text',{
    strings: ["Web Developer", "Programmer", "Digital Marketing Associate","Blogger"],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('enable');
}



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navlinks.forEach(links => {
            links.classList.remove('enable');
            document.querySelector('header nav a[href*=' + id +']').classList.add('enable');
        })
    };
});

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY >100);


menuIcon.classList.remove('bx-x');
    navbar.classList.remove('enable');

};



document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });