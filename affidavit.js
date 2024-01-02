// Function to set text content of an element
function setElementText(selector, value) {
    var element = document.querySelector(selector);
    if (element) {
        // Use textContent instead of innerHTML for plain text
        element.textContent = value || ""; // Set an empty string if value is null or undefined
    } else {
        console.error("Element not found for selector:", selector);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve and modify data from localStorage
var name_appo = localStorage.getItem("uname");
var addr = localStorage.getItem("address");
var designation = localStorage.getItem("designation");
var school = localStorage.getItem("school");
var app_d = localStorage.getItem("app_date");
var place = localStorage.getItem("place");

// Additional checks and modifications
name_appo = name_appo ? name_appo.replace(/Sri\.|Smt\./, "").trim() : "";
var app_t_d = localStorage.getItem("to_date");
if (!app_t_d || app_t_d.trim() === "") {
    app_t_d = "Onwards";
}



// Set data in the HTML

setElementText(".name_appo", name_appo);
setElementText(".name_appo1", name_appo);
setElementText(".name_appo2", name_appo);
setElementText(".address", addr);
setElementText(".designation", designation);
setElementText(".designation1", designation);
setElementText(".designation2", designation);
setElementText(".school_name", school);
setElementText(".appointment_dt", app_d);
setElementText(".appointment_dt2", app_d);
setElementText(".app_to_date", app_t_d);
setElementText(".place", place);
});

