
var request = new XMLHttpRequest();
var urlData = ("GET","http://localhost:3000/api/bike/");
request.open("GET",urlData);
request.responseType = 'json';
request.send();

var ICON = L.icon({iconUrl: 'https://cdn4.iconfinder.com/data/icons/real-estate-line-1-1/256/Bikecycle_512x512-512.png',iconSize: [30, 30]});
request.onload = function () {
    var fileData = request.response;
    var nbStation = fileData.length;
    console.log(fileData)
    for(var i =0; i <nbStation; i++){ 
        var marker= L.marker([fileData[i].long,fileData[i].lat],{icon:ICON}).addTo(map)
        var template= `<h6>`+fileData[i].station +`</h6>
                        <span> Vélo disponible :  `+fileData[i].nb_dispo+`</span>
                        <br><span>Place libre : `+fileData[i].nb_place+ `</span><br><br>
                        <button type="button" id=btn_D_`+i+`  onclick="reserveVelo(`+i+`)" class="btn btn-primary sidebar-open-button" value="'"  style="font-size:1em">depart</button>
                        <button type="button" id=btn_`+i+`  onclick="reservePlace(`+i+`)" class="btn btn-warning sidebar-open-button"   style="font-size:1em">arriver</button>`
                        marker.bindPopup(template)    
        } 
    }

var map = L.map('map').setView([51.049673, 2.438114], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

