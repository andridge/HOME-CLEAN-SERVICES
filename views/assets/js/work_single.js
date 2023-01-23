(function (){
    "use strict";
window.addEventListener('load',()=>{

    var service= localStorage.getItem("oneservice");
    var Service =JSON.parse(service);
    console.log(Service);
    var div = `<div>${Service.serviceType}</div>`
    var div2 = `<div>${Service.serviceDetails}</div>`
    document.getElementById("serviceName").insertAdjacentHTML("beforeend",div);
    document.getElementById("serviceDetails").insertAdjacentHTML("beforeend",div2);
})


})()