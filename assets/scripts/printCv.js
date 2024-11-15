
const style = '';
const btn1 = document.getElementById('templateForOne');
const btn2 = document.getElementById('templateForTwo');
const buttonShow1 = document.getElementById("ShowtemplateForOne")
const buttonShow2 = document.getElementById("ShowtemplateForTwo")
const image = document.getElementById("image")
const CIVI = document.getElementById('temp1');
document.addEventListener("DOMContentLoaded", function(){
    btn1.addEventListener("click", ()=>{
        CIVI.classList.remove("hidden")
        const CV = {margin: 0.5, image:{type: 'PNG'}, filename:'helloo.pdf', jsPDF:{format:'A5'} };
        html2pdf().set(CV).from(CIVI).save();
    })
    buttonShow1.addEventListener("click", ()=>{
        const display = document.getElementById("imageCV")
        const inputImage = document.getElementById("image")
        TemplateOne(CIVI)
        const reader = new FileReader();
        reader.readAsDataURL(inputImage.files[0])
        reader.onload = () =>{
            display.style.backgroundImage = `url(${reader.result})`
        }
        CIVI.classList.toggle("hidden")
        // CIVI.innerHTML = temp1;
    })
});

window.addEventListener("click",()=>{
    console.log(CVInformations)
    // console.log(image.files)
    // console.log(reader.result)

})

const TemplateOne = (CIVI) =>{
    CIVI.innerHTML = ``;
const panel_resultat = CIVI
var test = `    
<div class="container">
            <!-- Header Section -->
            <div class="header">
                <div id="imageCV" style="height:100px;width:100px;background-color:red;"></div>
                <div>
                    <h1>Jawad Boulmal</h1>
                    <p>Web Developer</p>
                    <p>Email: jawad@example.com | Phone: 123-456-7890</p>
                    <p>LinkedIn: linkedin.com/in/jawad-boulmal | Portfolio: jawadboulmal.com</p>
                </div>
            </div>
    
            <!-- Summary Section -->
            <div class="section">
                <h2>Summary</h2>
                <p>Hello! My name is Jawad Boulmal, and I am a passionate web developer skilled in creating dynamic and responsive web applications.</p>
            </div>
    
            <!-- Experience Section -->
            <div class="section">
                <h2>Experience</h2>
                <ul>
`;
panel_resultat.innerHTML +=  test ;
//experiense
CVInformations[1].forEach((item , i) =>{
    panel_resultat.innerHTML +=`
    <li>
        <p><span class="info">Title:</span> ${item.title}</p>
        <p><span class="info">Employer:</span>${item.Employer}</p>
        <p><span class="info">Location:</span> ${item.city}</p>
        <p><span class="info">Start Date:</span>${item.StartDate}</p>
        <p><span class="info">End Date:</span>${item.EndDate}</p>
        <p class="job-description">${item.jobDescription}</p>
        <p><span class="info">Skills Used:</span> ${item.skills}</p>
    </li>
    `
})
panel_resultat.innerHTML +=`</ul></div>`;

//Education
let Education = `<div class="section">
            <h2>Education</h2>
            <div class="section-content">`;
CVInformations[2].forEach((item , index)=>{
    Education+=` <div class="entry">
                    <h3>${item.schoolTitle}</h3>
                    <span>${item.Degree}</span>
                </div>`
})
            Education+=`     </div>
        </div>`
panel_resultat.innerHTML +=  Education ;

test =`
    <!-- Education Section -->
        <!-- Skills Section -->
        <div class="section">
            <h2>Skills</h2>
            <ul class="skills-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>Version Control (Git)</li>
            </ul>
        </div>`;    
panel_resultat.innerHTML +=  test ;
}
