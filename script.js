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
  var edn_office;
  if (school == "St. Mary’s LPS Adivaram") {
    edn_office = "Asst. Educational Officer,Erattupetta";
  } else if (school =="St. John’s LPS Amparanirappel") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Mathew’s LPS Anthiyalam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Mary’s HSS Arakulam") {edn_office ="Dist. Educational Officer, Thodupuzha ";}
  else if (school =="St. Thomas UPS Arakulam") {edn_office ="Asst. Educational Officer,Arakulam";}
  else if (school =="St. George HSS Aruvithura") {edn_office ="Dist. Educational Officer, Kanjirappally";}
  else if (school =="St. Mary’s LPS Aruvithura") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="Little Flower LPS Ayyampara") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Little Thresias LPS Bharananganam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Mary’s HSS Bharananganam") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Thomas LPS Cheenkallel") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="Little Flower HS Chemmalamattom") {edn_office ="Dist. Educational Officer, Kanjirappally";}
  else if (school =="St. Maria Gorettis HS Chennad") {edn_office ="Dist. Educational Officer, Kanjirappally";}
  else if (school =="Holy Cross HSS Cherpunkal") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Joseph’s LPS Chettuthode") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. George LPS Chittar") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Antony’s UPS Edamaruku") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Peter’s HSS Elanji") {edn_office ="Dist. Educational Officer, Muvattupuzha";}
  else if (school =="St. Peter’s LPS Elanji") {edn_office ="Asst. Educational Officer,Koothattukulam";}
  else if (school =="St. George LPS Elivalley") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. John’s LPS Ezhachery") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Mathew’s LPS Kadanad") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Sebastians HSS Kadanad") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Antony’s HS Kadaplamattom") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Joseph’s LPS Kadaplamattom") {edn_office ="Asst. Educational Officer,Ettumanoor";}
  else if (school =="St. George LPS Kaduthuruthy") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Mary’s LPS Kakkombe") {edn_office ="Asst. Educational Officer,Arakulam";}
  else if (school =="Holy Cross LPS Kalathoor") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Mary’s LPS Kalathoor") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Mary’s UPS Kalathoor") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="Sr.Alphonsa LPS Kalathukadavu") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Joseph’s LPS Kanjar") {edn_office ="Asst. Educational Officer,Arakulam";}
  else if (school =="Little Flower HS Kanjiramattom") {edn_office ="Dist. Educational Officer, Kottayam";}
  else if (school =="Little Flower LPS Kanjiramattom") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="St. Johns HS Kanjirathanam") {edn_office ="Dist. Educational Officer, Kaduthuruthy";}
  else if (school =="St. Joseph’s UPS Kannadiurumpu") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Joseph’s UPS Karoor") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Ephrem’s UPS Kaveekunnu") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Antony’s LPS Koodalloor") {edn_office ="Asst. Educational Officer,Ettumanoor";}
  else if (school =="St. Xavier’s UPS Kooru") {edn_office ="Asst. Educational Officer,Koothattukulam";}
  else if (school =="St. George HS Koottickal") {edn_office ="Dist. Educational Officer, Kanjirappally";}
  else if (school =="Emmanuels HSS Kothanalloor") {edn_office ="Dist. Educational Officer, Kaduthuruthy";}
  else if (school =="St. Johns NHSS Kozhuvanal") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Joseph’s LPS Kudakkachira") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Joseph's HS Kudakkachira") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Augustine’s LPS Kudayathoor") {edn_office ="Asst. Educational Officer,Arakulam";}
  else if (school =="St. Joseph’s UPS Kunnonny") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Mary’s GHS Kuravilangad") {edn_office ="Dist. Educational Officer, Kaduthuruthy";}
  else if (school =="St. Mary’s HSS Kuravilangad") {edn_office ="Dist. Educational Officer, Kuravilangad";}
  else if (school =="St. Mary’s LPBS Kuravilangad") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Mary’s LPGS Kuravilangad") {edn_office ="Asst. Educational Officer,Kaduthuruthy";}
  else if (school =="St. John’s HS Kurumannu") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Xavier’s LPS Kuruppanthara") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Xaviers VHSS Kuruppanthara") {edn_office ="Dist. Educational Officer, Kaduthuruthy";}
  else if (school =="St. Michael’s LPS Kuruvinal") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Mary’s LPS Lalam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Joseph’s UPS Malayinchippara") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Dominic Savio UPS Mallikassery") {edn_office ="Asst. Educational Officer,Kanjirappally";}
  else if (school =="Holy Family LPS Manalumkal") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="St. Aloysious HS Manalumkal") {edn_office ="Dist. Educational Officer, Kottayam";}
  else if (school =="St. Joseph’s HS Manathoor") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Thomas LPS Mangalagiri") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Joseph’s UPS Maniankunnu") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. George UPS  Manvettam") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Thomas HS Marangattupally") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Thomas LPS Marangattupilly") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Mary’s LPS Maridom") {edn_office ="Asst. Educational Officer,Ettumanoor";}
  else if (school =="St. Mary’s LPS Maryland") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Antony’s LPS Mattakara") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="St. Joseph’s HS Mattakara") {edn_office ="Dist. Educational Officer, Kottayam";}
  else if (school =="Holy Cross UPS Mattathippara") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="Aided LPS Meenachil") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Thomas UPS Melukavumattom") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. George UPS Moolamattom") {edn_office ="Asst. Educational Officer,Arakulam";}
  else if (school =="St. Mary’s LPS Moozhoor") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="St. Antony’s LPS Mulakulam") {edn_office ="Asst. Educational Officer,Piravom";}
  else if (school =="Little Flower UPS Mundankal") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. George LPS Mutholapuram") {edn_office ="Asst. Educational Officer,Koothattukulam";}
  else if (school =="St. Paul’s HS Mutholapuram") {edn_office ="Dist. Educational Officer, Koothattukulam";}
  else if (school =="St. Paul’s LPS Mutholapuram") {edn_office ="Asst. Educational Officer,Muvattupuzha";}
  else if (school =="St. George LPS Mutholy") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Joseph’s GHS Mutholy") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Joseph’s TTI  Mutholy") {edn_office ="Dist. Educational Officer, Palai";}
  else if (school =="Holy Ghost BHS Muttuchira") {edn_office ="Dist. Educational Officer, Kuravilangad";}
  else if (school =="St. Agnes GHS Muttuchira") {edn_office ="Dist. Educational Officer, Kaduthuruthy";}
  else if (school =="St. Agnes LPS Muttuchira") {edn_office ="Asst. Educational Officer,Kaduthuruthy";}
  else if (school =="St. Mary Magdalene UPS Narianganam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Joseph’s UPS Neeloor") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Thomas UPS Neeranthanam") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Antony’s  UPS Paduva") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="St. Antony’s LPS Paduva") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="Little Flower LPS Paika") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Mary’s GHSS Pala") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Thomas BHSS Pala") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Thomas TTI  Pala") {edn_office ="Dist. Educational Officer, Palai";}
  else if (school =="St. Antony’s LPS Palakara") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St. Xavier’s UPS Palayam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="SVE UPS  Parathanam") {edn_office ="Asst. Educational Officer,Kanjirappally";}
  else if (school =="St. Sebastian’s LPS Pathazha") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Augustines HS Peringulam") {edn_office ="Dist. Educational Officer, Kanjirappally";}
  else if (school =="St. Pius X UPS PiusMount") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Antony’s HSS Plassanal") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Joseph’s UPS Poonjar") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Thomas UPS Poovathode") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Augustine’s LPS Pravithanam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Michael’s HSS Pravithanam") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="Kalanilayam UPS Puliyannoor") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="North LPS Ramapuram") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="Sacred Heart LPS Ramapuram") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="Sacred Heart GHS Ramapuram") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Augustine’s HSS Ramapuram") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Mary’s HSS Teekoy") {edn_office ="Dist. Educational Officer, Erattupetta";}
  else if (school =="St. Mary’s LPS Teekoy") {edn_office ="Asst. Educational Officer,Kanjirappally";}
  else if (school =="Infant Jesus LPS Thodanal") {edn_office ="Asst. Educational Officer,Kozhuvanal";}
  else if (school =="St. Thomas HS Thudanganad") {edn_office ="Dist. Educational Officer, Thodupuzha ";}
  else if (school =="St. Thomas LPS Thudanganad") {edn_office ="Asst. Educational Officer,Arakulam";}
  else if (school =="St. George LPS Thuruthippally") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="Sacred Heart’s UPS Ullanad") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. George UPS Urulikunnam") {edn_office ="Asst. Educational Officer,Kanjirappally";}
  else if (school =="Little Flower HS Vadakara") {edn_office ="Dist. Educational Officer, Koothattukulam";}
  else if (school =="Little Flower LPS Vadakara") {edn_office ="Asst. Educational Officer,Muvattupuzha";}
  else if (school =="St. George LPS Vailkanampara") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="Alphonsa GHS Vakakkad") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Paul’s LPS Vakakkad") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Cruz LPS Valachira") {edn_office ="Asst. Educational Officer,Kuravilangad";}
  else if (school =="St.  Paul’s HS Valiyakumaramangalam") {edn_office ="Dist. Educational Officer, Erattupetta";}
  else if (school =="St. Mary’s LP Valiyakumaramangalam") {edn_office ="Asst. Educational Officer,Kanjirappally";}
  else if (school =="St. Thomas LPS Velathussery") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Antony’s HS Vellikulam") {edn_office ="Dist. Educational Officer, Kanjirappally";}
  else if (school =="St. Joseph’s LPS Vellilappilly") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Joseph’s UPS Vellilappilly") {edn_office ="Asst. Educational Officer,Ramapuram";}
  else if (school =="St. Joseph’s UPS Velliyamattom") {edn_office ="Asst. Educational Officer,Thodupuzha AEO";}
  else if (school =="KCM LPS Vettickanam") {edn_office ="Asst. Educational Officer,Erattupetta";}
  else if (school =="St. Joseph’s LPS Vezhanganam") {edn_office ="Asst. Educational Officer,Pala";}
  else if (school =="St. Joseph’s HS Vilakkumadom") {edn_office ="Dist. Educational Officer, Pala";}
  else if (school =="St. Thresias UPS Vilakumadom") {edn_office ="Asst. Educational Officer,Pala";}
  else {edn_office ="Asst. Educational Officer,Kuravilangad";}
  localStorage.setItem("edn_offcr", edn_office);
  var appo_date = document.getElementById("appo_date_from").value;
  appo_date = String(appo_date);
  localStorage.setItem("app_date", appo_date);
  var appo_date_to = document.getElementById("appo_date_to").value;
  appo_date_to = String(appo_date_to);
  var to = "to";
  var onwards = "Onwards"
  if(document.getElementById("appo_date_to").value == "" ){
    appo_date_to = onwards;
  }else {
    appo_date_to = to.concat(" ", document.getElementById("appo_date_to").value);
  }
  localStorage.setItem("to_date", appo_date_to);

  /*SUBMIT BUTTON TO GREEN ON CLICK*/
  if (document.getElementById("submit").className == "btn btn-success")
    document.getElementById("submit").className = "btn btn-success";
  else document.getElementById("submit").className = "btn btn-success";

  PrintAll();
}
/*PRINT PAGES DECLARATION & AFFIDAVIT*/
function PrintAll() {
  var pages = ["declaration.html", "affidavit.html"];

  var printNext = function (i) {
    i = i || 0;
    if (i >= pages.length) {
      return;
    }

    var wdw = window.open(
      pages[i],
      "print",
      "left=200, top=200, width=950, height=500, toolbar=0, resizable=0"
    );
    wdw.addEventListener(
      "load",
      function () {
        if (Boolean(wdw.chrome)) {
          wdw.print();
          setTimeout(function () {
            printNext(++i);
          }, 100);
        }
      },
      true
    );
    wdw.onload = function () {
      wdw.print();

      wdw.close();
      setTimeout(function () {}, 100);
    };
  };

  printNext();
}
