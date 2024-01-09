
const section = document.querySelector('.works-cont')
// const tl = gsap.timeline({
//     scrollTrigger: {
//          trigger: section,
//          start: 'top top',
//          end: `bottom top`,
//          scrub: true,
//      }
//    });
// tl.to(document.body, {backgroundColor: "#00FF29",opacity: 1,duration: .95, stagger:.1})
//     .to(document.body, {backgroundColor: "0029FF" ,opacity: 1,duration: .95, stagger:.1})
//     .to(document.body, {backgroundColor: "#DB00FF",opacity: 1,duration: .95, stagger:.1})
//     .to(document.body, {backgroundColor: "FF00B8" ,opacity: 1,duration: .95, stagger:.1})
//     .to(document.body, {backgroundColor: "#DBFF00",opacity: 1,duration: .95, stagger:.1})
//     .to(document.body, {backgroundColor: "FFD9FD" ,opacity: 1,duration: .95, stagger:.1})
    // tl.to(document.body, {backgroundColor: "#FFE3F7",color: "#000",opacity: 1,duration: .95, stagger:.1})
    // .to(document.body, {backgroundColor: "#000AFF",color: "#fff",opacity: 1,duration: .95, stagger:.1})
    gsap.matchMedia({
        "(max-width: 800px)" : () => {
            const tl = gsap.timeline({
                    scrollTrigger: {
                         trigger: section,
                         start: 'top top',
                         end: `bottom top`,
                         scrub: true,
                     }
                   });
                tl.to(document.body, {color: "#00FF29",opacity: 1,duration: .95, stagger:.1})
                    .to(document.body, {color: "#0029FF" ,opacity: 1,duration: .95, stagger:.1})
                    .to(document.body, {color: "#DB00FF",opacity: 1,duration: .95, stagger:.1})
                    .to(document.body, {color: "#FF00B8" ,opacity: 1,duration: .95, stagger:.1})
                    .to(document.body, {color: "#DBFF00",opacity: 1,duration: .95, stagger:.1})
                    .to(document.body, {color: "#FFD9FD" ,opacity: 1,duration: .95, stagger:.1})
        }
    })

document.querySelectorAll('.works-section .work').forEach((el => {
    el.addEventListener('mouseover', (e) => {
        document.body.style.color = e.target.closest('.work').dataset.color
    })
}))

// new Swiper('.collabs .swiper-container', {
//     slidesPerView: 'auto',
//     navigation: {
//         prevEl: '.collabs .swiper-prev',
//         nextEl: '.collabs .swiper-next'
//     },
//     on: {
//         init: function() {
//             console.log(this.activeIndex);
//         },
//         slidePrevTransitionStart : function() {
//             this.slides[this.activeIndex+1].classList.remove('focused-1');
//             this.slides[this.activeIndex+2].classList.remove('focused-2');
//             this.slides[this.activeIndex+3].classList.remove('focused-3');
//             this.slides[this.activeIndex+4].classList.remove('focused-4');
//             this.slides[this.activeIndex+5].classList.remove('focused-5');
//         },
//         slideNextTransitionStart : function() {
//             this.slides[this.activeIndex-1].classList.remove('focused-1');
//             this.slides[this.activeIndex].classList.remove('focused-2');
//             this.slides[this.activeIndex+1].classList.remove('focused-3');
//             this.slides[this.activeIndex+2].classList.remove('focused-4');
//             this.slides[this.activeIndex+3].classList.remove('focused-5');
//         },
//         slideChangeTransitionStart : function() {
//             this.slides[this.activeIndex].classList.add('focused-1');
//             this.slides[this.activeIndex+1].classList.add('focused-2');
//             this.slides[this.activeIndex+2].classList.add('focused-3');
//             this.slides[this.activeIndex+3].classList.add('focused-4');
//             this.slides[this.activeIndex+4].classList.add('focused-5');
//         }
//     }
// });


// // in-other-news에서 스크롤시 배경색바뀌는 코드
// const bgColor = document.querySelector('.bg-color');

// document.addEventListener('scroll', function() {

//     const st = $(document).scrollTop();
//     const wh = $(document).height();


//     var scrollPos = (st*10)/wh;
//     console.log(scrollPos)
//     if(scrollPos >= 3)
//         {
//             scrollPos = 3;
//             bgColor.style.background ='#0000ff';
//             document.querySelector('header .inner').style.color='#fff'
//         }
//     else if(scrollPos <=3)
//         {
//             bgColor.style.background ='#000';
//             document.querySelector('header .inner').style.color='#fff'
//         }
// });

// // RANDOM POSITION DIVS
// const emojis = document.querySelectorAll('.emoji');
// emojis.forEach(function(emoji) {
//     rLeft = Math.floor(Math.random() * 90);
//     rTop = Math.floor(Math.random() * 100);
//     emoji.style.left = rLeft+'vw';
//     emoji.style.top = rTop+'vh';


// });

// //순차적애니메이션 만들기위해 show 클래스 붙여주기
// const spyEls = document.querySelectorAll('.scroll-spy');
// spyEls.forEach(function(spyEl){
//     new ScrollMagic
//         .Scene({
//             triggerElement: spyEl,
//             triggerHook: .8
//         })
//         .setClassToggle(spyEl, 'show')
//         .addTo(new ScrollMagic.Controller());
// });
// //(scroll-spy 클래스가 있는요소가 뷰포트의 .8이상 내려갈 시 show라는 클래스  부착


// // HAMBURGERMENU

// const openMenu = () => {
//     const menu = document.querySelector('.menu');
//     menu.style.display = 'block';
//     setTimeout(function() { menu.classList.add("show"); }, 0);

    
// }
// const closeMenu = () => {
//     const menu = document.querySelector('.menu');
//     menu.style.display = 'none';
//     menu.classList.remove("show");
// }

// // MOUSE CURSOR EFFECT
// let mouseCursor = document.querySelector(".cursor");
//   //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
//   //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
// const cursor = (e) => {
//     mouseCursor.style.left = e.pageX + "px";
//     mouseCursor.style.top = e.pageY + "px";
// }
// window.addEventListener("mousemove", cursor);


// document.querySelector(".main-video").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("cursor-grow--arrow");
// });
// document.querySelector(".main-video").addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("cursor-grow--arrow");
// });

// document.querySelector(".swiper-prev").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("cursor-grow--left-arrow");
// });
// document.querySelector(".swiper-prev").addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("cursor-grow--left-arrow");
// });

// document.querySelector(".swiper-next").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("cursor-grow--right-arrow");
// });
// document.querySelector(".swiper-next").addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("cursor-grow--right-arrow");
// });
// document.querySelector(".main-section").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("blue");
// });
// document.querySelector(".main-section").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("blue");
// });
// const imgs = document.querySelectorAll('.__img-cont .__img')
//     imgs.forEach((img) => {
//         img.addEventListener('mouseover', (e) => {
//             mouseCursor.classList.add("cursor-grow--show");
//         })
//         img.addEventListener('mouseout', (e) => {
//             mouseCursor.classList.remove("cursor-grow--show");
//         })
//     }) 


// // FOOTER SWIPER
// new Swiper('.footer-content .swiper-container', {
//     direction: 'vertical',
//     autoplay: true,
//     loop: true
// });

// // 한 섹션씩 넘어가는 js
// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// },{passive : false});

// var mHtml = $("html");
// var page = 1;


// mHtml.animate({scrollTop : 0},10);

// $(window).on("wheel", function(e) {
//     if(mHtml.is(":animated")) return;
//     if(e.originalEvent.deltaY > 5) {
//         console.log(e.originalEvent.deltaY);
//         if(page == 12) return;
//         page++;
//     } else if(e.originalEvent.deltaY < -5) {
//         if(page == 1) return;
//         page--;
//     }
//     var posTop =(page-1) * $(window).height();
//     mHtml.animate({scrollTop : posTop});
// })



// VIDEO LOADING 
const video = document.querySelector('.load-video')

video.addEventListener('canplay', () => {
  console.log('ready')
  showPage();

})

function showPage() {
  document.querySelector(".video-loader").style.display = "none";
}


// function imgHover() {
//     const imgs = document.querySelectorAll('.__img-cont .__img')
//     imgs.forEach((img) => {
//         img.addEventListener('mouseover', (e) => {
//             e.target.closest('.__img').classList.add('show')
//         })
//         img.addEventListener('mouseout', (e) => {
//             e.target.closest('.__img').classList.remove('show')
//         })
//     }) 
// }
// imgHover() 

// accordion()

// function accordion() {
//     const list = document.querySelectorAll('.works-section .__ul > .__li')
//     if(list.length == 0) return
//     list.forEach((el) => {
//         if(el.getAttribute('has-event') != null) return
//         el.setAttribute('has-event','')
//             const __contentHeight = el.querySelector('.__hidden-cont')
//             el.addEventListener('click', (e) => {
//                 if(el.classList.contains('active')){
//                     gsap.fromTo(__contentHeight,{
//                         height:__contentHeight.clientHeight,
//                         paddingTop:0,
//                         paddingBottom:0,
//                         opacity:0,
//                         duration:.35,
//                     },{
//                         height:0,
//                         paddingTop:0,
//                         paddingBottom:0,
//                         opacity:0,
//                         duration:.35,
//                         onComplete: () => {
//                             el.classList.remove('active')
//                             el.querySelector('.__hidden-cont').style.height = 'fit-content'
//                         }
//                     })

//                     gsap.killTweensOf(el)
//                     return
//                 }
                
//                 el.classList.add('active')
//                 gsap.fromTo(__contentHeight,{
//                     height:0,
//                     opacity:0,
//                     duration:.35,
//                 },{
//                     height:__contentHeight.scrollHeight,
//                     opacity:1,
//                     duration:.35,
//                 })
//             })
//         })
//     }