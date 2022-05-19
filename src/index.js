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
let onChangeIdentite = true
let identite = document.querySelector(".identite2")
let oldtextIdentite = identite.innerHTML


document.querySelector('.reveal-2').addEventListener("mouseover", () => {

    console.log("test1")
    document.querySelector('.reveal-2 > .services__content__text').style.display = 'flex';

    document.querySelector('.reveal-2').addEventListener("click", () => {

        console.log("test2")
        if(onChangeIdentite){
            identite.innerHTML = oldtextIdentite
            }else{
                identite.innerHTML ="<ul><li>MODÉLISATION 3D</li><li>MOTION DESIGN</li> <li>DÉVELOPPEMENT WEB</li> <li>WEB DESIGN</li> <li>CAMPAGNE DIGITALE</li><li>RÉSEAUX SOCIAUX</li></ul>"
            }
            onChangeIdentite = !onChangeIdentite
        
        })
})



document.querySelector('.reveal-2').addEventListener("mouseleave", () => {
    console.log("test3")
    document.querySelector('.services__content__text').style.display = 'none';

    identite.innerHTML = oldtextIdentite
    onChangeIdentite = false
})







let onChangePrint = true
let print = document.querySelector(".print2")
let oldtextPrint = print.innerHTML

document.querySelector('.reveal-2').addEventListener("mouseover", () => {

    console.log("test1")
    document.querySelector('.reveal-2 > .services__content__text').style.display = 'flex';

    document.querySelector('.reveal-3').addEventListener("click", () => {
        if(onChangePrint){
            print.innerHTML = oldtextPrint
        }else{
            print.innerHTML ="<ul><li>CARTE DE VISITE</li><li>FLYERS</li> <li>PAPIER À LETTRE</li> <li>GOODIES</li> <li>BÂCHE PUBLICITAIRE</li></ul>"
        }
        onChangePrint = !onChangePrint

    })
})

document.querySelector('.reveal-3').addEventListener("mouseleave", () => {
    document.querySelector('.services__content__text').style.display = 'none';

    print.innerHTML = oldtextPrint
    onChangePrint = false
})




let onChangeDigital = true
let digital = document.querySelector(".digital2")
let oldtextDigital = digital.innerHTML

document.querySelector('.reveal-4').addEventListener("click", () => {   
    if(onChangeDigital){
        digital.innerHTML = oldtextDigital
    }else{
        digital.innerHTML ="<ul><li>LOGO</li><li>CHARTE GRAPHIQUE</li> <li>STRATÉGIE MARKETING</li> <li>STORY-TELLING</li></ul>" 
    }
    onChangeDigital = !onChangeDigital
})

document.querySelector('.reveal-4').addEventListener("mouseleave", () => {
    digital.innerHTML = oldtextDigital
    onChangeDigital = false
})


