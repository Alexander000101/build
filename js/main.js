const o_b = document.querySelectorAll(".btns");

o_b.forEach((btn) =>{

btn.addEventListener('click',(e)=>{
  o_b.forEach((b)=>{
    b.classList ="btns";
    
  })
  btn.classList ="btns active c-a";

})
})

function accordion_btn(){
  const time = setInterval(()=>{
    if(document.querySelector("#fixtures-cont")){
      clearInterval(time);
      
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


     const a_i_b = document.querySelectorAll(".a-icon");
  a_i_b.forEach((icon) =>{
  icon.addEventListener("click",(e)=>{
    icon.style.opacity =0;
    var tim = setTimeout(()=>{
      
     if(icon.classList[2] ==="bi-chevron-down"){
      icon.classList = "a-icon bi bi-chevron-up"
    }else{
    icon.classList = "a-icon bi bi-chevron-down"
    }
     icon.style.opacity =1;
    },200)
    
    
  })
})
      
    }
  },1000)
  
}



