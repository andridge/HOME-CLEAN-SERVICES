(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

   axios.get('/api_v1/get_all_services',{
   })
     .then(response => {
       // handle the response
      const data = JSON.stringify(response.data.data);
      const json = JSON.parse(data);
      console.log(data);
      const portfolioGrid = document.getElementById("portfolio-grid2")
      portfolioGrid.innerHTML = "";
      for (var i = 0; i < json.length; i++) {
      portfolioGrid.innerHTML += `<div  class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <a onclick="service(event)" id="`+json[i]['id']+`" class="item-wrap fancybox">
      <div class="work-info">
      <h3>`+json[i]['serviceType']+`</h3>
      </div>
      <img class="img-fluid" src="./assets/img/img_`+json[i]['id']+`.jpg">
    </a>
  </div>`
}

    
     })
     .catch(error => {
       // handle the error
     });
    //
   
    //
  });
 
})()
function service(event){
  if(event.target.id){
    var currentElementId = event.target.id;
    console.log(currentElementId);
    axios.get('/api_v1/get_service/:?id='+currentElementId,{
    })
      .then(response => {
        const data = JSON.stringify(response.data.data);
        console.log(data);
        localStorage.setItem('oneservice', data);
        nextpage();
      })
      .catch(error => {
        // handle the error
      });
}
else{
    console.log("The clicked element does not have an id");
}
}
 function nextpage(){
       window.location.href = "/work-single";
     }
