document.getElementById('abt').onclick = function(){
    window.scrollTo(0, document.getElementById('abot').offsetTop - 140)
}
document.getElementById('pds').onclick = function(){
    window.scrollTo(0, document.getElementById('pdcs').offsetTop - 140)
}
document.getElementById('ctt').onclick = function(){
    window.scrollTo(0, document.getElementById('cntc').offsetTop - 140)
}
var map = L.map('map', {attributionControl: false}).setView([26.078173, 119.305408], 18);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([26.078173, 119.305408]).addTo(map)
    .bindPopup('正大广场')
    .openPopup();
