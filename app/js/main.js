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
  autoplay: true,
  autoplaySpeed: 4000,
})
$('.committee__slider').slick({
  dots:false,
  slidesToShow: 3,
  autoplay: true,
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
    infinite: false,
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
          variableWidth: true,
  
        }
      }
    ]
  })

  $('.partners__container--official .partners__wrap').slick({
    infinite: false,
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

initPawSelect('.paw-select')

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
        s.value = this.getAttribute('data-value')
        showHiddenSelect(this)
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
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
  if(target.closest('.custom-select').id == 'category-select') {
    if(target.getAttribute('data-value') == '3') {
      document.querySelector('.reg_field-organizations').classList.add('active')
    }
    else {
      document.querySelector('.reg_field-organizations').classList.remove('active')
    }
  }

}