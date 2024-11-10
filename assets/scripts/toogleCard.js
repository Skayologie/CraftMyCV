

const allcardsToggle = document.getElementsByClassName("toggleCard")
const allDivs = document.getElementsByClassName("cardSection")


for (const element of allcardsToggle) {
    
    element.addEventListener("click", (e)=>{

        let id = element.id
        element.classList.toggle("border-b-0")
        let section = document.getElementById("card"+id)
        section.classList.toggle("hidden")
        console.log(id)


        
    })
}

