import jump from 'jump.js'

const main = () => {
  const contactButton = document.querySelector('.nav-contact')

  //add jump to 'contact' button
  contactButton.addEventListener('click', () => {
    console.log('fire')
    jump('.contact', { duration: 1500 })
  })
}


document.addEventListener('DOMContentLoaded', main)
