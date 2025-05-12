const num=document.getElementById('clock');


setInterval(function(){
let date = new Date();

 num.innerHTML=date.toLocaleTimeString();
},1000)