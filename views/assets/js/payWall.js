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
    //const cleanerId = document.getElementById("cleanerID");
    //  console.log(json)
   cleanerFirstname.innerHTML = ``;
   cleanerAddress.innerHTML = ``;
   cleanerHourly.innerHTML = ``;
   cleanerPhone.innerHTML = ``;
   cleanerEmail.innerHTML = ``;
   

        cleanerFirstname.innerHTML += `<p>`+json.cleanerFirstname+`</p>`
        cleanerAddress.innerHTML += `<p>`+json.cleanerAddress+`</p>`
        cleanerHourly.innerHTML += `<p>Ksh`+json.cleanerHourly+`</p>`;
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
function schedule(event){
  event.preventDefault();
  let thisForm = document.getElementById('php-email-form');
  let date = document.getElementById('date').value;
  let duration = document.getElementById('duration').value;
  let startTime = document.getElementById('startTime').value;
  let action ="/api_v1/add_schedule";
  if( ! action ) {
    displayError(thisForm, 'The form action property is not set!')
    return;
  }
  thisForm.querySelector('.loading').classList.add('d-block');
  thisForm.querySelector('.error-message').classList.remove('d-block');
  thisForm.querySelector('.sent-message').classList.remove('d-block');

  //let formData = new FormData( thisForm );
  php_email_form_submit(thisForm, action,duration,startTime,date);

}


function php_email_form_submit(thisForm, action,duration,startTime,date) {
 
  console.log(startTime,date,duration)
  //
  axios.post(action,{
    "startTime":startTime,
    "duration":duration,
    "date":date
  })  
  .then((response) => {
    thisForm.querySelector('.loading').classList.remove('d-block');
    console.log(JSON.stringify(response.data));
    thisForm.querySelector('.sent-message').classList.add('d-block');
    thisForm.reset(); 
  })
  .catch((error) => {
    displayError(thisForm, error);
  });

}

function displayError(thisForm, error) {
  thisForm.querySelector('.loading').classList.remove('d-block');
  thisForm.querySelector('.error-message').innerHTML = error;
  thisForm.querySelector('.error-message').classList.add('d-block');
}