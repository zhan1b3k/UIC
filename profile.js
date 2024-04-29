const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')
const body = document.body;
const hidden__links = document.querySelector('.menu__links')
const hidden__link = document.querySelector('.hidden-link') 

const btn = document.querySelector('.toggle-btn')
const sidebar = document.querySelector('.sidebar-menu')
const active = document.querySelector('.active')
if(menu && menuBtn){
    menuBtn.addEventListener('click' ,() => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
        btn.classList.toggle('visible')
    })
    menu.addEventListener('click',(event)=>{
        if(event.target.classList.contains('menu__body')){
            menu.classList.remove('active') 
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })
    menu.querySelectorAll('.menu__link').forEach(link =>{
        link.addEventListener('click' , () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    if (sidebar.style.left === '-250px'){
        sidebar.style.left ='0px'
    }
    else{
        sidebar.style.left ='-250px'
        console.log(0)
    }
})
document.querySelectorAll('.sidebar .links .link a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const parentLink = e.target.closest('.link');
        if (parentLink && parentLink.querySelector('.sub-menu')) {
            parentLink.classList.toggle('active');
        }
    });
});
