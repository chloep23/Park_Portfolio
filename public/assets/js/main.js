/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport heigh, add the scroll header class to the header tag
    if(this.scrollV >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CAROUSEL ===============*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_info'
    },
    animation: {
        duration: 100
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work_item')

function activeWork(){
    linkwork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== DROPDOWN NAVIGATION BAR ===============*/
const mediaQuery = window.matchMedia('(max-width: 991px)')
mediaQuery.addEventListener("change", handleSizeChange)
document.getElementById("nav_content").style.display = "none";
document.getElementById("exit").style.display = "none";

function handleSizeChange(e){
    if(e.matches){
        document.getElementById("drop_nav").style.display = "flex"
        document.getElementById("large_nav").style.display = "none";
        document.getElementById("drop").style.display = "block";
    }
    else{
        document.getElementById("large_nav").style.display = "flex";
        document.getElementById("drop_nav").style.display = "none"
    }
}

handleSizeChange(mediaQuery)
document.getElementById("drop").addEventListener('click', openDropdown);
document.getElementById("exit").addEventListener('click', closeDropdown);

function openDropdown(){
    document.getElementById("nav_content").style.display = "flex";
    document.getElementById("drop").style.display = "none";
    document.getElementById("exit").style.display = "block";
}

function closeDropdown(){
    document.getElementById("nav_content").style.display = "none";
    document.getElementById("exit").style.display = "none";
    document.getElementById("drop").style.display = "block";
}


/*=============== LIGHT DARK THEME ===============*/
const themeButton1 = document.getElementById('theme-button1') 
const themeButton2 = document.getElementById('theme-button2')
const lightTheme = 'light-theme' 
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton1.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    themeButton2.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Active / deactivate the theme manually with the button
themeButton1.addEventListener('click', () => {
    // Add or remove the dark/icon theme 
    document.body.classList.toggle(lightTheme)
    themeButton1.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

themeButton2.addEventListener('click', () => {
    // Add or remove the dark/icon theme 
    document.body.classList.toggle(lightTheme)
    themeButton2.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.home_data')
sr.reveal('.home_handle', {delay: 700})
sr.reveal('.home_social, .home_scroll', {delay: 900, origin: 'bottom'})
sr.reveal('.work_container')
sr.reveal('.card_2', {delay: 500})
sr.reveal('.card_3', {delay: 700})