function setElementText(selector, value) {
    var element = document.querySelector(selector);
    if (element) {
        element.innerHTML = value;
    } else {
        console.error("Element not found for selector:", selector);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var name_appo = localStorage.getItem("uname");
console.log("Name:", name_appo);
setElementText(".name_appo", name_appo);
setElementText(".name_appo1", name_appo);
setElementText(".name_appo2", name_appo);

var designation = localStorage.getItem("designation");
console.log("Designation:", designation);
setElementText(".designation", designation);
setElementText(".designation1", designation);
setElementText(".designation2", designation);

var schoolName = localStorage.getItem("school");
console.log("School Name:", schoolName);
setElementText(".school_name", schoolName);

var appDate = localStorage.getItem("app_date");
console.log("Appointment Date:", appDate);
setElementText(".appo_date", appDate);
setElementText(".appo_date1", appDate);
setElementText(".appo_date2", appDate);

var educationalOfficer = localStorage.getItem("edn_offcr");
console.log("Educational Officer:", educationalOfficer);
setElementText(".edn_officer", educationalOfficer);
});


