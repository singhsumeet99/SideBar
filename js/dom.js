const sidebar=document.querySelector('.sidebar');
const toggleBtn=document.querySelector('.btn');
const closeBtn=document.querySelector('button');
toggleBtn.addEventListener('click',
function(){
sidebar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click',
function(){
    sidebar.classList.remove('show-sidebar')
});