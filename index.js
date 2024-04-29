const fornewsite = document.querySelector('.fornewsite')
const accnone = document.querySelector('#acc')
const fornewsite1 = document.querySelector('.fornewsite1')
const accnone1 = document.querySelector('#acc1')
accnone.addEventListener('click',(event)=> {
    event.preventDefault();
    fornewsite.style.display='none';
    fornewsite1.style.display='block';
})
accnone1.addEventListener('click',(event)=>{
    event.preventDefault();
    fornewsite.style.display='block';
    fornewsite1.style.display='none';
})