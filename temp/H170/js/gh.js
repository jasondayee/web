// JavaScript Document
var Ptr=document.getElementById("gh_qd").getElementsByTagName("ul");
function bs$() {
      for (i=1;i<Ptr.length+1;i++) { 
      Ptr[i-1].className = (i%2>0)?"tg1":"tg2"; 
      }
}
window.onload=bs$;