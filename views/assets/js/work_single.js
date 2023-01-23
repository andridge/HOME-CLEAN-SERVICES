(function (){
    "use strict";
window.addEventListener('load',()=>{
//

    var map = L.map('map').setView([-1.289677156299649, 36.81696336220971], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([-1.289677156299649, 36.81696336220971]).addTo(map)
        .bindPopup(`I Need Services Here`)
        .openPopup();


//
    var service= localStorage.getItem("oneservice");
    var Service =JSON.parse(service);
    console.log(Service);
    var div = `<div>${Service.serviceType}</div>`
    var div2 = `<div>${Service.serviceDetails}</div>`
    document.getElementById("serviceName").insertAdjacentHTML("beforeend",div);
    document.getElementById("serviceDetails").insertAdjacentHTML("beforeend",div2);

})


})()