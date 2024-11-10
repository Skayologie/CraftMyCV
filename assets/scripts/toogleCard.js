
// get all card that have the 'toggleCard' classe names 
const allcardsToggle = document.getElementsByClassName("toggleCard")

// loop for all cardsToggle with the event click
for (const element of allcardsToggle) {
    // When The User Clicked On Any Card That have className Toggle Card The card will open and close
    element.addEventListener("click", ()=>{
        let id = element.id
        let section = document.getElementById("card"+id)
        element.classList.toggle("border-b-0")
        section.classList.toggle("hidden")
    })
}

