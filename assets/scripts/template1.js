details = CVInformations[0]
experience = CVInformations[1]
education = CVInformations[2]
skills = CVInformations[3]





window.addEventListener("input",()=>{
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("numberPhone").value;
    const linkdin = document.getElementById("linkedin").value;
    const website = document.getElementById("website").value;
    let isMatched = false

    let inputPhotosUrl = document.querySelector(".photo").files[0];
    inputPhoto = URL.createObjectURL(inputPhotosUrl);

document.getElementById("details").innerHTML = `
<div class="ImageProfile col-span-1 max-h-[150px] max-w-[150px] overflow-hidden ">
    <img class="object-cover w-[100%] h-[100%] border rounded-3xl" src="${inputPhoto}" alt="">
</div>
<div class="NameProfile col-span-1 flex justify-end flex-col">
    <h1 id="positionFeild" class="text-6xl font-bold"></h1>
    <h3 class="text-4xl ">${fullName}</h3>
</div>
<div class="col-span-1 flex flex-col text-sm profileInfo justify-end text-[10px]">
    <p>Casablanca</p>
    <div class="Links flex gap-2">
        <a href="${details.linkdin}">linkdein</a>
        <a href="mailto:${details.email}">Email</a>
        <a href="#">Github</a>
        <a href="${details.portfolio}">Portfolio</a>
    </div>
    <p id="phoneNumber"></p>
</div>
<div class="description text-wrap col-span-3">
    <p class="text-wrap" id="detailsSummary"></p>
</div>
`

document.getElementById("positionFeild").innerHTML = document.getElementById("position").value
document.getElementById("detailsSummary").innerHTML = document.getElementById("summary10000").value

document.getElementById("Mail").innerHTML = document.getElementById("email").value
document.getElementById("phoneNumber").innerHTML = document.getElementById("numberPhone").value
document.getElementById("websiteSection").innerHTML = document.getElementById("websiteSection").value
document.getElementById("linkedin").innerHTML = document.getElementById("linkedinSection").value




let ExpData = `
<h2 class="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
<div class="border-2 w-20 border-top-color my-3"></div>
<div class="flex flex-col">
    ${experience.map(exp => `
        <div class="flex flex-col">
            <p class="text-lg font-bold text-gray-700">${exp.title} at ${exp.Employer}</p>
            <p class="font-semibold text-sm text-gray-700">${exp.StartDate} - ${exp.EndDate}</p>
            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">${exp.skills}</p>
            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">${exp.jobDescription}</p>
        </div>
        `
    ).join("")}
</div>

`;


let educationData = `
<div class="py-3 sm:order-none order-1">
<h2 class="text-lg font-poppins font-bold text-top-color">Education Background</h2>
<div class="border-2 w-20 border-top-color my-3"></div>
<div class="flex flex-col space-y-1">
    ${education.map(edu => `
        <div class="flex flex-col">
            <p class="font-semibold text-xs text-gray-700">${edu.EndDate}</p>
            <p class="text-sm font-medium">
                <span class="text-green-700">${edu.schoolTitle}</span>, ${edu.schoolDescription}
            </p>
            <p class="font-bold text-xs text-gray-700 mb-2">Percentage: ${edu.Degree}</p>
        </div>
        `
    ).join("")}
</div>

`;


let SkillsData = `
<div class="py-3 sm:order-none order-2">
    <h2 class="text-lg font-poppins font-bold text-top-color">Skills</h2>
    <div class="border-2 w-20 border-top-color my-3"></div>
    <div>
    ${skills.map(Skill => `
    <div class="flex items-center my-1">
        <a class="w-6 text-gray-700 hover:text-orange-600">
            <i class="fa-solid fa-brain"></i>
        </a>
        <div class="ml-2">${Skill.skill} - ${Skill.level}</div>
    </div>
    `
        ).join("")}
</div>

`;



    document.getElementById("ProExp").innerHTML = ExpData;
    document.getElementById("education").innerHTML = educationData;
    document.getElementById("skillsSectionCV").innerHTML = SkillsData;
})



