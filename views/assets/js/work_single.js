(function (){
    "use strict";
window.addEventListener('load',()=>{
//

    var map = L.map('map').setView([-1.289677156299649, 36.81696336220971], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //add location data from users location
    
    L.marker([-1.289677156299649, 36.81696336220971],{
        elevation: 200.0,
    }).addTo(map)
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
            portfolioGrid.innerHTML += ` <p  style=" border-radius: 25px;box-shadow: 5px 5px #888888;" onclick="payWall(event)" class="item web col-sm-6 col-md-4 col-lg-4 mb-4">`+element['cleanerFirstname']+ `<br> Hourly Rate Ksh`+element['cleanerHourly']+`</p>`
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
    console.log("oOOOOK");
    window.location.href = "/payWall"
}