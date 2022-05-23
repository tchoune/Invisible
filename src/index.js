import './style/_settings.scss'
import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('.home-title', {delay : 2000, duration: 3000, opacity: 0.0, viewFactor:0.2 });
ScrollReveal().reveal('.subTitle', {delay : 2500, duration: 1000, opacity: 0.0, viewFactor:0.2 });
ScrollReveal().reveal('.about', {duration: 4000, opacity: 0.0, viewFactor:0.2 });
ScrollReveal().reveal('.reveal-2', { delay: 300, origin: 'left', distance:'150%' });
ScrollReveal().reveal('.reveal-3',{ delay: 400, origin: 'right', distance:'150%'});
ScrollReveal().reveal('.reveal-4', { delay: 500, origin: 'bottom',distance:'150%' });



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
 
window.addEventListener("DOMContentLoaded", () => {
    const oeil = document.querySelector(".onLoad");
    oeil.style.display = "flex";
    setTimeout(() => {
        oeil.style.display = "none";
    }, 2400)
})




/*********************IDENTITE SERVICES*******************/
let identite = document.querySelector(".identite2")
let oldtextIdentite = identite.innerHTML
let nbClickidentite = window.innerWidth > 900 ? 1 : 0
let isShowIdentitie = false


document.querySelector('.reveal-2').addEventListener("mouseover", () => {
    if(window.innerWidth > 900 && !isShowIdentitie) {
        isShowIdentitie = true
        document.querySelector('.identite_cards__text').style.display = 'flex';
    }
})

document.querySelector('.reveal-2').addEventListener("mouseleave", () => {
    if(window.innerWidth > 900 && isShowIdentitie) {
        isShowIdentitie = false
        document.querySelector('.identite_cards__text').style.display = 'none';
        
        if(nbClickidentite === 0) nbClickidentite = 1
    }
})

document.querySelector('.reveal-2').addEventListener("click", () => {

    if (nbClickidentite === 2){
        document.querySelector('.identite_cards__text').style.display = 'none';
        identite.innerHTML = oldtextIdentite
        nbClickidentite = 0;
    }
    else{

        document.querySelector('.identite_cards__text').style.display = 'flex';
        if (nbClickidentite === 0){
            identite.innerHTML = oldtextIdentite
        }

        else if (nbClickidentite === 1){
            identite.innerHTML ="<ul><li>MODÉLISATION 3D</li><li>MOTION DESIGN</li> <li>DÉVELOPPEMENT WEB</li> <li>WEB DESIGN</li> <li>CAMPAGNE DIGITALE</li><li>RÉSEAUX SOCIAUX</li></ul>"
        }
        nbClickidentite++;
    }
})




/********************** funtion ************************** */

 const displayCards = (id, state) => {
     document.querySelector(id).style.display = state
 }


/***************************PRINT SERVICES ********************* */
let print = document.querySelector(".print2")
let oldtextPrint = print.innerHTML
let nbClickPrint = 0
let isShowPrint = false


document.querySelector('.reveal-3').addEventListener("mouseover", () => {
    if(window.innerWidth > 900 && !isShowPrint) {
        isShowPrint = true
        displayCards('.print_cards__text', 'flex')
    }
})
document.querySelector('.reveal-3').addEventListener("mouseleave", () => {
    if(window.innerWidth > 900 && isShowPrint) {
        isShowPrint = false
        displayCards('.print_cards__text', 'none')
        
        if(nbClickPrint === 0) nbClickPrint = 1
    }
})

document.querySelector('.reveal-3').addEventListener("click", () => {

    if (nbClickPrint === 2){
        displayCards('.print_cards__text', 'none')
        print.innerHTML = oldtextPrint
        nbClickPrint = 0;
    }
    else{
        displayCards('.print_cards__text', 'flex')
        if (nbClickPrint === 0){
            print.innerHTML = oldtextPrint
        }

        else if (nbClickPrint === 1){
            print.innerHTML ="<ul><li>CARTE DE VISITE</li><li>FLYERS</li> <li>PAPIER À LETTRE</li> <li>GOODIES</li> <li>BÂCHE PUBLICITAIRE</li></ul>"
        }

        nbClickPrint++;
    }
})


/***********************DIGITALE SERVICES *********************/
let digital = document.querySelector(".digital2")
let oldtextDigital = digital.innerHTML
let nbClickDigital = 0
let isShowDigital = false


document.querySelector('.reveal-4').addEventListener("mouseover", () => {

    if(window.innerWidth > 900 && !isShowDigital) {
        isShowDigital = true
        displayCards('.digital_cards__text', 'flex')
    }
})

document.querySelector('.reveal-4').addEventListener("mouseleave", () => {
    if(window.innerWidth > 900 && isShowDigital) {
        isShowDigital = false
        displayCards('.digital_cards__text', 'none')        
        if(nbClickDigital === 0) nbClickDigital = 1
    }
})



document.querySelector('.reveal-4').addEventListener("click", () => {   

    if (nbClickDigital === 2){
        displayCards('.digital_cards__text', 'none')
        digital.innerHTML = oldtextDigital
        nbClickDigital = 0;
    }
    else{
        displayCards('.digital_cards__text', 'flex')
        if (nbClickDigital === 0){
            digital.innerHTML = oldtextDigital
        }

        else if (nbClickDigital === 1){
            digital.innerHTML ="<ul><li>LOGO</li><li>CHARTE GRAPHIQUE</li> <li>STRATÉGIE MARKETING</li> <li>STORY-TELLING</li></ul>"            
        }
        nbClickDigital++;
    }
})





