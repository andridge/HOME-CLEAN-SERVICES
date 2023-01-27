(function (){
    "use strict";
window.addEventListener('load',()=>{
//load cleaner details for payment 
var cleaner = localStorage.getItem("onecleaner");
var Cleaner =JSON.parse(cleaner);
//console.log(Cleaner);
axios.get('/api_v1/get_cleaner/:?id='+Cleaner,{ 
})
  .then(response => {
    const data = JSON.stringify(response.data.data);
    const json = JSON.parse(data);
    const cleanerFirstname = document.getElementById("cleanerFirstname");
    const cleanerAddress = document.getElementById("cleanerAddress");
    const cleanerHourly = document.getElementById("cleanerHourly");
    const cleanerPhone = document.getElementById("cleanerPhone");
    const cleanerEmail = document.getElementById("cleanerEmail");
   //  console.log(json)
   cleanerFirstname.innerHTML = ``;
   cleanerAddress.innerHTML = ``;
   cleanerHourly.innerHTML = ``;
   cleanerPhone.innerHTML = ``;
   cleanerEmail.innerHTML = ``;
        cleanerFirstname.innerHTML += `<p>`+json.cleanerFirstname+`</p>`
        cleanerAddress.innerHTML += `<p>`+json.cleanerAddress+`</p>`
        cleanerHourly.innerHTML += `<p>`+json.cleanerHourly+`</p>`;
        cleanerPhone.innerHTML += `<p>`+json.cleanerPhone+`</p>`;
        cleanerEmail.innerHTML += `<p>`+json.cleanerEmail+`</p>`;
        //console.log(element.cleanerFirstname);
       
  //  localStorage.setItem('oneservice', data);
  //  nextpage();
  })
  .catch(error => {
    // handle the error
  });
});


})();