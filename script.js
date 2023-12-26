function resetFunction() {
    // Resetting inputs on button click
    var inputs = ["namea", "address", "desig", "school", "appo_date_from", "appo_date_to"];
    inputs.forEach(inputId => {
      document.getElementById(inputId).value = "";
    });
  
    document.getElementById("submit").className = "btn btn-primary";
  }
  function printFunction() {
    var schoolData = {
        "St.Mary’s LPS Adivaram": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Adivaram" },
        "St.John’s LPS Amparanirappel": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Amparanirappel" },
        "St.Mathew’s LPS Anthiyalam": { edn_office: "Asst. Educational Officer, Pala", place: "Anthiyalam" },
        "St.Mary’s LPS Aruvithura": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Aruvithura" },
        "Little Flower LPS  Ayyampara": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Ayyampara" },
        "St.Little Thresias LPS Bharananganam": { edn_office: "Asst. Educational Officer, Pala", place: "Bharananganam" },
        "St.Thomas LPS Cheenkallel": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Cheenkallel" },
        "St.Joseph’s LPS Chettuthode": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Chettuthode" },
        "St.George LPS Chittar": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Chittar" },
        "St.Peter’s LPS Elanji": { edn_office: "Asst. Educational Officer, Koothattukulam", place: "Elanji" },
        "St.George LPS Elivalley": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Elivalley" },
        "St.John’s LP Ezhachery": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Ezhachery" },
        "St.Mathew’s LPS Kadanad": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Kadanad" },
        "St.Joseph’s LPS Kadaplamattom": { edn_office: "Asst. Educational Officer, Ettumanoor", place: "Kadaplamattom" },
        "St.George LPS Kaduthuruthy": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kaduthuruthy" },
        "St.Mary’s LPS Kakkombe": { edn_office: "Asst. Educational Officer, Arakulam", place: "Kakkombe" },
        "Sr.Alphonsa LPS Kalathukadavu": { edn_office: "Asst. Educational Officer, Pala", place: "Kalathukadavu" },
        "Holy Cross LPS Kalathoor": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kalathoor" },
        "St.Mary’s LPS Kalathoor": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kalathoor" },
        "St.Joseph’s LPS Kanjar": { edn_office: "Asst. Educational Officer, Arakulam", place: "Kanjar" },
        "Little Flower LPS Kanjiramattam": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Kanjiramattam" },
        "St.Antony’s LPS Koodalloor": { edn_office: "Asst. Educational Officer, Ettumanoor", place: "Koodalloor" },
        "St.Joseph’s LPS Kudakkachira": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Kudakkachira" },
        "St.Augustine’s LPS Kudayathoor": { edn_office: "Asst. Educational Officer, Arakulam", place: "Kudayathoor" },
        "St.Mary’s LPBS Kuravilangad": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kuravilangad" },
        "St.Mary’s LPGS Kuravilangad": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kuravilangad" },
        "St.Xavier’s LPS Kuruppanthara": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kuruppanthara" },
        "St.Michael’s LPS Kuruvinal": { edn_office: "Asst. Educational Officer, Pala", place: "Kuruvinal" },
        "St.Mary’s LPS Lalam": { edn_office: "Asst. Educational Officer, Pala", place: "Lalam" },
        "Holy Family LPS Manalumkal": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Manalumkal" },
        "Manchadimattom  LPS Marangad": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Marangad" },
        "St.Thomas LPS Mangalagiri": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Mangalagiri" },
        "St.Thomas LPS Marangattupilly": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Marangattupilly" },
        "St.Mary’s LPS Maridom": { edn_office: "Asst. Educational Officer, Ettumanoor", place: "Maridom" },
        "St.Mary’s LPS Maryland": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Maryland" },
        "St.Antony’s LPS Mattakara": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Mattakara" },
        "Meenachil  Aided LPS": { edn_office: "Asst. Educational Officer, Pala", place: "Meenachil" },
        "St.Mary’s LPS Moozhoor": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Moozhoor" },
        "St.Antony’s LPS Mulakulam": { edn_office: "Asst. Educational Officer, Piravom", place: "Mulakulam" },
        "St.George LPS Mutholapuram": { edn_office: "Asst. Educational Officer, Koothattukulam", place: "Mutholapuram" },
        "St.Paul’s LPS Mutholapuram": { edn_office: "Asst. Educational Officer, Koothattukulam", place: "Mutholapuram" },
        "St.George LPS Mutholy": { edn_office: "Asst. Educational Officer, Pala", place: "Mutholy" },
        "St.Agnes LPS Muttuchira": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Muttuchira" },
        "St.Antony’s LPS Paduva": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Paduva" },
        "Little Flower LPS Paika": { edn_office: "Asst. Educational Officer, Pala", place: "Paika" },
        "St.Antony’s LPS Palakara": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Palakara" },
        "St.Sebastian’s LPS Pathazha": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Pathazha" },
        "St.Augustine’s LPS Pravithanam": { edn_office: "Asst. Educational Officer, Pala", place: "Pravithanam" },
        "North LPS Ramapuram": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Ramapuram" },
        "Sacred Heart LPS Ramapuram": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Ramapuram" },
        "St.Mary’s LPS Teekoy": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Teekoy" },
        "Infant Jesus LPS Thodanal": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Thodanal" },
        "St.Thomas LPS Thudanganad": { edn_office: "Asst. Educational Officer, Arakulam", place: "Thudanganad" },
        "St.George LPS Thuruthippally": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Thuruthippally" },
        "Little Flower LPS Vadakara": { edn_office: "Asst. Educational Officer, Koothattukulam", place: "Vadakara" },
        "St.George LPS Vailkanampara": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Vailkanampara" },
        "St.Paul’s LPS Vakakkad": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Vakakkad" },
        "St.Cruz LPS Valachira": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Valachira" },
        "St.Mary’s LP Valiyakumaramangalam": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Valiyakumaramangalam" },
        "St.ThomasLPS Velathussery": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Velathussery" },
        "St.Joseph’s LPS Vellilappilly": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Vellilappilly" },
        "KCM, LPS Vettickanam": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Vettickanam" },
        "St.Joseph’s LPS Vezhanganam": { edn_office: "Asst. Educational Officer, Pala", place: "Vezhanganam" },
        "Our Lady of Fathima LP S Vilayamcode": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Vilayamcode" },
        "St.Thomas UPS Arakulam": { edn_office: "Asst. Educational Officer, Arakulam", place: "Arakulam" },
        "St.Antony’s UPS Edamaruku": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Edamaruku" },
        "St.Mary’s UPS Kalathoor": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Kalathoor" },
        "St.Joseph’s UPS Kannadiurumpu": { edn_office: "Asst. Educational Officer, Pala", place: "Kannadiurumpu" },
        "St.Joseph’s UPS Karoor": { edn_office: "Asst. Educational Officer, Pala", place: "Karoor" },
        "St.Ephrem’s UPS Kaveekunnu": { edn_office: "Asst. Educational Officer, Pala", place: "Kaveekunnu" },
        "St.Xavier’s UPS Kooru": { edn_office: "Asst. Educational Officer, Koothattukulam", place: "Kooru" },
        "St.Joseph’s UPS Kunnonny": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Kunnonny" },
        "St.Joseph’s UPS Malayinchippara": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Malayinchippara" },
        "St.Dominic Savio UPS Mallikassery": { edn_office: "Asst. Educational Officer, Kanjirappally", place: "Mallikassery" },
        "St.Joseph’s UPS Maniankunnu": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Maniankunnu" },
        "St.George UPS Manvettam": { edn_office: "Asst. Educational Officer, Kuravilangad", place: "Manvettam" },
        "Holy Cross UPS Mattathippara": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Mattathippara" },
        "St.Thomas UPS Melukavumattom": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Melukavumattom" },
        "St.George UPS Moolamattom": { edn_office: "Asst. Educational Officer, Arakulam", place: "Moolamattom" },
        "Little Flower UPS Mundankal": { edn_office: "Asst. Educational Officer, Pala", place: "Mundankal" },
        "St.Mary Magd.UPS Narianganam": { edn_office: "Asst. Educational Officer, Pala", place: "Narianganam" },
        "St.Joseph’s UPS Neeloor": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Neeloor" },
        "St.Thomas UPS Neeranthanam": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Neeranthanam" },
        "St.Antony’s  UPS Paduva": { edn_office: "Asst. Educational Officer, Kozhuvanal", place: "Paduva" },
        "St.Xavier’s UPS Palayam": { edn_office: "Asst. Educational Officer, Pala", place: "Palayam" },
        "SVE UPS  Parathanam": { edn_office: "Asst. Educational Officer, Kanjirappally", place: "Parathanam" },
        "St.Pius X UPS Pius Mount": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Mount" },
        "St.Joseph’s UPS Poonjar": { edn_office: "Asst. Educational Officer, Erattupetta", place: "Poonjar" },
        "St.Thomas UPS Poovathode": { edn_office: "Asst. Educational Officer, Pala", place: "Poovathode" },
        "Kalanilayam UPS Puliyannoor": { edn_office: "Asst. Educational Officer, Pala", place: "Puliyannoor" },
        "Sacred Heart’s UPS Ullanad": { edn_office: "Asst. Educational Officer, Pala", place: "Ullanad" },
        "St.George UPS Urulikunnam": { edn_office: "Asst. Educational Officer, Kanjirappally", place: "Urulikunnam" },
        "St.Joseph’s UPS Vellilappilly": { edn_office: "Asst. Educational Officer, Ramapuram", place: "Vellilappilly" },
        "St.Joseph’s UPS Velliyamattom": { edn_office: "Asst. Educational Officer, Thodupuzha", place: "Velliyamattom" },
        "St.Thresias UPS Vilakumadom": { edn_office: "Asst. Educational Officer, Pala", place: "Vilakumadom" },
        "St.Mary’s HSS Arakulam": { edn_office: "Dist. Educational Officer, Thodupuzha ", place: "Arakulam" },
        "St.George HSS Aruvithura": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Aruvithura" },
        "St.Mary’s HSS Bharananganam": { edn_office: "Dist. Educational Officer, Pala", place: "Bharananganam" },
        "L.F HS Chemmalamattom": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Chemmalamattom" },
        "St.Maria Gorettis HS Chennad": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Chennad" },
        "Holy Cross HSS Cherpunkal": { edn_office: "Dist. Educational Officer, Pala", place: "Cherpunkal" },
        "St.Peter’s HSS Elanji": { edn_office: "Dist. Educational Officer, Muvattupuzha", place: "Elanji" },
        "St.Sebastians HSS Kadanad": { edn_office: "Dist. Educational Officer, Pala", place: "Kadanad" },
        "St.Antony’s HS Kadaplamattom": { edn_office: "Dist. Educational Officer, Pala", place: "Kadaplamattom" },
        "LF HS Kanjiramattom": { edn_office: "Dist. Educational Officer, Kottayam", place: "Kanjiramattom" },
        "St.Johns HS Kanjirathanam": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Kanjirathanam" },
        "St.George HS Koottickal": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Koottickal" },
        "Emmanuels HSS Kothanalloor": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Kothanalloor" },
        "St.Johns NHSS Kozhuvanal": { edn_office: "Dist. Educational Officer, Pala", place: "Kozhuvanal" },
        "St.Josephs HS Kudakkachira": { edn_office: "Dist. Educational Officer, Pala", place: "Kudakkachira" },
        "St.Mary’s GHS Kuravilangad": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Kuravilangad" },
        "St.Mary’s HSS Kuravilangad": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Kuravilangad" },
        "St.John’s HS Kurumannu": { edn_office: "Dist. Educational Officer, Pala", place: "Kurumannu" },
        "St.Xaviers VHSS Kuruppanthara": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Kuruppanthara" },
        "St.Aloysious HS Manalumkal": { edn_office: "Dist. Educational Officer, Kottayam", place: "Manalumkal" },
        "St.Joseph’s HS Manathoor": { edn_office: "Dist. Educational Officer, Pala", place: "Manathoor" },
        "St.Thomas HS Marangattupally": { edn_office: "Dist. Educational Officer, Pala", place: "Marangattupally" },
        "St.Joseph’s HS Mattakara": { edn_office: "Dist. Educational Officer, Kottayam", place: "Mattakara" },
        "St.Paul’s HS Mutholapuram": { edn_office: "Dist. Educational Officer, Muvattupuzha", place: "Mutholapuram" },
        "St.Joseph’s GHS Mutholy": { edn_office: "Dist. Educational Officer, Pala", place: "Mutholy" },
        "St.Joseph’s TTI Mutholy": { edn_office: "Dist. Educational Officer, Pala", place: "Mutholy" },
        "Holy Ghost BHS Muttuchira": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Muttuchira" },
        "St.Agnes GHS Muttuchira": { edn_office: "Dist. Educational Officer, Kaduthuruthy", place: "Muttuchira" },
        "St.Mary’s GHSS Pala": { edn_office: "Dist. Educational Officer, Pala", place: "Pala" },
        "St.Thomas BHSS Pala": { edn_office: "Dist. Educational Officer, Pala", place: "Pala" },
        "St.Thomas TTI Pala": { edn_office: "Dist. Educational Officer, Pala", place: "Pala" },
        "St.Augustines HS Peringulam": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Peringulam" },
        "St.Antony’s HSS Plassanal": { edn_office: "Dist. Educational Officer, Pala", place: "Plassanal" },
        "St.Michael’s HS Pravithanam": { edn_office: "Dist. Educational Officer, Pala", place: "Pravithanam" },
        "SH GHS Ramapuram": { edn_office: "Dist. Educational Officer, Pala", place: "Ramapuram" },
        "St.Augustin’s HSS Ramapuram": { edn_office: "Dist. Educational Officer, Pala", place: "Ramapuram" },
        "St.Mary’s HSS Teekoy": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Teekoy" },
        "St.Thomas HS Thudanganad": { edn_office: "Dist. Educational Officer, Thodupuzha ", place: "Thudanganad" },
        "LF HS Vadakara": { edn_office: "Dist. Educational Officer, Muvattupuzha", place: "Vadakara" },
        "Alphonsa GHS Vakakkad": { edn_office: "Dist. Educational Officer, Pala", place: "Vakakkad" },
        "St. Paul’s HS  Valiyakumaramangalam": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Valiyakumaramangalam" },
        "St.Antony’s HS Vellikulam": { edn_office: "Dist. Educational Officer, Kanjirappally", place: "Vellikulam" },
        "St.Joseph’s HS Vilakkumadom": { edn_office: "Dist. Educational Officer, Pala", place: "Vilakkumadom" }        
      // Add data for other schools...
    };
  
    var name_appo = getValueAndSetLocalStorage("namea", "uname");
    var address = getValueAndSetLocalStorage("address", "address");
    var design = getValueAndSetLocalStorage("desig", "designation");
    var school = getValueAndSetLocalStorage("school", "school");
    
    if (schoolData[school]) {
      localStorage.setItem("edn_offcr", schoolData[school].edn_office);
      localStorage.setItem("place", schoolData[school].place);
    }
  
    var appo_date = getValueAndSetLocalStorage("appo_date_from", "app_date");
    var appo_date_to = getValueAndSetLocalStorage("appo_date_to", "to_date", "Onwards", "to");
  
    // SUBMIT BUTTON TO GREEN ON CLICK
    var submitButton = document.getElementById("submit");
    if (submitButton.className !== "btn btn-success") {
      submitButton.className = "btn btn-success";
    }
  
    printPage();
  }

  function getValueAndSetLocalStorage(inputId, localStorageKey, suffix = "") {
    var value = document.getElementById(inputId).value;
    localStorage.setItem(localStorageKey, String(value) + suffix);
    return value;
  }
  function printPage() {
    var div = document.getElementById("printerDecla");
    var div2 = document.getElementById("printerAffi");
    div.innerHTML = '<iframe src="declaration.html" onload="this.contentWindow.print();"></iframe>';
    div2.innerHTML = '<iframe src="affidavit.html" onload="this.contentWindow.print();"></iframe>';
  }