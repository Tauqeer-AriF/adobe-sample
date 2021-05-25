
function index1() {
   window.open("index.html", "_self");
}

function index2() {
    window.open("pages/index2.html", "_self");
  }
 
  function index3() {
    window.open("pages/index3.html", "_self");
  }

  function index4() {
    window.open("pages/index4.html", "_self");
  }

  function index5() {
    window.open("pages/index5.html", "_self");
  }


  function index1_1() {
    window.open("index.html", "_self");
 }
 
 function index1_2() {
     window.open("index2.html", "_self");
   }
  
   function index1_3() {
     window.open("index3.html", "_self");
   }
 
   function index1_4() {
     window.open("index4.html", "_self");
   }
 
   function index1_5() {
     window.open("index5.html", "_self");
   }








   window.onscroll = function() {scrollFunction()};
 
   function scrollFunction() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.width = "20%";
        document.getElementById("about").style.marginTop = "25px";
        document.getElementById("about").style.fontSize = "15px";
        document.getElementById("dropdown").style.marginTop = "25px";
        document.getElementById("top-btn").style.display = "block";
     } else {
        document.getElementById("logo").style.width = "40%";
        document.getElementById("about").style.marginTop = "60px";
        document.getElementById("about").style.fontSize = "25px";
        document.getElementById("dropdown").style.marginTop = "70px";
        document.getElementById("top-btn").style.display = "none";
     }
   }


function czech(){
  document.getElementById("about").innerHTML = "O";
  document.getElementById("lang-btn").innerHTML = "Jazyk";
  document.getElementById("feat").innerHTML = "VYBAVENÉ VIDEO 1 Z 5";
  document.getElementById("next").innerHTML = "NAHORU DALŠÍ";
  document.getElementById("subtitle").innerHTML = "Upravte barvy, kontrast a světlo ve svých sekvencích poutavým a inovativním způsobem.";
  document.getElementById("privacy").innerHTML = "Soukromí";
  document.getElementById("privacy-2").innerHTML = "Soukromí";
  document.getElementById("term").innerHTML = "podmínky";
  document.getElementById("term-2").innerHTML = "podmínky";

}

function english(){
  document.getElementById("about").innerHTML = "About";
  document.getElementById("lang-btn").innerHTML = "Language";
  document.getElementById("feat").innerHTML = "FEATURED VIDEO 1 OF 5";
  document.getElementById("next").innerHTML = "UP NEXT";
  document.getElementById("subtitle").innerHTML = "Adjust color, contrast, and light in your sequences in eye-catching and innovative ways.";
  document.getElementById("privacy").innerHTML = "Privacy";
  document.getElementById("term").innerHTML = "Terms";

}