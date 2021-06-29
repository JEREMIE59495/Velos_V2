
var idLoc = localStorage.getItem('Départ');
//console.log(idLoc)
var idPlace = localStorage.getItem('Arrive');
//console.log(idPlace)

//Création d'un aside
let aside =document.createElement('aside');
aside.setAttribute('class', 'itineraire col-2');
aside.setAttribute('id', 'itineraire');
document.getElementById('bloc_reservation').appendChild(aside);

//Création du titre bloc
let title = document.createElement('p');
document.getElementById('itineraire').appendChild(title);
textTitle = document.createTextNode('Réservation');
document.querySelector('p').appendChild(textTitle);

//Création d'un div pour les input
let divInput =document.createElement('div');
divInput.setAttribute('class', 'divInput');
divInput.setAttribute('id', 'divInput');
document.getElementById('itineraire').appendChild(divInput);
/////////////////// Depart///////////////////////////
//window.addEventListener('click',reserveVelo =>{
   // console.log(JSON.parse(localStorage.getItem('idLoc')))
  //  console.log(reserveVelo)
//})
//let toto = document.getElementById('btn_D'`+i+`)
//toto.addEventListener('click',reserveVelo)
//function reserveVelo(){
fetch('http://localhost:3000/api/bike/'+ idLoc)
.then(response => response.json())
.then(data => { 
console.log(data)
    //Création d'un label
    let labelDepart = document.createElement('label');
    labelDepart.setAttribute('id', 'labelDepart');
    document.getElementById('divInput').appendChild(labelDepart);
    let textLabel = document.createTextNode ('Départ');
    document.getElementById('labelDepart').appendChild(textLabel);

    //Création d'un input
    let placeholderDepart ='Reservez votre vélo';
    let inputDepart = document.createElement('input');
    if(idLoc!= null){
        inputDepart.setAttribute('value', data.station +','+ data.adresse)
    }
    inputDepart.setAttribute('placeholder',placeholderDepart)  
    document.getElementById('divInput').appendChild(inputDepart)
})
//}
///////////////ARRIVER //////////////////////////////

fetch('http://localhost:3000/api/bike/'+ idPlace)
.then(response => response.json())
.then(data => {
//console.log(idPlace)
    let labelArrive = document.createElement('label');
    labelArrive.setAttribute('id', 'labelArrive');
    document.getElementById('divInput').appendChild(labelArrive);
    let textLabelArrive = document.createTextNode ('Destination');
    document.getElementById('labelArrive').appendChild(textLabelArrive);

    //Création d'un input
    var placeholderArriver= 'Reservez votre place';
    let inputArrive = document.createElement('input');
    if(idPlace!= null){
        inputArrive.setAttribute('value', data.station +','+ data.adresse)
    }else{
    inputArrive.setAttribute('placeholder',placeholderArriver)  
    }
    document.getElementById('divInput').appendChild(inputArrive)
    })

    //Création du bouton de validation
    let divValidate =document.createElement('div');
    divValidate.setAttribute('class', 'validation');
    divValidate.setAttribute('id', 'validation');
    document.getElementById('itineraire').appendChild(divValidate);

    let btn =document.createElement('button');
    btn.setAttribute('id','btnValider');
    btn.setAttribute('onclick','startReserved()')
    document.getElementById('validation').appendChild(btn);
    let textBtn = document.createTextNode('Valider');
    document.getElementById('btnValider').appendChild(textBtn);