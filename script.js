//INITIALIZE  AOS 
AOS.init();

const navbarContainerLinks=document.querySelector('.navbar .container .links');
const navbarContainerToggleMenuBtn=document.querySelector('.navbar .container .toggle-menu-btn ');
const navbarContainerToggleMenuBtnDiv1=document.querySelector('.navbar .container .toggle-menu-btn .div1');
const navbarContainerToggleMenuBtnDiv2=document.querySelector('.navbar .container .toggle-menu-btn .div2');
const navbarContainerToggleMenuBtnDiv3=document.querySelector('.navbar .container .toggle-menu-btn .div3');
const navbar=document.querySelector('.navbar');
const navbarLinksItem=document.querySelectorAll('.navbar .container .links li a');
const faMoon=document.querySelector('.navbar .container .links .fa-moon');
const serviceBg=document.querySelector('.service');
const body=document.querySelector('body');
const features=document.querySelector('.features');
const pricing=document.querySelector('.pricing')


const linksShow=()=>{
  navbarContainerLinks.classList.toggle('LinksShow');
  navbarContainerToggleMenuBtn.classList.toggle('LinksShow')
  // navbarContainerToggleMenuBtnDiv1.classList.toggle('btnDivChanged');
  // navbarContainerToggleMenuBtnDiv2.classList.toggle('btnDivChanged');
  // navbarContainerToggleMenuBtnDiv3.classList.toggle('btnDivChanged');

  navbarContainerToggleMenuBtnDiv1.classList.toggle('Div1changed');
  navbarContainerToggleMenuBtnDiv2.classList.toggle('Div2changed');
  navbarContainerToggleMenuBtnDiv3.classList.toggle('Div3Displayed');
}
navbarContainerToggleMenuBtn.addEventListener('click',linksShow);

// navbar link items
const removeNavbar=()=>{
  navbarContainerLinks.classList.remove('LinksShow');
  navbarContainerToggleMenuBtn.classList.remove('LinksShow')
  navbarContainerToggleMenuBtnDiv1.classList.remove('Div1changed');
  navbarContainerToggleMenuBtnDiv2.classList.remove('Div2changed');
  navbarContainerToggleMenuBtnDiv3.classList.remove('Div3Displayed');
  
}
navbarLinksItem.forEach((link)=>{
  link.addEventListener('click',removeNavbar);
})


faMoon.addEventListener('click',()=>{
  faMoon.classList.toggle('moonChanged');
  navbar.classList.toggle('Active-bgChanged')
  serviceBg.classList.toggle('ServiceBg');
  body.classList.toggle('body');
  features.classList.toggle('features-bg');
  pricing.classList.toggle('pricing-Bg')
})

// window scroll 
window.addEventListener('scroll',()=>{
  if(window.scrollY > 35){
    navbar.classList.add('Active-bgr');
    // navbarLinksItem.classList.add('LinksColor')
    return;
  }
  navbar.classList.remove('Active-bgr');
})

