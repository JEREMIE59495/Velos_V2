let popElt = document.createElement('div');
popElt.setAttribute('class','popup');
popElt.setAttribute('id','popup');
document.getElementById('popp').appendChild(popElt);

//DIV TITRE
let titlePopup =document.createElement('h2');
titlePopup.setAttribute('id','titlePopup');
document.getElementById('popup').appendChild(titlePopup);
let textTitle=document.createTextNode('CONNEXION');
document.getElementById('titlePopup').appendChild(textTitle)

//let formConnexion=document.createElement('form')
//formConnexion.setAttribute('id','formConnexion')
//document.getElementById('popup').appendChild(formConnexion)
//DIV EMAIL
let divEmail = document.createElement('div');
divEmail.setAttribute('class','divEmail');
divEmail.setAttribute('id','divEmail');
document.getElementById('popup').appendChild(divEmail);

let labelEmail = document.createElement('label');
labelEmail.setAttribute('id', 'labelEmail');
document.getElementById('divEmail').appendChild(labelEmail);
let textlabelEmail = document.createTextNode ('email :');
document.getElementById('labelEmail').appendChild(textlabelEmail);

let inputEmail = document.createElement('input');
inputEmail.setAttribute('id','inputEmail');
document.getElementById('divEmail').appendChild(inputEmail);

//DIV PASSWORD
let divPass = document.createElement('div');
divPass.setAttribute('class','divPass');
divPass.setAttribute('id','divPass');
document.getElementById('popup').appendChild(divPass);

let labelPass = document.createElement('label');
labelPass.setAttribute('id', 'labelPass');
document.getElementById('divPass').appendChild(labelPass);
let textlabelPass = document.createTextNode ('password :');
document.getElementById('labelPass').appendChild(textlabelPass);

let inputPass = document.createElement('input');
inputPass.setAttribute('id','inputPass');
document.getElementById('divPass').appendChild(inputPass);

let btnConnect = document.createElement('button');
btnConnect.setAttribute('id','btn_connexion');
btnConnect.setAttribute('onclick','connect()')
document.getElementById('popup').appendChild(btnConnect);
textBtn= document.createTextNode('Connexion');
document.getElementById('btn_connexion').appendChild(textBtn)


