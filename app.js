// img height change
const enlargementImg=document.getElementById('enlargementImg')
const reductionImg=document.getElementById('reductionImg')
const centerImg=document.getElementById('centerImg')
// img height incrase
let imgHeight=centerImg.offsetHeight
enlargementImg.addEventListener("click", () => {
  if (imgHeight==449 || imgHeight<849) {
    imgHeight+=100
    centerImg.style.height=imgHeight+"px"
  }
})
// img height decrase
reductionImg.addEventListener("click",()=> {
  if (imgHeight>449 || imgHeight==849) {
    imgHeight-=100
    centerImg.style.height=imgHeight+"px"
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
    alt:"mésodik kép"
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
    slideBarImgTemplat+=`<img class="slideBarImg" src="${data.src}" alt="${data.alt}">`
  })
slideBarCont.innerHTML=slideBarImgTemplat
}
const slideBarImg=document.querySelectorAll(".slideBarImg")
 for (let i= 0; i< slideBarImg.length; i++) {
     slideBarImg[i].addEventListener("mouseover", () => {
      changePic(i)
     })
 }
for (let i= 0; i< slideBarImg.length; i++) {
  slideBarImg[i].addEventListener("click", () => {
    changePic(i)
  })
}
function changePic(i) {
  if (counter!==i) {
        counter=i
    centerImg.classList.toggle('active')
    setTimeout(() => {
    centerImg.src=imgObject[i].src
      centerImg.alt=imgObject[i].alt
    }, 1000);
    setTimeout(() => {
      centerImg.classList.toggle('active')
    }, 1000); 
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