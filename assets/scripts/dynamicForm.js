  /////////////////////////////////////////////////////////////////////////////
 ////////////////////////// Made By Jawad Boulmal ////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//get all the buttons for creating the new form 
let allDynamicForm = document.querySelectorAll(".dynamicForm");

// The Id Of The Input
let id = 1; 

// function toggle just for styling the cards
function justToggle(cardClicked,section) {
    document.getElementById(cardClicked).classList.toggle("border-b-0");
    document.getElementById(section).classList.toggle("hidden");
};


// function That Change The Name Of the dynamic section to the what user inputing in the input
function ChangeTheCardName(e , title ){
    document.querySelector(title).innerHTML = e.value
}

for (const element of allDynamicForm) {    
    // when the user clicked for creating a new form 
    element.addEventListener("click", () => {
        // those conditions are check the id of the button that user clicked on is the button for the experience form or certification or other 
        // for experience form
        if (element.id === "exper"){
            // Append new content to the container
            document.getElementById("experContainer").innerHTML += `
                <div onclick="justToggle('Experience${id}','cardExperience${id}')" id="Experience${id}" class="toggleCard border-b-0 title justify-between mt-6 h-[60px] flex items-center border b rounded-[8px] rounded-br-none rounded-bl-none pl-[20px] text-2xl font-semibold">
                    <h2>Web Developer</h2>
                    <i class="cursor-pointer pr-[30px] fa-solid fa-chevron-down"></i>
                </div>
                <div id="cardExperience${id}" class="cardSection  p-[20px] border rounded-[8px] rounded-tr-none border-t-0 rounded-tl-none inputsContainer grid grid-cols-3 grid-rows-3 gap-10">
                    <div class="inputItem w-[100%] flex flex-col gap-3">
                        <div class="text-2xl font-bold">
                            <label for="">Job Title</label>
                        </div>
                        <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                            <input oninput="ChangeTheCardName(this , '#Experience${id} h2')" placeholder="Web Developer" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1] " type="text" name="" id="titleInputExper${id}">
                        </div>
                    </div>
                    <div class="inputItem w-[100%] flex flex-col gap-3">
                        <div class="text-2xl font-bold">
                            <label for="">Employer</label>
                        </div>
                        <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                            <input placeholder="Sogé" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                        </div>
                    </div>
                    <div class="inputItem w-[100%] flex flex-col gap-3">
                        <div class="text-2xl font-bold">
                            <label for="">City</label>
                        </div>
                        <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                            <input placeholder="Casablanca" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                        </div>
                    </div>
                    <div class="inputItem w-[100%] flex flex-col gap-3 grid grid-cols-2">
                        <div class="col-span-1 flex flex-col gap-3">
                            <div class="text-2xl font-bold">
                                <label for="">Start Date</label>
                            </div>
                            <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                <input class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="date" name="" id="">
                            </div>
                        </div>
                        <div class="col-span-1 flex flex-col gap-3">
                            <div class="text-2xl font-bold">
                                <label for="">End Date</label>
                            </div>
                            <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                <input class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="date" name="" id="">
                            </div>
                        </div>
                    </div>
                    <div class="inputItem w-[100%] flex flex-col gap-3 row-span-2 col-span-2">
                        <div class="text-2xl font-bold">
                            <label for="">Job Description</label>
                        </div>
                        <div class="w-[100%] h-[100%]">
                            <textarea class="pt-4 font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" placeholder="Lorem ipsum dolor sit amet consectetur." name="" id=""></textarea>
                        </div>
                    </div>
                    <div class="inputItem w-[100%] flex flex-col gap-3">
                        <div class="text-2xl font-bold">
                            <label for="">Skills used (Optional)</label>
                        </div>
                        <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                            <input placeholder="Html , Css , Js , Php" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                        </div>
                    </div>
                </div>
            `;
            id++; // Increment ID for the next element
        }
        // for education form
        else if (element.id === "edu"){
            // Append new content to the container
            document.getElementById("eduContainer").innerHTML += `
                            <div onclick="justToggle('Education${id}','cardEducation${id}')" id="Education${id}" class="toggleCard border-b-0 title justify-between mt-6 h-[60px] flex items-center  border rounded-[8px] rounded-br-none rounded-bl-none pl-[20px] text-2xl font-semibold">
                                <h2>Youcode</h2>
                                <i class="cursor-pointer pr-[30px] fa-solid fa-chevron-down"></i>
                            </div>
                            <div id="cardEducation${id}" class=" p-[20px] border rounded-[8px] rounded-tr-none border-t-0 rounded-tl-none inputsContainer grid grid-cols-3 grid-rows-3 gap-10">
                                <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                    <div class="text-2xl font-bold">
                                        <label for="">School</label>
                                    </div>
                                    <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                        <input oninput="ChangeTheCardName(this , '#Education${id} h2')" placeholder="Youcode" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                    </div>
                                </div>
                                <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                    <div class="text-2xl font-bold">
                                        <label for="">Degree</label>
                                    </div>
                                    <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                        <input placeholder="Full stack Developer" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                    </div>
                                </div>
                                <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                    <div class="text-2xl font-bold">
                                        <label for="">City</label>
                                    </div>
                                    <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                        <input placeholder="Youssoufia" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                    </div>
                                </div>
                                <div class="col-span-1 flex flex-col gap-3">
                                    <div class="text-2xl font-bold">
                                        <label for="">Start Date</label>
                                    </div>
                                    <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                        <input class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="date" name="" id="">
                                    </div>
                                </div>
                                <div class="inputItem w-[100%] flex flex-col gap-3 row-span-2 col-span-2">
                                    <div class="text-2xl font-bold">
                                        <label for="">School Description</label>
                                    </div>
                                    <div class="w-[100%] h-[100%]">
                                        <textarea  class="pt-4 font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" placeholder="Graduate of YouCode, a prestigious school of programming, where I underwent intensive training and hands-on learning in web development for two years. The comprehensive curriculum equipped me with a solid foundation in programming languages, frameworks, and methodologies essential for a successful career in the field. " name="" id=""></textarea>
                                    </div>
                                </div>
                                <div class="col-span-1 flex flex-col gap-3">
                                    <div class="text-2xl font-bold">
                                        <label for="">End Date</label>
                                    </div>
                                    <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                        <input class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="date" name="" id="">
                                    </div>
                                </div>
                                
                            </div>
            `;

            id++; // Increment ID for the next element
        }
        // for skills form
        else if (element.id === "skills"){
            // Append new content to the container
            console.log("this is id of skills : " + id)
            document.getElementById("skillsContainer").innerHTML += `
                             <div onclick="justToggle('Skills${id}','cardSkills${id}')" id="Skills${id}" class="toggleCard border-b-0 title justify-between mt-6 h-[60px] flex items-center  border rounded-[8px] rounded-br-none rounded-bl-none pl-[20px] text-2xl font-semibold">
                                 <h2>Javascript</h2>
                                 <i class="cursor-pointer pr-[30px] fa-solid fa-chevron-down"></i>
                             </div>
                             <div id="cardSkills${id}" class=" cardSection p-[20px] border rounded-[8px] rounded-tr-none border-t-0 rounded-tl-none inputsContainer grid grid-cols-2 gap-10">
                                 <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                     <div class="text-2xl font-bold">
                                         <label for="">Skill</label>
                                     </div>
                                     <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                         <input oninput="ChangeTheCardName(this , '#Skills${id} h2')" placeholder="Youcode" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                     </div>
                                 </div>
                                 <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                     <div class="text-2xl font-bold">
                                         <label for="">Level</label>
                                     </div>
                                     <div class="cursor-pointer w-[100%] h-[40px] bg-[#E6E9F1] pr-[15px]">
                                         <select class="font-semibold text-1xl pl-[10px]  w-[100%] h-[100%] bg-[#E6E9F1]" name="" id="">
                                             <option value="Beginner">Beginner</option>
                                             <option value="Intermediate">Intermediate</option>
                                             <option value="Advanced">Advanced</option>
                                             <option value="Expert">Expert</option>
                                             <option value="Master">Master</option>
                                         </select>
                                     </div>
                                 </div>
                             </div>
            `;
            id++; // Increment ID for the next element

        }
        // for language form
        else if (element.id === "lang"){
            // Append new content to the container
            console.log("this is id of skills : " + id)
            document.getElementById("langContainer").innerHTML += `
                        <div onclick="justToggle('Languages${id}','cardLanguages${id}')" id="Languages${id}" class="toggleCard border-b-0 title justify-between mt-6 h-[60px] flex items-center  border rounded-[8px] rounded-br-none rounded-bl-none pl-[20px] text-2xl font-semibold">
                            <h2>French</h2>
                            <i class="cursor-pointer pr-[30px] fa-solid fa-chevron-down"></i>
                        </div>
                        <div id="cardLanguages${id}" class="cardSection p-[20px] border rounded-[8px] rounded-tr-none border-t-0 rounded-tl-none inputsContainer grid grid-cols-2 gap-10">
                            <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                <div class="text-2xl font-bold">
                                    <label for="">Language</label>
                                </div>
                                <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                    <input oninput="ChangeTheCardName(this , '#Languages${id} h2')" placeholder="French" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                </div>
                            </div>
                            <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                <div class="text-2xl font-bold">
                                    <label for="">Level</label>
                                </div>
                                <div class="outline-white cursor-pointer w-[100%] h-[40px] bg-[#E6E9F1] pr-[15px]">
                                    <select class="font-semibold text-1xl pl-[10px]  w-[100%] h-[100%] bg-[#E6E9F1]" name="" id="">
                                        <option value="Beginner">Beginner (A1 - A2)</option>
                                        <option value="Intermediate">Intermediate (B1 - B2)</option>
                                        <option value="Advanced">Advanced (C1)</option>
                                        <option value="Proficient">Proficient (C2)</option>
                                        <option value="Native">Native / Bilingual</option>
                                    </select>
                                </div>
                            </div>
                            
                            
                            
                            
                        </div>
            `;
            id++; // Increment ID for the next element

        }

        // for certification form
        else if (element.id === "certif"){
            // Append new content to the container
            console.log("this is id of skills : " + id)
            document.getElementById("certifContainer").innerHTML += `
                        <div onclick="justToggle('Certifications${id}','cardCertifications${id}')" id="Certifications${id}" class="toggleCard border-b-0 title justify-between mt-6 h-[60px] flex items-center  border rounded-[8px] rounded-br-none rounded-bl-none pl-[20px] text-2xl font-semibold">
                            <h2>Css</h2>
                            <i class="cursor-pointer pr-[30px] fa-solid fa-chevron-down"></i>
                        </div>
                        <div id="cardCertifications${id}" class="cardSection p-[20px] border rounded-[8px] rounded-tr-none border-t-0 rounded-tl-none inputsContainer grid grid-cols-3 gap-10">
                            <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                <div class="text-2xl font-bold">
                                    <label for="">Certification Name</label>
                                </div>
                                <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                    <input oninput="ChangeTheCardName(this , '#Certifications${id} h2')" placeholder="Html" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                </div>
                            </div>
                            <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                <div class="text-2xl font-bold">
                                    <label for="">Issuing Organization</label>
                                </div>
                                <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                    <input placeholder="Sololearn" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="text" name="" id="">
                                </div>
                            </div>
                            <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                <div class="text-2xl font-bold">
                                    <label for="">Certification URL (Optional)</label>
                                </div>
                                <div class="w-[100%] h-[40px] bg-[#E6E9F1]">
                                    <input placeholder="Url" class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="url" name="" id="">
                                </div>
                            </div>
                            <div class="inputItem w-[100%] flex flex-col gap-3  ">
                                <div class="text-2xl font-bold">
                                    <label for="">Date Obtained</label>
                                </div>
                                <div class="pr-[15px] w-[100%] h-[40px] bg-[#E6E9F1]">
                                    <input class="font-semibold text-1xl pl-[10px] w-[100%] h-[100%] bg-[#E6E9F1]" type="date" name="" id="">
                                </div>
                            </div>
                            
                            
                            
                            
                        </div>
            `;
            id++; // Increment ID for the next element

        }

    });
}
