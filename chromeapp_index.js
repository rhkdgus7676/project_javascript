'use strict';

const title = document.getElementById("title");

title.innerHTML = " developer kim ";
title.addEventListener("mouseover" , function(event){
event.target.style.color = "orange";

setTimeout(() => {
    event.target.style.color = "blue";
  },1000);
}, false);

document.title = 'this is kim';

const title2 = document.getElementById("title2");

title2.style.backgroundColor = 'green';

title2.addEventListener("mouseleave" , function(e){
  e.target.style.color = "yellow";

},false)

// prompt() is not useful nowadays
// instead using prompt, using html form makes it
//better working javascript fast, customize

console.dir(title);
console.dir(document);