const menuEl = document.getElementById('menu_nav');
const navEl = document.getElementById('nav_bar');
const nav1 = document.getElementById('nav_1');
const nav2= document.getElementById('nav_2');
const nav3 = document.getElementById('nav_3');
const nav4 = document.getElementById('nav_4');
const nav5 = document.getElementById('nav_5');
const navItems =[nav1, nav2, nav3, nav4, nav5];


//nav
 function navAnimation(home, away) {
    navItems.forEach((nav, i) =>{
       
        nav.classList.replace(`slide-${home}-${i + 1}`,`slide-${away}-${i + 1}`);
        console.log(i)

    });
 }


function toggleNav() {
    navEl.classList.toggle('change');

    menuEl.classList.toggle('overlay-active');
    if(menuEl.classList.contains('overlay-active')){

        menuEl.classList.replace('menu-nav-slide-left','menu-nav-slide-right');
       

        //css animation
         navAnimation('out', 'in');
    }else{
        menuEl.classList.replace('menu-nav-slide-right','menu-nav-slide-left');
        //css animation
         navAnimation('in', 'out');
       
    }

}

navEl.addEventListener('click',toggleNav);
navItems.forEach((nav)=> {
nav.addEventListener('click', toggleNav);
});



