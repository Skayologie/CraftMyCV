
export default regExpression = function (regType,inputVal,InputId) {
    if (regType === "email") {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(emailPattern.test(inputVal))
        if (emailPattern.test(inputVal)) {
            document.getElementById(InputId).style.display = "none"
            return validation = true 
        }else{
            document.getElementById(InputId).style.display = "block"
        }
    }
    if (regType === "fullName") {
        const fullNamePattern = /^[a-zA-Z\s]{2,30}$/;
        console.log(fullNamePattern.test(inputVal))
        if (fullNamePattern.test(inputVal)) {
            document.getElementById(InputId).style.display = "none"
            return validation = true 
        }else{
            document.getElementById(InputId).style.display = "block"
        }
    }
}  


