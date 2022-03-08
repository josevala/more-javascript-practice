// weekday morning annoucer 
let announceMorning = function (name) {
   let weekday = new Date().toLocaleDateString(undefined,{weekday:"long"})
   let trimmedName = name.trim()
   let capitalizedFirstChar = trimmedName[0].toLocaleUpperCase()
   let lowerCaseRemainder = trimmedName.slice(1).toLocaleLowerCase()
   let capitalizedName =   capitalizedFirstChar + lowerCaseRemainder
    return "Good morning!, "
       + capitalizedName
       + ". It is now "
       + weekday 
       + "!";
}
let result = announceMorning ("fernando")
console.log(result)

let createAnnoucementHtml = function (name, headingLevel =1){
let message = announceMorning(name)
let startHeading = "<h" + headingLevel + ">"
let endHeading = "</h" + headingLevel + ">"
return startHeading + message + endHeading;
}
