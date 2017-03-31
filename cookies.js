

var sugarBtn = document.getElementById("sugarBtn");
var chocolateBtn = document.getElementById("chocolateBtn");
var lemonBtn = document.getElementById("lemonBtn");
var clearBtn = document.getElementById("clearBtn");
var cookie = 0;
var sugarCookie = 0;
var lemonCookie = 0;
var chocolateCookie = 0;



sugarBtn.addEventListener("click", function() {
  
  sugarCookie++
  Cookies.set("sugarCookies", sugarCookie);
  var countSugar = document.getElementById("countSugar")
  countSugar.innerHTML=sugarCookie;
  })
  



chocolateBtn.addEventListener("click", function() {
  chocolateCookie++
  Cookies.set("chocolateCookies", chocolateCookie);
  var countChocolate = document.getElementById("countChocolate")
  countChocolate.innerHTML=chocolateCookie;
 
})

lemonBtn.addEventListener("click", function() {
  lemonCookie++
  Cookies.set("lemonCookies", lemonCookie);
  var countLemon = document.getElementById("countLemon")
  countLemon.innerHTML=lemonCookie;

})

clearBtn.addEventListener("click", function(){
	sugarCookie = 0
	lemonCookie = 0
	chocolateCookie = 0
	Cookies.set("lemonCookies", 0);
	Cookies.set("chocolateCookies", 0);
	Cookies.set("sugarCookies", 0);
	var countLemon = document.getElementById("countLemon")
  countLemon.innerHTML=0;
   var countChocolate = document.getElementById("countChocolate")
  countChocolate.innerHTML=0;
   var countSugar = document.getElementById("countSugar")
  countSugar.innerHTML=0;
})

window.addEventListener("load", function(){
	sugarCookie = Cookies.get("sugarCookies");
	
if (sugarCookie == 0) {
    var countSugar = document.getElementById("countSugar");
    sugarCount.textContent = 0;
    var sugarCookie = 0;
  }
  else {
    var countSugar = document.getElementById("countSugar");
    countSugar.textContent = sugarCookie;
  }





	chocolateCookie = Cookies.get("chocolateCookies");


if (chocolateCookie == 0) {
    var countChocolate = document.getElementById("countChocolate");
    chocolateCount.textContent = 0;
    var chocolateCookie = 0;
  }
  else {
    var countChocolate = document.getElementById("countChocolate");
    countChocolate.textContent = chocolateCookie;
  }



	lemonCookie = Cookies.get("lemonCookies");

if (lemonCookie == 0) {
    var countLemon = document.getElementById("countLemon");
    lemonCount.textContent = 0;
    var lemonCookie = 0;
  }
  else {
    var countLemon = document.getElementById("countLemon");
    countLemon.textContent = sugarLemon;
  }

})

