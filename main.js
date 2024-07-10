const product = document.getElementById("Product");
const qbutton = document.getElementsByClassName("qbutton");


product.addEventListener("click",(e)=>{
    const target = e.target;
    
    const parent = target.parentElement.parentElement
    const answer = parent.lastElementChild

    if(answer.style.display == "none"){
        answer.style.display = "block"
    }
    else{
        answer.style.display = "none"
    }

})

const sidebar = document.querySelector(".sidebar");
const menubar = document.getElementById("menubar");
const crossbar = document.getElementById("crossbar");

menubar.addEventListener("click",()=>{
        sidebar.style.display = "flex";
})

crossbar.addEventListener("click",()=>{
    sidebar.style.display = "none"
})