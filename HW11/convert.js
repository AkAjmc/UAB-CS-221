window.addEventListener("DOMContentLoaded", domLoaded);

function convertCtoF(degreesCelsius) {
   return(parseFloat(degreesCelsius * (9/5) + 32));

}

function convertFtoC(degreesFahrenheit) {
   return(parseFloat((degreesFahrenheit - 32) * (5/9)));
}

function domLoaded() {
   let c = document.getElementById("cInput");
   let f = document.getElementById("fInput");
   let img = document.getElementById("weatherImage");
   let errorM = document.getElementById("errorMessage");
   f.addEventListener("input",function(){
      c.value = "";
      document.getElementById("convertButton").addEventListener("click",function(){
         if(c.value == ""){
            let cTemp = convertFtoC(f.value);
            if(!isNaN(cTemp)){
               errorM.textContent = "";
               c.value = cTemp;
            }else{
               c.value = "";
               errorM.textContent = f.value + " is not a number";
            }
            if(f.value < 32){
               img.src = "images/cold.png"
            }
            else if(f.value >= 32 && f.value <= 50){
               img.src = "images/cool.png"
            }
            else{
               img.src = "images/warm.png"
            }
         }
      });
   });
   c.addEventListener("input",function(){
      f.value = "";
      document.getElementById("convertButton").addEventListener("click",function(){
         if(f.value == ""){
            let fTemp = convertCtoF(c.value);
            if(!isNaN(fTemp)){
               errorM.textContent = "";
               f.value = fTemp;
            }else{
               f.value = "";
               errorM.textContent = c.value + " is not a number";
            }
            if(fTemp < 32){
               img.src = "images/cold.png"
            }
            else if(fTemp >= 32 && fTemp <= 50){
               img.src = "images/cool.png"
            }
            else{
               img.src = "images/warm.png"
            }
         }
      });
   });
}