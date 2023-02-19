(function (){
    "use strict";
window.addEventListener('load',()=>{
//GET USERS LOCATION & GENERAL LOCATION
/*if (navigator.geolocation) {
  console.log("Geolocation is supported!");
  navigator.geolocation.getCurrentPosition(function(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    const accuracy = position.coords.accuracy;
    const altitudeAccuracy = position.coords.altitudeAccuracy;
    const heading = position.coords.height;
    const speed = position.coords.speed;
    const timestamp = position.timestamp;
  console.log(latitude,longitude);
    // work with this information however you'd like!
   
  });
} else {
  console.log("Geolocation is not supported for this Browser/OS version yet.");
}*/

//load Map

var map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    L.marker(e.latlng, {
        elevation: 200.0,
    }).addTo(map)
        .bindPopup(`I Need Services Here`)
        .openPopup();
}

function onLocationError(e) {
    console.log(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

//load services as per the database
    var service= localStorage.getItem("oneservice");
    var Service =JSON.parse(service);
    console.log(Service);
    var div = `<div>${Service.serviceType}</div>`
    var div2 = `<div>${Service.serviceDetails}</div>`
    document.getElementById("serviceName").insertAdjacentHTML("beforeend",div);
    document.getElementById("serviceDetails").insertAdjacentHTML("beforeend",div2);

})


})()
function cleaners(){
    usersAddress=document.getElementById('userAddress').innerHTML;
    console.log(usersAddress);
    axios.get('/api_v1/get_cleaners/:?cleanerAddress='+usersAddress,{
    })
      .then(response => {
        const data = JSON.stringify(response.data.data);
       const json = JSON.parse(data);
       const portfolioGrid = document.getElementById("portfolio-grid3")
      //  console.log(json)
      portfolioGrid.innerHTML = ``;
        json.forEach(function(element) {
            portfolioGrid.innerHTML += ` <p id="`+element['id']+`"style=" box-shadow: 5px 5px #888888;" onclick="payWall(event)" class="item web col-sm-6 col-md-4 col-lg-4 mb-4">`+element['cleanerFirstname']+ `<br> Hourly Rate Ksh`+element['cleanerHourly']+`</p>`
            //console.log(element.cleanerFirstname);
          });
       //
     //  const latitude = json[0].latitude
    //  const longitude = json[0].longitude
    // const cleanerFirstname = json[0].cleanerFirstname
   // popUp(latitude,longitude,cleanerFirstname)
     //console.log(latitude,longitude,cleanerFirstname);
        //
        //
        for(var X of json){
           // console.log(X.latitude,X.longitude,X.cleanerFirstname);
        }
      })
      .catch(error => {
        // handle the error
      });

}   

function payWall(event){
  //

  if(event.target.id){
    var currentElementId = event.target.id;
    console.log(currentElementId);
    localStorage.setItem('onecleaner',currentElementId);
  }else{
    console.log("The clicked element does not have an id");
   }
  //

    console.log("oOOOOK");
    window.location.href = "/payWall"
}