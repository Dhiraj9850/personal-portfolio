console.log("hello");
document.querySelector('.fa-times').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarIn');
    if(document.querySelector('.sidebar').classList.contains('sidebarIn')){
        document.querySelector('.fa-bars').style.display= 'inline';
        document.querySelector('.fa-times').style.display = 'none';
    }
    else{
        document.querySelector('.fa-bars').style.display= 'none';
        setTimeout(() => {
            document.querySelector('.fa-times').style.display = 'inline';
        }, 900);
       
    }
})
const side = document.querySelector('.sidebar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll",()=>{
    if(lastScrollY < window.scrollY){
       document.querySelector('.fa-bars').style.display= 'inline';
       document.querySelector('.fa-times').style.display = 'none';
       side.classList.add("sidebarIn");
    }
})
