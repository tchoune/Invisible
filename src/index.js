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


//ScrollReveal().reveal('.home-title', {delay : 2000, duration: 3000, opacity: 0.0, viewFactor:0.2 });
//ScrollReveal().reveal('.subTitle', {delay : 2000, duration: 3000, opacity: 0.0, viewFactor:0.2 });
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




/*Text au survol des images*/

let Midentite = document.querySelector('.reveal-2')
let Mprint = document.querySelector('.reveal-3')
let Mdigital = document.querySelector('.reveal-4')



let onChangeIdentite = true
let identite = document.querySelector(".identite2")
let oldtextIdentite = identite.innerHTML

Midentite.addEventListener("click", () => {

if(onChangeIdentite){
    identite.innerHTML = oldtextIdentite
    }else{
        identite.innerHTML ="<ul><li>MODÉLISATION 3D</li><li>MOTION DESIGN</li> <li>DÉVELOPPEMENT WEB</li> <li>WEB DESIGN</li> <li>CAMPAGNE DIGITALE</li><li>RÉSEAUX SOCIAUX</li></ul>"
    }
    onChangeIdentite = !onChangeIdentite

})
Midentite.addEventListener("mouseleave", () => {
    identite.innerHTML = oldtextIdentite
    onChangeIdentite = false
})







let onChangePrint = true
let print = document.querySelector(".print2")
let oldtextPrint = print.innerHTML

Mprint.addEventListener("click", () => {
    if(onChangePrint){
        print.innerHTML = oldtextPrint
    }else{
        print.innerHTML ="<ul><li>CARTE DE VISITE</li><li>FLYERS</li> <li>PAPIER À LETTRE</li> <li>GOODIES</li> <li>BÂCHE PUBLICITAIRE</li></ul>"
    }
    onChangePrint = !onChangePrint

})
Mprint.addEventListener("mouseleave", () => {
    print.innerHTML = oldtextPrint
    onChangePrint = false
})




let onChangeDigital = true
let digital = document.querySelector(".digital2")
let oldtextDigital = digital.innerHTML

Mdigital.addEventListener("click", () => {   
    if(onChangeDigital){
        digital.innerHTML = oldtextDigital
    }else{
        digital.innerHTML ="<ul><li>LOGO</li><li>CHARTE GRAPHIQUE</li> <li>STRATÉGIE MARKETING</li> <li>STORY-TELLING</li></ul>" 
    }
    onChangeDigital = !onChangeDigital
})

Mdigital.addEventListener("mouseleave", () => {
    digital.innerHTML = oldtextDigital
    onChangeDigital = false
})


