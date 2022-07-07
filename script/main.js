let isOpen=false;
console.log=()=>{
  return false;
}
console.log("hi")
function onav(){ 
/*is sidebar is not open ,then open it*/
if(!isOpen)
  {
        if (navigator.vibrate) {
          navigator.vibrate(50)
        }
        document.getElementById('snav').
        style.transform="translateX(0px)";      
        isOpen=true;
  }
else
  {
    if (navigator.vibrate) {
          navigator.vibrate(50)
    }
   document.getElementById('snav').
   style.transform="translateX(-100vw)";
   isOpen =false;
  }
}

