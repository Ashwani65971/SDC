// js code for swiper
function mainSwiper()
{
  var swiper = new Swiper(".main-swiper", {
    spaceBetween: 30,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if(mainSwiper())
{
  mainSwiper();
}

// js code for partners swiper
function partnerSwiper()
{
  var swiper = new Swiper(".partners-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop:true,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:
    {
      1500:
      {
        slidesPerView:4,
      },
      820:
      {
        slidesPerView:4,
      },
      450:
      {
        slidesPerView:2,
      },
      350:
      {
        slidesPerView:1,
      }
    }
  });
}

if(partnerSwiper())
{
  partnerSwiper();
}

// js code for testimonials swiper
function TestimonialsSwiper()
{
  var swiper = new Swiper(".Testimonials-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop:true,
    freeMode: true,
      autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:
    {
      1400:
      {
        slidesPerView:3,
      },
      820:
      {
        slidesPerView:2,
      },
      750:
      {
        slidesPerView:1,
      },
      300:
      {
        slidesPerView:1,
      }
    }
  });
}

if(TestimonialsSwiper())
{
  TestimonialsSwiper();
}


// js code for all products swiper
function allProductsSwiper()
{
  var swiper = new Swiper(".our-products-section-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
      autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:
    {
     1850:
      {
        slidesPerView:5,
      },
      1520:
      {
        slidesPerView:4,
      },
      1150:
      {
        slidesPerView:3,
      },
      800:
      {
        slidesPerView:2,
      },
      300:
      {
        slidesPerView:1,
      }
    }
  });
}

if(allProductsSwiper())
{
  allProductsSwiper();
}




// js code for product preview page swiper
function productpreviewSwiper()
{
  var swiper = new Swiper(".small-image-swiper", {
    slidesPerView: 4,
    spaceBetween: 0,
      autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if(productpreviewSwiper())
{
  productpreviewSwiper();
}


// js code for all products swiper
function productSuggestionSwiper()
{
  var swiper = new Swiper(".our-products-section-swiper-suggetion", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
      autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:
    {
     1850:
      {
        slidesPerView:5,
      },
      1520:
      {
        slidesPerView:4,
      },
      1150:
      {
        slidesPerView:3,
      },
      800:
      {
        slidesPerView:2,
      },
      300:
      {
        slidesPerView:1,
      }
    }
  });
}

if(productSuggestionSwiper())
{
  productSuggestionSwiper();
}

// js code for toggle menu
let menuToggle = document.querySelector('.menuToggle');
let menuUL = document.querySelector('header ul');
if(menuToggle && menuUL)
{
  menuToggle.addEventListener('click',()=>{
    menuUL.classList.toggle('active');
    menuToggle.classList.toggle('active');
  })
}

// js code for active the product preview gallery
let smallImgesBoxes = document.querySelectorAll('.small-image-slides img');
let previewImage = document.querySelector('.preview_IMG');

if(smallImgesBoxes && previewImage)
{
  smallImgesBoxes.forEach((targetImages)=>{

    targetImages.addEventListener('click',()=>{

      smallImgesBoxes.forEach((removeImage)=>{
        removeImage.classList.remove('active');
      })
        targetImages.classList.add('active');
        previewImage.src = targetImages.getAttribute('src');
    })
    
  })
}