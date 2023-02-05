const form = document.querySelector("#form");
const button=document.querySelector(".form__submit");
const passwordInput = document.querySelector(".form__Password");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
passwordInput.addEventListener("input",(e)=>{
    alert(e.target.value)
    alert(isNaN(e.target.value))
})
  
