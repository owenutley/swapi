const getRes = document.querySelector("#button")

function getResClick(event){
    event.preventDefault()
    console.log("Button Clicked")
}

getRes.addEventListener("click", getResClick)

