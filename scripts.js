const openbtn = document.querySelector('.order')
const popup = document.querySelector('.popup')
const popupcontent = document.querySelector('.popupcontent')
const popupclose = document.querySelector('.popupclose')
console.log(openbtn, popup, popupclose, popupcontent)
openbtn.addEventListener('click', function () {
    popup.classList.add('opened')
})
popupclose.addEventListener('click', function () {
    popup.classList.remove('opened')
})

let coll = document.querySelector('.main')
let arrow = document.querySelector('.arrow')
coll.addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrow.style.transform = 'rotate(0)'
    } else {
        content.style.maxHeight = content.scrollHeight + 'px'
        arrow.style.transform = 'rotate(180deg)'
    }

})

let colll = document.querySelector('.soupbtn')
let arrow1 = document.querySelector('.arrow1')
colll.addEventListener('click', function () {
    this.classList.toggle('active');
    let contentt = this.nextElementSibling;
    if (contentt.style.maxHeight) {
        contentt.style.maxHeight = null;
        arrow1.style.transform = 'rotate(0)'
    } else {
        contentt.style.maxHeight = contentt.scrollHeight + 'px'
        arrow1.style.transform = 'rotate(180deg)'
    }
})



const foodBx = document.getElementById('imgBx')
        const nav = document.querySelector('nav')
        const slides = foodBx.getElementsByTagName('section')
        const h3 = nav.getElementsByTagName('h3')
        const liOne = document.getElementById('liOne')
        const liTwo = document.getElementById('liTwo')
        let i = 0
  
        function nextSlide() {
           slides[i].classList.remove('dishesActive')
           h3[i].classList.remove('active')
           i = (i + 1) % slides.length
           slides[i].classList.add('dishesActive')
           h3[i].classList.add('active')
           console.log(i)
           if (i > 0) {
              liOne.style.visibility = 'visible'
           } else {
              liOne.style.visibility = 'hidden'
           }
           if (i == 4){
              liTwo.style.visibility = 'hidden'
           } 
        }
        function prevSlide() {
           slides[i].classList.remove('dishesActive')
           h3[i].classList.remove('active')
           i = (i - 1 + slides.length) % slides.length
           slides[i].classList.add('dishesActive')
           h3[i].classList.add('active')
           console.log(i)
           if (i > 0) {
              liOne.style.visibility = 'visible'
           } else {
              liOne.style.visibility = 'hidden'
           }
           if (i == 4 ){
              liTwo.style.visibility = 'hidden'
           } else {
              liTwo.style.visibility = 'visible'
           }
        }