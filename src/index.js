import './style/_settings.scss'
import ScrollReveal from 'scrollreveal'



window.showMenuMobile = () =>{
    const nav = document.querySelector("nav")
    if(nav.style.display  === "flex"){
        nav.style.display = "none";
        nav.classList.remove("nav-responsive");

    }else {
        nav.style.display = "flex";
        nav.classList.add("nav-responsive");
    }
}


window.scrollToForm = (id) => {
    id.scrollIntoView({behavior: 'smooth'});
}


/*
const ratio = .9

const option = {
    root : null,
    rootMargin : '0px',
    threshold : 0.9
}

const handleIntersect = (entries, observer) => {
    entries.forEach((entry, i) => {
        if(entry.isIntersecting){
            console.log(entry.isIntersecting)
            entry.target.classList.add(`reveal-visible`)
            observer.unobserve(entry.target)
        }
    })

}

window.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(handleIntersect, option)
    const targets = document.querySelectorAll('[class*="reveal-"]')
    console.log(targets)
    targets.forEach(function (target) {
      observer.observe(target)
    })
  })
*/


ScrollReveal().reveal('.about', {duration: 4000, opacity: 0.0, viewFactor:0.2 });
ScrollReveal().reveal('.reveal-2', { delay: 300, origin: 'left', distance:'150%' });
ScrollReveal().reveal('.reveal-3',{ delay: 400, origin: 'right', distance:'150%'});
ScrollReveal().reveal('.reveal-4', { delay: 500, origin: 'bottom',distance:'150%' });

 
window.addEventListener("DOMContentLoaded", () => {
    const oeil = document.querySelector(".onLoad");

    oeil.style.display = "flex";
    document.querySelector("#vOeil").play();

    setTimeout(() => {
        oeil.style.display = "none";
        document.querySelector("#vOeil").pause();
    }, 2000)
})

