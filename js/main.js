let stars = document.getElementById("stars")
let text = document.getElementById("text")
let btn = document.getElementById("btn")
let sec = document.getElementById("sec")
let moon = document.getElementById("moon")
let mfront = document.getElementById("mfront")
let mbehind = document.getElementById("mbehind")
let header = document.getElementById("header")


window.addEventListener('scroll',function(){
let value = window.scrollY;
stars.style.left = value +.25 +'px' ;
moon.style.top = value +1.05 +'px' ;
mbehind.style.top = value +.5 +'px' ;
// text.style.marginRight = value + 0 +'px' ;
text.style.marginTop = value + 0 +'px' ;
btn.style.marginTop = value + 0 +'px' ;
header.style.marginBottom = value + 0+'px' ;
}) 