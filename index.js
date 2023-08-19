
function bold(){
 getId("font-bold")

}
function italic(){
 
    getId("italic")

}
function normal(){
  getId("font-normal")


}
function underline(){


    getId("underline")
}

function center(){

    getId("text-center")
}
function left(){

getId("text-left")
}
function right(){

getId("text-right")
}
function justify(){

getId("text-justify")
}



function getId(cls){

    const inputId=   document.getElementById("textInput");

    inputId.classList.toggle(cls);


}

document.getElementById("inputSize").addEventListener("keyup",function(e){

    getId("text-"+e.target.value+"xl")
   
  

})