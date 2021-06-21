burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click',()=>{
navbar.classList.toggle('h-nav');
rightNav.classList.toggle('v-class');
navlist.classList.toggle('v-class');

});