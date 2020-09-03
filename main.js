let total = document.querySelector('#total');
let times = document.querySelectorAll(".fa-times");
let hearts = document.querySelectorAll(".fa-heart");
let minus = document.querySelectorAll(".fa-minus-square");
let plus = document.querySelectorAll(".fa-plus-square");


     
for (let i = 0; i < times.length; i++) {
    times[i].addEventListener("click",() => {   
    times[i].parentElement.parentElement.remove();
              })

    
}
Array.from(hearts).map(heart => {
    heart.addEventListener('click', ()=> heart.classList.toggle('red'))
    
})

Array.from(plus).map(el => {
    el.addEventListener('click',() => {el.nextElementSibling.innerHTML++
    total.innerHTML=parseInt(total.innerHTML)+parseInt(el.parentElement.nextElementSibling.firstChild.innerHTML)
    
})})


Array.from(minus).map(mn => {
    
    mn.addEventListener('click',() => {
        if (mn.previousElementSibling.innerHTML <= 0) {
            mn.previousElementSibling.innerHTML = 0;}
             else {
             mn.previousElementSibling.innerHTML--;
             total.innerHTML=parseInt(total.innerHTML)-parseInt(mn.parentElement.nextElementSibling.firstChild.innerHTML)
            }
    })})
