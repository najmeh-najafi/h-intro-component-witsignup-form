const form = document.querySelector("#form");
const button=document.querySelector(".form__submit");
const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
const passwordInput = document.querySelector(".form__Password");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
passwordInput.addEventListener("blur",(e)=>{
    e.target.value=p2e(e.target.value)
    alert(isNaN(e.target.value))
   
})
  
