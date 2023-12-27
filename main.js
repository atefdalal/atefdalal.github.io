var imageHamburger = document.getElementById("imageHamburger");
imageHamburger.addEventListener('click', afficherMenu);

function afficherMenu() {
    var nav = document.getElementById("nav");
    nav.style.display = 'block';
} 

var Croix = document.getElementById("Croix");
Croix.addEventListener('click', fermerMenu);

function fermerMenu() {
    var nav = document.getElementById("nav");
    nav.style.display = 'none';
} 

/* REQUETTE METEO */
var MeteoButton = document.getElementById("Meteo"); // Utilise un ID unique, par exemple "MeteoButton"
MeteoButton.addEventListener('click', ajax);

function ajax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var reponse = this.responseText;
            console.log(reponse);
            var json = JSON.parse(reponse);
            console.log(json.main.temp);
            
            var temperature = Math.round(json.main.temp);       // Arrondi la température à l'entier le plus proche
            var temperatureElement = document.getElementById("temperatureText");
            temperatureElement.innerHTML = "La température actuelle à Nogent-sur-Marne est de : <span id='tempColor'>" + temperature + "°C</span>";

        }
    };
    
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Nogent-sur-Marne,France&units=metric&lang=fr&appid=aa1fc2e1258614a22dd982f19934d614");
    xhttp.send();
}

/*METEO*/
var MeteoButton = document.getElementById("Meteo");
MeteoButton.addEventListener('click', afficherPageMeteo);

function afficherPageMeteo() {
    var nav = document.getElementById("nav");
    var pageMeteo = document.getElementById("pageMeteo");

    // Masquer le premier hamburger et afficher la page
    nav.style.display = 'none';
    pageMeteo.style.display = 'block';
}

var retourArriere = document.getElementById("retourArriere");
retourArriere.addEventListener('click', fermerDeuxiemeMenu);

function fermerDeuxiemeMenu() {
    var nav = document.getElementById("nav");
    var pageMeteo = document.getElementById("pageMeteo");

    pageMeteo.style.display = 'none';
    nav.style.display = 'block';
}

/*---------------------------------------------------------*/

/*Prises*/
var PrisesButton = document.getElementById("Prises");
PrisesButton.addEventListener('click', afficherPagePrises);

function afficherPagePrises() {
    var pagePrises = document.getElementById("pagePrises");
    var nav = document.getElementById("nav");

    nav.style.display = 'none';
    pagePrises.style.display = 'block';
}

var retourArriere2 = document.getElementById("retourArriere2");
retourArriere2.addEventListener('click', fermerPagePrises);

function fermerPagePrises() {
    var nav = document.getElementById("nav");
    var pagePrises = document.getElementById("pagePrises");

    pagePrises.style.display = 'none';
    nav.style.display = 'block';    
}

/*-----------------------------------------------------------*/
/*CAPTEURS*/
var CaptreursButton = document.getElementById("Capteurs");
CaptreursButton.addEventListener('click', afficherPageCapteurs);

function afficherPageCapteurs() {
    var pageCapterus = document.getElementById("pageCapteurs");
    var nav = document.getElementById("nav");

    nav.style.display = 'none';
    pageCapterus.style.display = 'block';
}

var retourArriere3 = document.getElementById("retourArriere3");
retourArriere3.addEventListener('click', fermerPageCapteurs);

function fermerPageCapteurs() {
    var nav = document.getElementById("nav");
    var pageCapteurs = document.getElementById("pageCapteurs");

    pageCapteurs.style.display = 'none';    
    nav.style.display = 'block';       /*Pour que quand j'appuie sur l'icon Retour Arrière, sa m'affiche la nav Burger*/ 
}

/*-----------------------------------------------------------*/
/*LUMIERES*/
var LumieresButton = document.getElementById("Lumières");
LumieresButton.addEventListener('click', afficherPageLumieres);

function afficherPageLumieres() {
    var pageCapterus = document.getElementById("pageLumières");
    var nav = document.getElementById("nav");

    nav.style.display = 'none';    
    pageCapterus.style.display = 'block';
}

var retourArriere4 = document.getElementById("retourArriere4");
retourArriere4.addEventListener('click', fermerpageLumières);

function fermerpageLumières() {
    var nav = document.getElementById("nav");
    var pageLumières = document.getElementById("pageLumières");

    pageLumières.style.display = 'none';
    nav.style.display = 'block';    /*Pour que quand j'appuie sur l'icon Retour Arrière, sa m'affiche la nav Burger*/
}


/*CONTROLER les LUMIERES*/
var pageLumieres = document.getElementById('pageLumieres');
var lumiere = '';

const xhttp = new XMLHttpRequest(); /*Creer objet */
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        for (var num in objetLumiere) {
            var uniqueid = objetLumiere[num].uniqueid;
            var etat = objetLumiere[num].state.on;
            var type = objetLumiere[num].type;

            lumiere += '<div id="' + uniqueid + '" >';
            lumiere += '</div>';
        }

    }
};

xhttp.open('GET', 'url', true);
xhttp.send();

function AllumerLumiere(num) {

}

function EteindreLumiere(num) {
    
}


/*-----------------------------------------------------------*/
/*Pour que le Navigation renvoie au Humurger*/
var lienNavigation = document.getElementById("lienNavigation");
lienNavigation.addEventListener('click', afficherMenu);

function afficherMenu() {
    var nav = document.getElementById("nav");
    nav.style.display = 'block';
}


