function resetFunction() {
  /* RESETING INPUTS ON BUTTON CLICK*/
  document.getElementById("namea").value = "";
  document.getElementById("address").value = "";
  document.getElementById("desig").value = "";
  document.getElementById("school").value = "";
  document.getElementById("appo_date_from").value = "";
  document.getElementById("appo_date_to").value = "";

  document.getElementById("submit").className = "btn btn-primary";
}
function printFunction() {
  var name_appo = document.getElementById("namea").value;
  name_appo = String(name_appo);
  localStorage.setItem("uname", name_appo);
  var address = document.getElementById("address").value;
  address = String(address);
  localStorage.setItem("address", address);
  var design = document.getElementById("desig").value;
  design = String(design);
  localStorage.setItem("designation", design);
  var school = document.getElementById("school").value;
  school = String(school);
  localStorage.setItem("school", school);
  var place;
  var edn_office;
  if (school == "St. Mary’s LPS Adivaram") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Adivaram";
  } else if (school == "St. John’s LPS Amparanirappel") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Amparanirappel";
  } else if (school == "St. Mathew’s LPS Anthiyalam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Anthiyalam";
  } else if (school == "St. Mary’s HSS Arakulam") {
    edn_office = "Dist. Educational Officer,  Thodupuzha ";
    place = "Arakulam";
  } else if (school == "St. Thomas UPS Arakulam") {
    edn_office = "Asst. Educational Officer, Arakulam";
    place = "Arakulam";
  } else if (school == "St. George HSS Aruvithura") {
    edn_office = "Dist. Educational Officer,  Kanjirappally";
    place = "Aruvithura";
  } else if (school == "St. Mary’s LPS Aruvithura") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Aruvithura";
  } else if (school == "Little Flower LPS Ayyampara") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Ayyampara";
  } else if (school == "St. Little Thresias LPS Bharananganam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Bharananganam";
  } else if (school == "St. Mary’s HSS Bharananganam") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Bharananganam";
  } else if (school == "St. Thomas LPS Cheenkallel") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Cheenkallel";
  } else if (school == "Little Flower HS Chemmalamattom") {
    edn_office = "Dist. Educational Officer,  Kanjirappally";
    place = "Chemmalamattom";
  } else if (school == "St. Maria Gorettis HS Chennad") {
    edn_office = "Dist. Educational Officer,  Kanjirappally";
    place = "Chennad";
  } else if (school == "Holy Cross HSS Cherpunkal") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Cherpunkal";
  } else if (school == "St. Joseph’s LPS Chettuthode") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Chettuthode";
  } else if (school == "St. George LPS Chittar") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Chittar";
  } else if (school == "St. Antony’s UPS Edamaruku") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Edamaruku";
  } else if (school == "St. Peter’s HSS Elanji") {
    edn_office = "Dist. Educational Officer,  Muvattupuzha";
    place = "Elanji";
  } else if (school == "St. Peter’s LPS Elanji") {
    edn_office = "Asst. Educational Officer, Koothattukulam";
    place = "Elanji";
  } else if (school == "St. George LPS Elivalley") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Elivalley";
  } else if (school == "St. John’s LPS Ezhachery") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Ezhachery";
  } else if (school == "St. Mathew’s LPS Kadanad") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Kadanad";
  } else if (school == "St. Sebastians HSS Kadanad") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Kadanad";
  } else if (school == "St. Antony’s HS Kadaplamattom") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Kadaplamattom";
  } else if (school == "St. Joseph’s LPS Kadaplamattom") {
    edn_office = "Asst. Educational Officer, Ettumanoor";
    place = "Kadaplamattom";
  } else if (school == "St. George LPS Kaduthuruthy") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kaduthuruthy";
  } else if (school == "St. Mary’s LPS Kakkombe") {
    edn_office = "Asst. Educational Officer, Arakulam";
    place = "Kakkombe";
  } else if (school == "Holy Cross LPS Kalathoor") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kalathoor";
  } else if (school == "St. Mary’s LPS Kalathoor") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kalathoor";
  } else if (school == "St. Mary’s UPS Kalathoor") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kalathoor";
  } else if (school == "Sr.Alphonsa LPS Kalathukadavu") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Kalathukadavu";
  } else if (school == "St. Joseph’s LPS Kanjar") {
    edn_office = "Asst. Educational Officer, Arakulam";
    place = "Kanjar";
  } else if (school == "Little Flower HS Kanjiramattom") {
    edn_office = "Dist. Educational Officer,  Kottayam";
    place = "Kanjiramattom";
  } else if (school == "Little Flower LPS Kanjiramattom") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Kanjiramattom";
  } else if (school == "St. Johns HS Kanjirathanam") {
    edn_office = "Dist. Educational Officer,  Kaduthuruthy";
    place = "Kanjirathanam";
  } else if (school == "St. Joseph’s UPS Kannadiurumpu") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Kannadiurumpu";
  } else if (school == "St. Joseph’s UPS Karoor") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Karoor";
  } else if (school == "St. Ephrem’s UPS Kaveekunnu") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Kaveekunnu";
  } else if (school == "St. Antony’s LPS Koodalloor") {
    edn_office = "Asst. Educational Officer, Ettumanoor";
    place = "Koodalloor";
  } else if (school == "St. Xavier’s UPS Kooru") {
    edn_office = "Asst. Educational Officer, Koothattukulam";
    place = "Kooru";
  } else if (school == "St. George HS Koottickal") {
    edn_office = "Dist. Educational Officer,  Kanjirappally";
    place = "Koottickal";
  } else if (school == "Emmanuels HSS Kothanalloor") {
    edn_office = "Dist. Educational Officer,  Kaduthuruthy";
    place = "Kothanalloor";
  } else if (school == "St. Johns NHSS Kozhuvanal") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Kozhuvanal";
  } else if (school == "St. Joseph’s LPS Kudakkachira") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Kudakkachira";
  } else if (school == "St. Joseph's HS Kudakkachira") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Kudakkachira";
  } else if (school == "St. Augustine’s LPS Kudayathoor") {
    edn_office = "Asst. Educational Officer, Arakulam";
    place = "Kudayathoor";
  } else if (school == "St. Joseph’s UPS Kunnonny") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Kunnonny";
  } else if (school == "St. Mary’s GHS Kuravilangad") {
    edn_office = "Dist. Educational Officer,  Kaduthuruthy";
    place = "Kuravilangad";
  } else if (school == "St. Mary’s HSS Kuravilangad") {
    edn_office = "Dist. Educational Officer, Kaduthuruthy";
    place = "Kuravilangad";
  } else if (school == "St. Mary’s LPBS Kuravilangad") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kuravilangad";
  } else if (school == "St. Mary’s LPGS Kuravilangad") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kuravilangad";
  } else if (school == "St. John’s HS Kurumannu") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Kurumannu";
  } else if (school == "St. Xavier’s LPS Kuruppanthara") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Kuruppanthara";
  } else if (school == "St. Xaviers VHSS Kuruppanthara") {
    edn_office = "Dist. Educational Officer,  Kaduthuruthy";
    place = "Kuruppanthara";
  } else if (school == "St. Michael’s LPS Kuruvinal") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Kuruvinal";
  } else if (school == "St. Mary’s LPS Lalam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Lalam";
  } else if (school == "St. Joseph’s UPS Malayinchippara") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Malayinchippara";
  } else if (school == "St. Dominic Savio UPS Mallikassery") {
    edn_office = "Asst. Educational Officer, Kanjirappally";
    place = "Mallikassery";
  } else if (school == "Holy Family LPS Manalumkal") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Manalumkal";
  } else if (school == "St. Aloysious HS Manalumkal") {
    edn_office = "Dist. Educational Officer,  Kottayam";
    place = "Manalumkal";
  } else if (school == "St. Joseph’s HS Manathoor") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Manathoor";
  } else if (school == "St. Thomas LPS Mangalagiri") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Mangalagiri";
  } else if (school == "St. Joseph’s UPS Maniankunnu") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Maniankunnu";
  } else if (school == "St. George UPS  Manvettam") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Manvettam";
  } else if (school == "St. Thomas HS Marangattupally") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Marangattupally";
  } else if (school == "St. Thomas LPS Marangattupilly") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Marangattupilly";
  } else if (school == "St. Mary’s LPS Maridom") {
    edn_office = "Asst. Educational Officer, Ettumanoor";
    place = "Maridom";
  } else if (school == "St. Mary’s LPS Maryland") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Maryland";
  } else if (school == "St. Antony’s LPS Mattakara") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Mattakara";
  } else if (school == "St. Joseph’s HS Mattakara") {
    edn_office = "Dist. Educational Officer,  Kottayam";
    place = "Mattakara";
  } else if (school == "Holy Cross UPS Mattathippara") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Mattathippara";
  } else if (school == "Aided LPS Meenachil") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Meenachil";
  } else if (school == "St. Thomas UPS Melukavumattom") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Melukavumattom";
  } else if (school == "St. George UPS Moolamattom") {
    edn_office = "Asst. Educational Officer, Arakulam";
    place = "Moolamattom";
  } else if (school == "St. Mary’s LPS Moozhoor") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Moozhoor";
  } else if (school == "St. Antony’s LPS Mulakulam") {
    edn_office = "Asst. Educational Officer, Piravom";
    place = "Mulakulam";
  } else if (school == "Little Flower UPS Mundankal") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Mundankal";
  } else if (school == "St. George LPS Mutholapuram") {
    edn_office = "Asst. Educational Officer, Koothattukulam";
    place = "Mutholapuram";
  } else if (school == "St. Paul’s HS Mutholapuram") {
    edn_office = "Dist. Educational Officer,  Muvattupuzha";
    place = "Mutholapuram";
  } else if (school == "St. Paul’s LPS Mutholapuram") {
    edn_office = "Asst. Educational Officer, Koothattukulam";
    place = "Mutholapuram";
  } else if (school == "St. George LPS Mutholy") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Mutholy";
  } else if (school == "St. Joseph’s GHS Mutholy") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Mutholy";
  } else if (school == "St. Joseph’s TTI  Mutholy") {
    edn_office = "Dist. Educational Officer,  Palai";
    place = "Mutholy";
  } else if (school == "Holy Ghost BHS Muttuchira") {
    edn_office = "Dist. Educational Officer,  Kuravilangad";
    place = "Muttuchira";
  } else if (school == "St. Agnes HS Muttuchira") {
    edn_office = "Dist. Educational Officer,  Kaduthuruthy";
    place = "Muttuchira";
  } else if (school == "St. Agnes LPS Muttuchira") {
    edn_office = "Asst. Educational Officer, Kaduthuruthy";
    place = "Muttuchira";
  } else if (school == "St. Mary Magdalene UPS Narianganam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Narianganam";
  } else if (school == "St. Joseph’s UPS Neeloor") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Neeloor";
  } else if (school == "St. Thomas UPS Neeranthanam") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Neeranthanam";
  } else if (school == "St. Antony’s  UPS Paduva") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Paduva";
  } else if (school == "St. Antony’s LPS Paduva") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Paduva";
  } else if (school == "Little Flower LPS Paika") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Paika";
  } else if (school == "St. Mary’s GHSS Pala") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Pala";
  } else if (school == "St. Thomas BHSS Pala") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Pala";
  } else if (school == "St. Thomas TTI  Pala") {
    edn_office = "Dist. Educational Officer,  Palai";
    place = "Pala";
  } else if (school == "St. Antony’s LPS Palakara") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Palakara";
  } else if (school == "St. Xavier’s UPS Palayam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Palayam";
  } else if (school == "SVE UPS  Parathanam") {
    edn_office = "Asst. Educational Officer, Kanjirappally";
    place = "Parathanam";
  } else if (school == "St. Sebastian’s LPS Pathazha") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Pathazha";
  } else if (school == "St. Augustines HS Peringulam") {
    edn_office = "Dist. Educational Officer,  Kanjirappally";
    place = "Peringulam";
  } else if (school == "St. Pius X UPS PiusMount") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "PiusMount";
  } else if (school == "St. Antony’s HSS Plassanal") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Plassanal";
  } else if (school == "St. Joseph’s UPS Poonjar") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Poonjar";
  } else if (school == "St. Thomas UPS Poovathode") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Poovathode";
  } else if (school == "St. Augustine’s LPS Pravithanam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Pravithanam";
  } else if (school == "St. Michael’s HSS Pravithanam") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Pravithanam";
  } else if (school == "Kalanilayam UPS Puliyannoor") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Puliyannoor";
  } else if (school == "North LPS Ramapuram") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Ramapuram";
  } else if (school == "Sacred Heart LPS Ramapuram") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Ramapuram";
  } else if (school == "Sacred Heart GHS Ramapuram") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Ramapuram";
  } else if (school == "St. Augustine’s HSS Ramapuram") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Ramapuram";
  } else if (school == "St. Mary’s HSS Teekoy") {
    edn_office = "Dist. Educational Officer,  Erattupetta";
    place = "Teekoy";
  } else if (school == "St. Mary’s LPS Teekoy") {
    edn_office = "Asst. Educational Officer, Kanjirappally";
    place = "Teekoy";
  } else if (school == "Infant Jesus LPS Thodanal") {
    edn_office = "Asst. Educational Officer, Kozhuvanal";
    place = "Thodanal";
  } else if (school == "St. Thomas HS Thudanganad") {
    edn_office = "Dist. Educational Officer,  Thodupuzha ";
    place = "Thudanganad";
  } else if (school == "St. Thomas LPS Thudanganad") {
    edn_office = "Asst. Educational Officer, Arakulam";
    place = "Thudanganad";
  } else if (school == "St. George LPS Thuruthippally") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Thuruthippally";
  } else if (school == "Sacred Heart’s UPS Ullanad") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Ullanad";
  } else if (school == "St. George UPS Urulikunnam") {
    edn_office = "Asst. Educational Officer, Kanjirappally";
    place = "Urulikunnam";
  } else if (school == "Little Flower HS Vadakara") {
    edn_office = "Dist. Educational Officer,  Koothattukulam";
    place = "Vadakara";
  } else if (school == "Little Flower LPS Vadakara") {
    edn_office = "Asst. Educational Officer, Koothattukulam";
    place = "Vadakara";
  } else if (school == "St. George LPS Vailkanampara") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Vailkanampara";
  } else if (school == "Alphonsa GHS Vakakkad") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Vakakkad";
  } else if (school == "St. Paul’s LPS Vakakkad") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Vakakkad";
  } else if (school == "St. Cruz LPS Valachira") {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Valachira";
  } else if (school == "St.  Paul’s HS Valiyakumaramangalam") {
    edn_office = "Dist. Educational Officer,  Erattupetta";
    place = "Valiyakumaramangalam";
  } else if (school == "St. Mary’s LP Valiyakumaramangalam") {
    edn_office = "Asst. Educational Officer, Kanjirappally";
    place = "Valiyakumaramangalam";
  } else if (school == "St. Thomas LPS Velathussery") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Velathussery";
  } else if (school == "St. Antony’s HS Vellikulam") {
    edn_office = "Dist. Educational Officer,  Kanjirappally";
    place = "Vellikulam";
  } else if (school == "St. Joseph’s LPS Vellilappilly") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Vellilappilly";
  } else if (school == "St. Joseph’s UPS Vellilappilly") {
    edn_office = "Asst. Educational Officer, Ramapuram";
    place = "Vellilappilly";
  } else if (school == "St. Joseph’s UPS Velliyamattom") {
    edn_office = "Asst. Educational Officer, Thodupuzha AEO";
    place = "Velliyamattom";
  } else if (school == "KCM LPS Vettickanam") {
    edn_office = "Asst. Educational Officer, Erattupetta";
    place = "Vettickanam";
  } else if (school == "St. Joseph’s LPS Vezhanganam") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Vezhanganam";
  } else if (school == "St. Joseph’s HS Vilakkumadom") {
    edn_office = "Dist. Educational Officer,  Pala";
    place = "Vilakkumadom";
  } else if (school == "St. Thresias UPS Vilakumadom") {
    edn_office = "Asst. Educational Officer, Pala";
    place = "Vilakumadom";
  } else {
    edn_office = "Asst. Educational Officer, Kuravilangad";
    place = "Vilayamcode";
  }

  localStorage.setItem("place", place);
  localStorage.setItem("edn_offcr", edn_office);

  var appo_date = document.getElementById("appo_date_from").value;
  localStorage.setItem("app_date", appo_date);

  var appo_date_to = document.getElementById("appo_date_to").value;

  var to = "to";
  var onwards = "Onwards";
  if (document.getElementById("appo_date_to").value =="") {
    appo_date_to = onwards;
  } else {
    appo_date_to = to.concat(
      " ",
      document.getElementById("appo_date_to").value
    );
  }
  localStorage.setItem("to_date", appo_date_to);

  /*SUBMIT BUTTON TO GREEN ON CLICK*/
  if (document.getElementById("submit").className == "btn btn-success")
    document.getElementById("submit").className = "btn btn-success";
  else document.getElementById("submit").className = "btn btn-success";

  
  printPage();
}
function printPage()
   {
      var div = document.getElementById("printerDecla");
      var div2 = document.getElementById("printerAffi");
      div.innerHTML = '<iframe src="declaration.html" onload="this.contentWindow.print();"></iframe>';
      div2.innerHTML = '<iframe src="affidavit.html" onload="this.contentWindow.print();"></iframe>';
   }
