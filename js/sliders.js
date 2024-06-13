const slides = document.querySelectorAll('.slide')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let active = 0
slides[active].classList.add('active')

// next slide function
const nextSlide = () =>{
  active++
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
  if(active === slides.length){
    active = 0
  }
  
  slides[active].classList.add('active')
  
}

// previous slide function
const prevSlide = () =>{
  active--
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
  if(active === 0){
    active = slides.length - 1
  }
  
  slides[active].classList.add('active')
  
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

// auto play
 setInterval(() =>{
   nextSlide()
 }, 5000)