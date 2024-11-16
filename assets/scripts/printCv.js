
const btn1 = document.getElementById('templateForOne');
const btn2 = document.getElementById('templateForTwo');
const buttonShow1 = document.getElementById("ShowtemplateForOne")
const buttonShow2 = document.getElementById("ShowtemplateForTwo")
const image = document.getElementById("image")
const CIVI = document.getElementById('temp1');

document.addEventListener("DOMContentLoaded", function(){
    btn1.addEventListener("click", ()=>{
        let cvName = "CV.pdf"
        const CV = {
            margin: 0, 
            image: { type: "jpeg", quality: 0.98 },
            filename: cvName,
            html2canvas: { scale: 4 }, 
            jsPDF:{ unit: "in", orientation: "portrait", format:"A4" }
        };
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
    })
});

