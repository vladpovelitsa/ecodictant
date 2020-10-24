var sections = document.querySelectorAll('.section');
var offset = innerHeight * 0.9;
var trigger = document.querySelector("#trigger") || 0;
var header = document.querySelector('.header') || 0;
var body = document.querySelector('body') || 0;
function setAnimation() {
  sections.forEach(function(item) {
    if (item.getBoundingClientRect().top < offset) {
      item.classList.add('animated')
      var timeout = setTimeout(function(){
        item.classList.add('animation_ends')
      },7000)
    }
  })

  if (trigger.getBoundingClientRect().top < 0 && document.querySelector('.header')) {
    header.classList.add('header--scrolled')
  }
  else if(document.querySelector('.header')) {
    header.classList.remove('header--scrolled')
  }
}

document.addEventListener('scroll', setAnimation)
setAnimation()

function modalControls(e){
  var body = document.querySelector('body');
  if (e.target.classList.contains('modal_btn')) {
    event.preventDefault()
    var modal = document.getElementById(e.target.getAttribute('data-target'));
    modal.classList.add('active');
    body.classList.add('overlay');
  }
  if (e.target.classList.contains('overlay') || e.target.classList.contains('close')) {
    var modal = document.querySelector('.modal.active');
    modal.classList.remove('active');
    body.classList.remove('overlay');
  }
}

document.addEventListener('click', modalControls)

function navControls() {
    var elem = event.target
    var nav = document.querySelector('nav')
    if (elem.classList.contains('show_menu')) {
        elem.classList.toggle('active')
        nav.classList.toggle('active')
        header.classList.add('header--scrolled');
        body.classList.toggle('overlay')
    }

    if (document.querySelector('.search_toggler')) {
      if (elem.classList.contains('search_toggler')) {
        document.querySelector('.search_form').classList.toggle('active');
      }
      else {
        var notHide = false;
        event.path.forEach((item)=>{
            if(item == document.querySelector('.search_form')) {
              notHide = true
              return notHide
            }
        })
        if (notHide) {
          return
        }
        else {
          document.querySelector('.search_form').classList.remove('active');

        }
      }
    }
}
document.addEventListener('click', navControls)


function tabs(e){
  e = event.target
  var currentTabs = e.parentNode.parentNode
  if (e.classList.contains('tab_toggler')) {
    currentTabs.querySelectorAll('.tab_content').forEach((item) => {
      item.classList.remove('active');
    })
    currentTabs.querySelectorAll('.tab_toggler').forEach((item) => {
      item.classList.remove('active');
    })
    e.classList.add('active')
    currentTabs.querySelector(e.getAttribute('data-target')).classList.add('active')
  }
}

document.addEventListener('click', tabs);

$(function($){
  $('[type="tel"]').mask("+7 (999) 999-99-99");
})

$('.faces__slider').slick({
  dots:true,
  adaptiveHeight: true,
})
$('.committee__slider').slick({
  dots:false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow:2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})
$('.support__slider').slick({
  dots:false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        slidesToShow: 2
      }
    }
  ]
})
$('.organizations__slider').slick({
  dots:false,
  variableWidth: true,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 2
        }
      }
    ]
  })
$('.partners__container--organizators .partners__wrap').slick({
  infinite: false,
  mobileFirst: true,
  slidesToShow: 2,

  responsive: [ {
    breakpoint: 1200,
    settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,

      }
    }
  ]
})
$('.partners__container--general .partners__wrap').slick({
  infinite: false,
  mobileFirst: true,
  slidesToShow: 1,

  responsive: [ {
    breakpoint: 1200,
    settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,

      }
    }
  ]
})
$('.partners__container--official .partners__wrap').slick({
  infinite: false,
  mobileFirst: true,
  slidesToShow: 2,

  responsive: [ {
    breakpoint: 1200,
    settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,

      }
    }
  ]
})


function countDown(startYear, startMouth, startDay){
  const startDate = new Date(startYear, startMouth, startDay);
  
  let tic = setInterval(() => {
    let currentDate = new Date;
    let daysLeft = (startDate - currentDate) / 8.64e+7;
    let hoursLeft = ((startDate - currentDate) / 8.64e+7 - Math.floor(daysLeft)) * 24;
    let minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    let secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;

    let daysValue = document.querySelector('#days');
    let hoursValue = document.querySelector('#hours');
    let minutesValue = document.querySelector('#minutes');
    let secondsValue = document.querySelector('#seconds');

    daysValue.innerText = Math.floor(daysLeft) <= 9 ? '0' + Math.floor(daysLeft) : Math.floor(daysLeft);
    hoursValue.innerText = Math.floor(hoursLeft) <= 9 ? '0' + Math.floor(hoursLeft) : Math.floor(hoursLeft)
    minutesValue.innerText = Math.floor(minutesLeft) <= 9 ? '0' + Math.floor(minutesLeft) : Math.floor(minutesLeft) 
    secondsValue.innerText = Math.floor(secondsLeft) <= 9 ? '0' + Math.floor(secondsLeft) : Math.floor(secondsLeft)

  },1000)

}

// start 15 nov 2020
if(document.querySelector('.offer__countdown_container')){
  countDown(2020, 10, 15);
}




