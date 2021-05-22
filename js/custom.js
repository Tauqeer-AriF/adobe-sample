
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
        document.getElementById("about").style.marginTop = "20px";
        document.getElementById("about").style.fontSize = "15px";
        document.getElementById("top-btn").style.display = "block";
     } else {
        document.getElementById("logo").style.width = "40%";
        document.getElementById("about").style.marginTop = "45px";
        document.getElementById("about").style.fontSize = "25px";
        document.getElementById("top-btn").style.display = "none";
     }
   }
