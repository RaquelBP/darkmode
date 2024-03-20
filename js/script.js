const darkButton= document.getElementById("dark-slide")
const circleDOM= document.getElementById("dark-circle")
const darkIMGDOM= document.getElementById("nav-img")
const darkDiv= document.getElementById("dark-div")
const bodyDOM= document.body
const navTitleDOM= document.getElementById("nav-title")
const titleDOM= document.getElementById("title")

darkButton.addEventListener("click", ()=>{

    bodyDOM.classList.toggle("dark")
    navTitleDOM.classList.toggle("dark")
    titleDOM.classList.toggle("dark")
    circleDOM.classList.toggle("dark")
    darkIMGDOM.classList.toggle("dark")
})
