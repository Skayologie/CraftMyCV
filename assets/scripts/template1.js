




window.addEventListener("input",()=>{
    details = CVInformations[0]
    experience = CVInformations[1]
    education = CVInformations[2]
    skills = CVInformations[3]
    lang = CVInformations[4]
    certif = CVInformations[5]
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("numberPhone").value;
    const linkdin = document.getElementById("linkedin").value;
    const website = document.getElementById("website").value;
    let isMatched = false

    let inputPhotosUrl = document.querySelector(".photo").files[0];
    inputPhoto = URL.createObjectURL(inputPhotosUrl);

document.getElementById("details").innerHTML = `
<div class="ImageProfile rounded-[50%] col-span-1 max-h-[150px] max-w-[150px] overflow-hidden ">
    <img class="object-cover w-[100%] h-[100%]  " src="${inputPhoto}" alt="">
</div>

<div>
    <div class="NameProfile col-span-1 flex justify-end flex-col">
        <h1 id="positionFeild" class="text-6xl font-bold"></h1>
        <h3 class="text-4xl ">${fullName}</h3>
    </div>
    <div class="col-span-1 flex flex-col text-sm profileInfo justify-end text-[10px] gap-2 mt-3">
        <p>Casablanca</p>
        <div class="Links flex gap-2">
            <a href="${details.linkdin}" class="font-semibold hover:font-bold">linkdein</a>|
            <a href="mailto:${details.email}" class="font-semibold hover:font-bold">Email</a>|
            <a href="#" class="font-semibold hover:font-bold">Github</a>|
            <a href="${details.portfolio}" class="font-semibold hover:font-bold">Portfolio</a>|
            <p id="phoneNumber"class="font-semibold hover:font-bold">${mobileNumber}</p>
        </div>
    </div>
</div>
<div class="description text-wrap col-span-3">
    <p class="text-wrap" id="detailsSummary">dazdazdazd</p>
</div>
`

document.getElementById("positionFeild").innerHTML = document.getElementById("position").value
document.getElementById("detailsSummary").innerHTML = document.getElementById("summary10000").value
document.getElementById("phoneNumber").innerText = document.getElementById("numberPhone").value

// document.getElementById("Mail").innerHTML = document.getElementById("email").value
// document.getElementById("websiteSection").innerHTML = document.getElementById("websiteSection").value



// Language Maping
let langData = `
<h3 class="text-2xl font-bold mb-3">Language</h3>
<ul class="grid gap-3">
<li>
    ${lang.map(lang => `
        <p class="font-semibold">${lang.language}(<span class="italic ">${lang.level}</span>)</p>
        `
    ).join("")}
</li>

`;

// Education Maping
let educationData = `
<h2 class="mb-3 font-bold text-3xl">Education</h2>
    ${education.map(edu => `
    <div class="flex justify-between items-center mb-2">
        <div>
            <p class="font-semibold text-2xl">${edu.schoolTitle} - ${edu.city} </p>
            <p class="font-semibold " >${edu.Degree}</p>
        </div>
        <div class="">
            <p>${edu.EndDate}</p>
        </div>
    </div>
    <div class="descriptionExper mb-4">
        <p>${edu.schoolDescription}</p>
    </div>
    `
    ).join("")}

`;

// Skills Maping
let SkillsData = `
<h3 class="text-2xl font-bold">Skills</h3>
<ul>
${skills.map(Skill => `
    <li><span class="font-semibold">${Skill.skill}</span> (${Skill.level})</li>
`).join("")}
</ul>
`;

// Experience Maping
let ExpData = `
<h2 class="mb-3 font-bold text-3xl">Professional Experience</h2>
${experience.map(exp => `
<div class="flex justify-between items-center mb-2">
    <div>
        <p class="font-bold text-2xl">${exp.title}</p>
        <p class="font-semibold " >${exp.Employer} | ${exp.city}</p>
    </div>
    <div class="">
        <p>${exp.EndDate}</p>
    </div>
</div>
<div class="descriptionExper mb-4">
    <p>Skills Used : ${exp.skills}</p>
    <p>${exp.jobDescription}</p>
</div>
`).join("")}`;

// Experience Maping
let CertifData = `
<h3 class="text-2xl font-bold mb-3">Certifications</h3>
<ul class="grid gap-3">
    <li>
${certif.map(certif => `
        <p class="font-semibold"><span class="font-semibold">${certif.certif}</span> From </br><span class="font-semibold">${certif.organization}</span><span class="italic"><a href="${certif.urlCertif}"> URL</a></span></p>
`).join("")}
    </li>
</ul>
`;


    document.getElementById("languageSection").innerHTML = langData;
    document.getElementById("education").innerHTML = educationData;
    document.getElementById("SkillsForTemplate").innerHTML = SkillsData;
    document.getElementById("ProExperience").innerHTML = ExpData;
    document.getElementById("certife").innerHTML = CertifData;
})



