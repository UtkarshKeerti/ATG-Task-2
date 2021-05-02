// var display = document.getElementsByClassName("dots-nav");
// var i;
// var a = 0;
// for (i = 0; i <= display.length; i++) {
//   display[i].addEventListener('click', function () {
//     a++;
//     if (a == 1) {
//       console.log("1");
//       $(".conatainer-7").removeClass("display-none");
//     }
//   });

// }

// $(".largest-div").scroll(function () {
//   if ($(this.scrollTop() > 200)) {
//     console.log("1");
//     display_fun2();
//   }
// })

var tl = gsap.timeline({
  defaults: {
    duration: 0.7
  }
});

// ScrollTrigger.defaults({
//   trigger: ".largest-div",
//   toggleActions: "restart reset restart reset"
// })

function display_fun1() {
  tl.from(".c1-lp-0", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-1", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "10 1000",
      ease: "power3.out"
    }, '-=1')
  gsap.from('.c6-rp img', {
    opacity: 0,
    duration: 1.3,
    y: 700
  });
  gsap.from('.bottom-img', {
    opacity: 0,
    duration: 1.3,
    y: 100
  });
  console.log("1");
  $(".container-6").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");

}

function display_fun2() {
  tl.from(".c1-lp-1", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-2", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "35% 1000",
      ease: "power3.out"
    }, '-=1')
  gsap.from('.c7-rp-img1', {
    opacity: 0,
    duration: 1.3,
    y: -200
  });
  gsap.from('.c7-rp-img2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  console.log("1");
  $(".container-7").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-7");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-6");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun3() {
  tl.from(".c1-lp-2", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-3", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "70% 1000",
      ease: "power3.out"
    }, '-=1')
  gsap.from('.nasa-fitness-app-img2', {
    opacity: 0,
    duration: 1.3,
    y: -200
  });
  gsap.from('.nasa-fitness-app-img1', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  console.log("1");
  $(".container-1").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-7");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-7").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun4() {
  tl.from(".c1-lp-3", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-4", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "100% 1000",
      ease: "power3.out"
    }, '-=1')
  gsap.from('.img-1', {
    opacity: 0,
    duration: 1.3,
    y: 200
  });
  gsap.from('.img-2', {
    opacity: 0,
    duration: 1,
    y: -500
  });
  gsap.from('.img-3', {
    opacity: 0,
    duration: 1.3,
    y: -100
  });
  gsap.from('.img-4', {
    opacity: 0,
    duration: 1.3,
    y: 100
  });
  gsap.from('.img-5', {
    opacity: 0,
    duration: 1.3,
    y: -100
  });
  console.log("1");
  $(".container-2").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun5() {
  tl.from(".c1-lp-4", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-5", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "130% 1000",
      ease: "power3.out"
    }, '-=1')
  gsap.from('.c3-rp-img-1', {
    opacity: 0,
    duration: 1.3,
    x: 200
  });
  gsap.from('.c3-rp-img-2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  gsap.from('.c3-rp-img-3', {
    opacity: 0,
    duration: 1.3,
    y: -300
  });
  gsap.from('.c3-rp-img-4', {
    opacity: 0,
    duration: 1.3,
    y: 300
  });
  gsap.from('.c3-rp-img-5', {
    opacity: 0,
    duration: 1.3,
    y: -300
  });
  console.log("1");
  $(".container-3").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun6() {
  tl.from(".c1-lp-5", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-6", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "165% 1000",
      ease: "power3.out"
    }, '-=1')
  gsap.from('.c4-rp-img', {
    opacity: 0,
    duration: 1.3,
    y: 700
  });
  console.log("1");
  $(".container-4").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun7() {
  tl.from(".c1-lp-6", {
    y: 50,
    stagger: .4,
    opacity: 0
  })
  tl.from(".nh-c2-7", {
      y: 50,
      stagger: .3,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "200% 1000",
      ease: "power4.out"
    }, '-=1')
  gsap.from('.bottom-img', {
    opacity: 0,
    duration: 1.3,
    y: 100
  });
  gsap.from('.c5-rp-img1', {
    opacity: 0,
    duration: 1.3,
    y: -200
  });
  gsap.from('.c5-rp-img2', {
    opacity: 0,
    duration: 1.3,
    y: 200
  });
  console.log("1");
  $(".container-5").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  // $(".landing").prevAll().addClass("display-none");
  // $(".landing").nextAll().addClass("display-none");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-6").addClass("display-none");
}

window.addEventListener('scroll', () => {
  var scrolled = window.pageYOffset;
  console.log(scrolled);
  // console.log(scrolled);
  if (scrolled === 0) {
    console.log("!");
    display_fun1();
  } else if (scrolled === 100) {
    console.log("!");
    display_fun2();
  } else if (scrolled === 200) {
    console.log("!");
    display_fun3();
  } else if (scrolled === 300) {
    console.log("!");
    display_fun4();
  } else if (scrolled === 400) {
    console.log("!");
    display_fun5();
  } else if (scrolled === 500) {
    console.log("!");
    display_fun6();
  } else if (scrolled === 600) {
    console.log("!");
    display_fun7();
  }
});

// ScrollTrigger.defaults({
//   trigger: ".largest-div",
//   toggleActions: "restart reset restart reset",
//   markers: true
// })

// var tl2 = gsap.timeline({
//   scrollTrigger: {
//     id: "slide-2",
//     start: "center 85%",
//     end: "center 70%"
//   }
// })

// tl2.call(display_fun2);

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 1,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
})