/* Define The Global Variables */

// Get The Call Action Button And heroPage Section & The Main Form wich contain all inputs
let startCreate = document.getElementById("startCreate");
let HeroPage = document.getElementById("heroPage");
let TheMainForm = document.getElementById("TheMainForm");
let ValideSum = 0
let ValideSum2 = 0

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
// Event To Check the refresh Of The Page Before It Refreshed
// this function will disaled in the dev period
// window.onbeforeunload = function() {
//     return 0;
// }


// Function To Go Or Back To The Section
const DisplayNoneBlock = (option,optionCurrent)=>{
        // Displaying The Next Step And Hide The Current Step With Animations
        document.getElementById(optionCurrent).style.display = "none";
        document.getElementById(option).style.display = "block";
        document.getElementById(option).style.animation = "Opening .8s";
        // incremment the width of the width of the progress bar by the ProgressBarPers multipled by steps
        progressBar.style.width = step * ProgressBarPers +"%";
}

// Function That check the button aligability
const checkPrevButton = () => {
    if (step > "1") {
        buttonPrev.style.display ="block"
    }else{
        buttonPrev.style.display ="none"
    }
}

// Function That check the button aligability
const checkNextButton = () => {
    if (step == "8") {
        buttonNext.style.display ="none"
    }else{
        buttonNext.style.display ="block"
    }
}

// event click when the user click on the call action button
startCreate.addEventListener("click",()=>{

    titleProg.innerHTML = stepsArr[step-1];
    // Check The Previous Button 
    // Initialize The Title Progress To Right Title With The Step Index
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

    // checking for the prev Button
    if (step == 1) {
        buttonPrev.classList.add("cursor-not-allowed")
        return
    }else{
        buttonPrev.classList.remove("cursor-not-allowed")
    }
});

// Event For The Next Button
buttonNext.addEventListener("click", ()=>{
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("numberPhone").value;
    const image = document.getElementById("image").value;
    Regex()
    console.log(ValideSum)
    if (ValideSum === 5 || ValideSum2 === 4) {
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
        
        // Check The Previous Button 
        if (step == 1) {
            buttonPrev.classList.add("cursor-not-allowed")
        }else{
            buttonPrev.classList.remove("cursor-not-allowed")
        }
        
        // Check The next Button After
        if (step == 8) {
            buttonNext.classList.add("cursor-not-allowed")
        }else{
            buttonNext.classList.remove("cursor-not-allowed")
        }
        checkPrevButton()
        checkNextButton()
    }
    
});


// Event For The Prev Button
buttonPrev.addEventListener("click", ()=>{
    // Check The Previous Button 
    if (step == 1) {
        buttonPrev.classList.add("cursor-not-allowed")
        return
    }else{
        buttonPrev.classList.remove("cursor-not-allowed")
    }
    // Check the Prev Button Function
    
    // Check The Previous Button 
    titleProg.innerHTML = stepsArr[step - 2];
    
    // desincremment The Step To back To the previous section
    let currentStep = "step"+step
    
    step--
    
    let prevStep = "step"+step
    DisplayNoneBlock(prevStep,currentStep)
    
    // Check The Previous Button After The 
    if (step == 1) {
        buttonPrev.classList.add("cursor-not-allowed")
    }else{
        buttonPrev.classList.remove("cursor-not-allowed")
    }
    
    // Check The next Button After
    if (step == 8) {
        buttonNext.classList.add("cursor-not-allowed")
    }else{
        buttonNext.classList.remove("cursor-not-allowed")
    }
    
    checkPrevButton()
    checkNextButton()
})


// Clicking En Template
let template1 = document.getElementById("template1")
let template2 = document.getElementById("template2")
let chooseHove1 = document.getElementById("chooseHove1")
let chooseHover2 = document.getElementById("chooseHover2")
let TemplateChoosed = 0 ;

template1.onclick = () =>{
    chooseHove1.classList.remove("hidden")
    chooseHover2.classList.add("hidden")
    TemplateChoosed = 1 ;
    console.log(TemplateChoosed)
}


// Regex En Generale Template
function RegexTemplate(input,pattern){
    if (!pattern.test(input.value)) {
        input.style.border = "1px solid red";
        
    }else{
        if (!input.dataRegex) {
            ValideSum++
        }
        input.style.border = "none";
        input.dataRegex = true
    }
}

// dataRegex="false" Set This Attr in any input for valid it Made By @JawadBoulmal
function Regex(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fullNamePattern = /^[a-zA-Z\s]{2,30}$/;
    const positionPattern = /^[a-zA-Z\s]{2,30}$/;
    const phonePattern = /^\d{10}$/;
    const websitePattern =  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    const fullNameInput = document.getElementById("fullName")
    const email = document.getElementById("email")
    const numberPhone = document.getElementById("numberPhone")
    const image = document.getElementById("image")
    const website = document.getElementById("website")
    const positiInput = document.getElementById("position")

    RegexTemplate(fullNameInput,fullNamePattern)
    RegexTemplate(email,emailPattern)
    RegexTemplate(numberPhone,phonePattern)
    RegexTemplate(positiInput,positionPattern)
    RegexTemplate(website,websitePattern)
}