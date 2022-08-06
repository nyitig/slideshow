// img height change
const enlargementImg=document.getElementById('enlargementImg')
const reductionImg=document.getElementById('reductionImg')
const centerImg=document.getElementById('centerImg')
const fullscreenImgTag=document.getElementById('fullscreenImg')
// img height incrase
let imgHeight=centerImg.offsetHeight
let picSizeCount=0
enlargementImg.addEventListener("click", () => {
  if (picSizeCount<10) {
    imgHeight+=100
    picSizeCount++
    centerImg.style.height=imgHeight+"px"
  }
  if (reductionImg.classList.contains('visibilityNone')==true) {
    reductionImg.classList.toggle('visibilityNone')
  }
  if (picSizeCount==9) {
    enlargementImg.classList.add('visibilityNone')
  }
})
// img height decrase
reductionImg.addEventListener("click",()=> {
  if (picSizeCount>0) {
    imgHeight-=100
    picSizeCount--
    centerImg.style.height=imgHeight+"px"
  }
  if (picSizeCount==0) {
    reductionImg.classList.add('visibilityNone')
  }
  if (enlargementImg.classList.contains('visibilityNone')==true) {
    enlargementImg.classList.toggle('visibilityNone')
  }
})
// slidebar creat
const slideBarCont=document.getElementById('slideBarCont')
let counter=0
const imgObject = [
  {
    src:"assets/pic/001.jpg",
    alt:"első kép"
  },
  {
    src:"assets/pic/002.jpg",
    alt:"második kép"
  },
  {
    src:"assets/pic/003.jpg",
    alt:"harmadik kép"
  },
  {
    src:"assets/pic/004.jpg",
    alt:"negyedik kép"
  }, 
  {
    src:"assets/pic/005.jpg",
    alt:"ötödik kép"
  },
  {
    src:"assets/pic/006.jpg",
    alt:"hetodik kép"
  },
  {
    src:"assets/pic/007.jpg",
    alt:"hetedik kép"
  },
]
let slideBarImgTemplat=``
createSlideBar()
function createSlideBar() {
   imgObject.map(data => {
    slideBarImgTemplat+=`<img class="slideBarImg borderImgRight" src="${data.src}" alt="${data.alt}">`
  })
slideBarCont.innerHTML=slideBarImgTemplat
}
const slideBarImg=document.querySelectorAll(".slideBarImg")
slideBarImg[0].classList.remove('borderImgRight')
slideBarImg[0].classList.add('borderImg')
//  for (let i= 0; i< slideBarImg.length; i++) {
//      slideBarImg[i].addEventListener("mouseover", () => {
//       setTimeout(() => {
//         changePic(i)
//       }, 500);
//      })
//  }
for (let i= 0; i< slideBarImg.length; i++) {
  slideBarImg[i].addEventListener("click", () => {
    changePic(i)
  })
}
function changePic(i) {
  if (counter!==i) {
    slideBarImg[counter].classList.toggle('borderImg')
    slideBarImg[counter].classList.toggle('borderImgRight')
        counter=i
    centerImg.classList.toggle('active')
    setTimeout(() => {
    centerImg.src=imgObject[i].src
    fullscreenImgTag.src=imgObject[i].src
      centerImg.alt=imgObject[i].alt
    }, 500);
    setTimeout(() => {
      centerImg.classList.toggle('active')
      slideBarImg[i].classList.toggle('borderImg')
      slideBarImg[i].classList.toggle('borderImgRight')
    }, 500); 
    }
  return
}
// arrows functions
// right arrow
const rightArrowDivBox=document.getElementById('rightArrowDivBox')
rightArrowDivBox.addEventListener("click", () => {
  let i=counter
  if (counter==6) {
    i=0
    changePic(i)
    }
  else {
    i++
    changePic(i)
  }
})
// left arrows
const leftArrowDivBox=document.getElementById('leftArrowDivBox')
leftArrowDivBox.addEventListener("click", () => {
  let i=counter
  if (counter==0) {
    i=6
    changePic(i)
  } else {
    i--
    changePic(i)
  }
})
// change full screen
const fullscreenIconDivCont=document.getElementById('fullscreenIconDivCont')
const firstPageDivCont=document.getElementById('firstPageDivCont')
const closeButtonContainer=document.getElementById('closeButtonContainer')
const fullscreenImgSec=document.getElementById('fullscreenImgSec')
const fullscreenDivCont=document.getElementById('fullscreenDivCont')
fullscreenIconDivCont.addEventListener("click", () => {
  fullscreenImgSec.classList.toggle('displayNone')
  firstPageDivCont.classList.remove('active')
  firstPageDivCont.classList.add('hide')
  firstPageDivCont.classList.add('visibilityNone')
  fullscreenDivCont.classList.remove('hide')
  fullscreenDivCont.classList.remove('visibilityNone')
  fullscreenDivCont.classList.add('active')
})
closeButtonContainer.addEventListener("click", () => {
  firstPageDivCont.classList.toggle("hide") 
  firstPageDivCont.classList.toggle('visibilityNone') 
  firstPageDivCont.classList.toggle('active')
  fullscreenDivCont.classList.toggle('hide')
  
  setTimeout(() => {
    fullscreenDivCont.classList.toggle('visibilityNone')
    fullscreenImgSec.classList.toggle('displayNone')
  }, 1000);
  

})
// play and stop slideshow
const playSlideShowButton=document.getElementById('playSlideShowButton')
const stopSlideShowButton=document.getElementById('stopSlideShowButton')
let timer=null
playSlideShowButton.addEventListener("click", () => {
  timer=1
  playSlideShow()
})
stopSlideShowButton.addEventListener("click", () => {timer=3})
function playSlideShow(){
  if (timer==3) {return}
  else  {
       let i=counter
    if (counter==6) {
      i=0
      changePic(i)
      }
    else {
      i++
      changePic(i)
    }
    }
    setTimeout(playSlideShow, 4500);
  }



/*
    setTimeout(() => {
      let i=counter
      if (counter==6) {
      console.log("if ág")
      i=0
      changePic(i)
      } else {
      console.log("else ág")
      i++
      changePic(i)
      }
      }, 5000);


esetleg meg arra keress megoldast, hogy ha hovereled a kepeket alul,
 akkor ne kapjon epilepsziarohamot az end-user.
1. kepenkent varj legalabb 250-500ms idotartamot, mielott lefuttatod a changePic metodusodat
2. ha egyszerre sok kepen huzom keresztul az egeret, az utolso lehetoseget jelenitsd meg
 amire rahuztam, ne az osszeset probald meg egymas utan
*/