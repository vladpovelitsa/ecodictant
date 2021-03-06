var sections = document.querySelectorAll('.section');
var offset = innerHeight * 0.9;
var trigger = document.querySelector("#trigger") || 0;
var header = document.querySelector('.header') || 0;
var body = document.querySelector('body') || 0;
function setAnimation() {
  // sections.forEach(function(item) {
  //   if (item.getBoundingClientRect().top < offset) {
  //     item.classList.add('animated')
  //     var timeout = setTimeout(function(){
  //       item.classList.add('animation_ends')
  //     },7000)
  //   }
  // })
  if(trigger && document.querySelector('.header')) {
    if (trigger.getBoundingClientRect().top < 0 ) {
      header.classList.add('header--scrolled')
    }
    else if(document.querySelector('.header')) {
      header.classList.remove('header--scrolled')
    }
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
  if (e.target.classList.contains('overlay') 
      || e.target.classList.contains('close') 
      || e.target.classList.contains('close_btn')
      || e.target.classList.contains('close_modal')) {
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
        header.classList.add('header--scrolled');
        if (nav.classList.contains('active') && trigger.getBoundingClientRect().top >= 0) {
          header.classList.remove('header--scrolled');
        } 
        elem.classList.toggle('active')
        nav.classList.toggle('active')
        body.classList.toggle('overlay')
    }

    if (document.querySelector('.search_toggler')) {
      if (elem.classList.contains('search_toggler')) {
        document.querySelector('.search_form').classList.toggle('active');
      }
      else {
        var notHide = false;
        event.path.forEach(function(item){
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
    currentTabs.querySelectorAll('.tab_content').forEach(function(item) {
      item.classList.remove('active');
    })
    currentTabs.querySelectorAll('.tab_toggler').forEach(function(item) {
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
  lazyLoad: 'ondemand',
  dots:true,
  adaptiveHeight: true,
  autoplay: false,
  autoplaySpeed: 4000,
})
$('.committee__slider').slick({
  lazyLoad: 'ondemand',
  dots:false,
  slidesToShow: 3,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1250,
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
  autoplay: false,
  autoplaySpeed: 4000,
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
  autoplay: true,
  autoplaySpeed: 4000,
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
  infinite: true,
  mobileFirst: true,
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [ {
    breakpoint: 1250,
    settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        
      }
    }
  ]
})
$('.partners__container--official .partners__wrap').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  mobileFirst: true,
  slidesToShow: 2,
  autoplay: false,
  autoplaySpeed: 4000,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        // variableWidth: true,
        slidesToShow: 4,

      }
    },
    {
      breakpoint: 1250,
      settings: {
        // variableWidth: true,
        slidesToShow: 6,

      }
      },
  ]
})
$('.partners__container--info .partners__wrap').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  mobileFirst: true,
  slidesToShow: 2,
  autoplay: false,
  autoplaySpeed: 4000,

  responsive: [ 
    {
      breakpoint: 767,
      settings: {
        // variableWidth: true,
        slidesToShow: 4,

      }
    },
    {
      breakpoint: 1250,
      settings: {
        // variableWidth: true,
        slidesToShow: 6,

      }
      },
  ]
})
$('.partners__container--general .partners__wrap').slick({
    infinite: true,
    mobileFirst: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [ {
      breakpoint: 1250,
      settings: 'unslick',
      },
      {
        breakpoint: 767,
        settings: {
          variableWidth: false,
        slidesToShow: 1,
          
        }
      }
    ]
  })
  $('.partners__container--participants .partners__wrap').slick({
    infinite: true,
    mobileFirst: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  
    responsive: [ {
      breakpoint: 1250,
      settings: 'unslick',
      },
      {
        breakpoint: 767,
        settings: {
          // variableWidth: true,
          slidesToShow: 4,
  
        }
      }
    ]
  })


  function countDown(startYear, startMouth, startDay, startHour){
  const startDate = new Date(startYear, startMouth, startDay, startHour);
  
  var tic = setInterval(function() {
    var currentDate = new Date;
    var daysLeft = (startDate - currentDate) / 8.64e+7;
    var hoursLeft = ((startDate - currentDate) / 8.64e+7 - Math.floor(daysLeft)) * 24;
    var minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    var secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;

    var daysValue = document.querySelector('#days');
    var hoursValue = document.querySelector('#hours');
    var minutesValue = document.querySelector('#minutes');
    var secondsValue = document.querySelector('#seconds');

    daysValue.innerText = Math.floor(daysLeft) <= 9 ? '0' + Math.floor(daysLeft) : Math.floor(daysLeft);
    hoursValue.innerText = Math.floor(hoursLeft) <= 9 ? '0' + Math.floor(hoursLeft) : Math.floor(hoursLeft)
    minutesValue.innerText = Math.floor(minutesLeft) <= 9 ? '0' + Math.floor(minutesLeft) : Math.floor(minutesLeft) 
    secondsValue.innerText = Math.floor(secondsLeft) <= 9 ? '0' + Math.floor(secondsLeft) : Math.floor(secondsLeft)

  },1000)

}
if(document.querySelector('.offer__countdown_container')){
  countDown(2020, 10, 18, 23);
}
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected  reg_field-input");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.setAttribute('data-value', selElmnt.options[j].value);

    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        s.setAttribute('value', this.getAttribute('data-value'))
        showHiddenSelect(this)
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            h.classList.add('active')
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
function showHiddenSelect(target) {
  if(document.querySelector('#category-select')) {
    if(target.closest('.custom-select').id == 'category-select') {
      if(target.getAttribute('data-value') == '3') {
        document.querySelector('.reg_field-organizations').classList.add('active')
      }
      else {
        document.querySelector('.reg_field-organizations').classList.remove('active')
      }
    }
  }
  

}
$('.media__slider').slick({
  lazyLoad: 'ondemand',
  dots:false,
  slidesToShow: 3,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1250,
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
function placesInfoToggler() {
  var e = event.target;
  if(e.classList.contains('places__info-toggler')) {
    e.classList.toggle('active')
    e.nextElementSibling.classList.toggle('active')
    if(e.classList.contains('active')){
      e.querySelector('.places__info-toggler-text').innerText = 'Свернуть подробное описание'
    }
    else {
      e.querySelector('.places__info-toggler-text').innerText = 'Развернуть подробное описание'

    }
  }
}
document.addEventListener('click', placesInfoToggler)
var clipPlay = false
function findVideos() {
  var videos = document.querySelectorAll('.clip_cover');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}
function setupVideo(video) {
  var link = video.querySelector('.video__link');
  var media = video.querySelector('.video__media');
  var button = video.querySelector('.video__button');
  var id = parseMediaURL(media);

  video.addEventListener('click', function() {
    var iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}
function parseMediaURL(media) {
  var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  var url = media.src;
  var match = url.match(regexp);

  return match[1];
}
function createIframe(id) {
  var iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}
function generateURL(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}
findVideos();
$('.lessons__slider').slick({
  dots:false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1250,
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
function filtersDropdown() {
  var el = event.target;

  if (el.classList.contains('map__sort_toggler')) {
    var parent = el.closest('.map__sort_wrap')
    if(parent.querySelector('.map__sort_dropdown--active')){
      parent.querySelector('.map__sort_dropdown--active').classList.remove('map__sort_dropdown--active')
    }
    else {
      document.querySelectorAll('.map__sort_dropdown').forEach(function(item){
        item.classList.remove('map__sort_dropdown--active')
      })
      parent.querySelector('.map__sort_dropdown').classList.add('map__sort_dropdown--active')
    }
  }
  else if(document.querySelector('.map__sort_dropdown')) {
    document.querySelectorAll('.map__sort_dropdown').forEach(function(item){
      item.classList.remove('map__sort_dropdown--active')
    })
  }
}
document.addEventListener('click', filtersDropdown)

function videoToggler() {
  var el = event.target
  if(el.classList.contains('video__toggler')){
    el.closest('.test__question').querySelector('.test__video').classList.add('active')
  }
  if (el.classList.contains('test__video') || el.classList.contains('test__video')) {
    el.closest('.test__question').querySelector('.test__video').classList.remove('active')
  }
}
document.addEventListener('click', videoToggler)

function resetChoise(){
  var el = event.target
  if(el.classList.contains('reset_choise')) {
    var inputs = el.parentNode.parentNode.querySelectorAll('input')
    for(var i = 0; i <= inputs.length - 1; i++) {
      inputs[i].checked = false
    }
  }
}

document.addEventListener('click', resetChoise)

function mapHightlighter() {
  var el = event.target;
  var fakeSelect = document.querySelector('.select-selected');
  var hiddenSelect = document.querySelector('#hiddenSelect');
  if(document.querySelector('.places__download')) {
    var downloads = document.querySelectorAll('.places__download')
  }
  if (el.getAttribute('class') == 'st1'){


    for(var i = 0; i <= document.querySelectorAll('.st1').length - 1; i++) {
      document.querySelectorAll('.st1')[i].setAttribute('class', 'st1')
    }

    el.setAttribute('class', 'st1 active');
    hiddenSelect.setAttribute('value', el.getAttribute('data-region'))
    fakeSelect.innerText = el.getAttribute('data-region')


    for(var i = 0; i <= downloads.length - 1; i++) {
      downloads[i].classList.add('hidden')

      if(downloads[i].getAttribute('data-region') == el.getAttribute('data-region')){
        downloads[i].classList.remove('hidden')
      }
    }
  }
  if (el.parentNode.getAttribute('class') == 'st1'){

    for(var i = 0; i <= document.querySelectorAll('.st1').length - 1; i++) {
      document.querySelectorAll('.st1')[i].setAttribute('class', 'st1')
    }

    el.parentNode.setAttribute('class', 'st1 active');
    hiddenSelect.setAttribute('value', el.parentNode.getAttribute('data-region'))
    fakeSelect.innerText = el.parentNode.getAttribute('data-region')


    for(var i = 0; i <= downloads.length - 1; i++) {
      downloads[i].classList.add('hidden')

      if(downloads[i].getAttribute('data-region') == el.parentNode.getAttribute('data-region')){
        downloads[i].classList.remove('hidden')
      }
    }

  }
  if(el.getAttribute('class') == 'same-as-selected'){

    for(var i = 0; i <= document.querySelectorAll('.st1').length - 1; i++) {
      document.querySelectorAll('.st1')[i].setAttribute('class', 'st1')
    }


    for(var i = 0; i <= document.querySelectorAll('.st1').length - 1; i++) {
      if(document.querySelectorAll('.st1')[i].getAttribute('data-region') == el.getAttribute('data-value')) {
        document.querySelectorAll('.st1')[i].setAttribute('class', 'st1 active')
      }
    }

    for(var i = 0; i <= downloads.length - 1; i++) {
      downloads[i].classList.add('hidden')

      if(downloads[i].getAttribute('data-region') == el.getAttribute('data-value')){
        downloads[i].classList.remove('hidden')
      }
    }
  }
}

document.addEventListener('click', mapHightlighter)


$('.promo__slider').slick({
  lazyLoad: 'ondemand',
  dots: false,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    },
  ]
})

// if(document.querySelector('.instructions__slider')) {
//   document.querySelectorAll('.instructions__slider').forEach(function(slider){
//     if(slider.children.length > 3){
//         $(slider).slick({
//           slidesToShow: 3,
//           responsive: [
//             {
//               breakpoint: 1250,
//               settings: {
//                 slidesToShow:2,
//               }
//             },
//           ]
//         })
//     }
//   })
// } 

  $('.instructions__slider-1').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
        }
      },
    ]
  })
  
  $('.instructions__slider-2').slick({
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 515,
        settings: 'unslick'
      },
    ]
  })
  
  
  $('.instructions__slider-3').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:1,
        }
      },
    ]
  })
  $('.instructions__slider-4').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:1,
        }
      },
    ]
  })
