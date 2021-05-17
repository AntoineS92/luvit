const stepOne = document.querySelector(".one");
const stepTwo = document.querySelector(".two");
const stepThree = document.querySelector(".three");


stepTwo.style.display = "none"
stepThree.style.display = "none"

stepOne.addEventListener("click", evt => {
    stepTwo.style.display = null
    stepOne.style.display = "none"
})

stepTwo.addEventListener("click", evt => {
    stepTwo.style.display = "none"
    stepThree.style.display = null
})

stepOne.style.display = null