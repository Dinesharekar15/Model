var openbtn=document.getElementById("open-btn");
var close=document.getElementById("close-model");
var model=document.querySelector(".model-over");

openbtn.addEventListener("click",function(){
    console.log(model.classList)
   
    
    model.classList.add('open-model')
   
})
close.addEventListener("click",function(){
    
    model.classList.remove('open-model');
})