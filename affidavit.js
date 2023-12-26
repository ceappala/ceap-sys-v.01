// Function to set text content of an element
function setElementText(selector, value) {
    document.querySelector(selector).innerHTML = value;
}

// Retrieve and modify data from localStorage
var name_appo = localStorage.getItem("uname").replace(/Sri\.|Smt\./, "").trim();
var addr = localStorage.getItem("address");
var designation = localStorage.getItem("designation");
var school = localStorage.getItem("school");
var app_d = localStorage.getItem("app_date");
var app_t_d = localStorage.getItem("to_date");
var place = localStorage.getItem("place");

// Set data in the HTML
setElementText(".name_appo", name_appo);
setElementText(".address", addr);
setElementText(".designation", designation);
setElementText(".school_name", school);
setElementText(".appointment_dt, .appointment_dt2", app_d);
setElementText(".app_to_date", app_t_d);
setElementText(".place", place);
