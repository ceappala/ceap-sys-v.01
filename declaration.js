function setElementText(selector, value) {
    document.querySelector(selector).innerHTML = value;
}

var name_appo = localStorage.getItem("uname");
setElementText(".name_appo", name_appo);
setElementText(".name_appo1", name_appo);
setElementText(".name_appo2", name_appo);

var designation = localStorage.getItem("designation");
setElementText(".designation", designation);
setElementText(".designation1", designation);
setElementText(".designation2", designation);

setElementText(".school_name", localStorage.getItem("school"));
setElementText(".appo_date, .appo_date1, .appo_date2", localStorage.getItem("app_date"));
setElementText(".edn_officer", localStorage.getItem("edn_offcr"));
