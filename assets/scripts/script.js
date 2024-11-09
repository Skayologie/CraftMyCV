/* Define The Global Variables */
// Get The Call Action Button And heroPage Section & The Main Form wich contain all inputs
let startCreate = document.getElementById("startCreate");
let HeroPage = document.getElementById("heroPage");
let TheMainForm = document.getElementById("TheMainForm");

// The next & previous buttons
const buttonNext = document.getElementById("btnNext");
const buttonPrev = document.getElementById("btnPrev");

// The Progress bar & Step Title
const progressBar = document.getElementById("prgressbar");
const titleProg = document.getElementById("titleProg");

// All Steps 
const stepsArr = ["Personal details","Professional Experience","Education" ,"Skills","Languages","Certifications","Professional Summary","Choose CV Template"];

// Get The Current Step From The Data Step Attribute Wich Exist On Next Button 
let step = buttonNext.getAttribute("dataStep");

// All Steps Persentage ?? 
// 100% / All steps = persentage : This Persentage Of Every Step ,
let ProgressBarPers = 100 / stepsArr.length ;

/************************************************************************************************/
//******************************** Define The Functions *****************************************/
// Function To Go Or Back To The Section
const DisplayNoneBlock = (option,optionCurrent)=>{
        // Displaying The Next Step And Hide The Current Step With Animations
        document.getElementById(optionCurrent).style.display = "none";
        document.getElementById(option).style.display = "block";
        document.getElementById(option).style.animation = "Opening .8s";
        // incremment the width of the width of the progress bar by the ProgressBarPers multipled by steps
        progressBar.style.width = step * ProgressBarPers +"%";
}




// event click when the user click on the call action button
startCreate.addEventListener("click",()=>{
    titleProg.innerHTML = stepsArr[step];
    // animation for the heropage to go up 
    HeroPage.classList.add("totop")
    // this timeout for add hidden class after the section go up with the animation after 300 ms
    setTimeout(()=>{
        HeroPage.classList.add("hidden")
    },300);
    
    // Animations For Good UI/UX
    TheMainForm.style.animation = "removeScale 1s"
    TheMainForm.classList.remove("scale-50")
    setTimeout(()=>{
        TheMainForm.classList.remove("hidden")
    },300)
});


// Event For The Next Button
buttonNext.addEventListener("click", ()=>{
    // Change The Title Progress To Right Title With The Step Index
    titleProg.innerHTML = stepsArr[step];

    // Create The Id Of The Current Step 
    let currentStep = "step"+step;

    // Incrimment The Step
    step++;

    // Create The Id Of The Next Step 
    let NextStep = "step"+step;
    DisplayNoneBlock(NextStep,currentStep)

    // Made A progress Bar Transition
    progressBar.style.transition = "1s ease-in-out ";
});


// Event For The Prev Button
buttonPrev.addEventListener("click", ()=>{
    titleProg.innerHTML = stepsArr[step - 2];
    let currentStep = "step"+step

    // desincremment The Step To back To the previous section
    step--
    
    let prevStep = "step"+step
    DisplayNoneBlock(prevStep,currentStep)

})






