let result=document.getElementById("result");
let button=document.querySelectorAll("button");
let screenValue='';
for(each of button){
    each.addEventListener('click',(e)=>{
        buttonText=e.target.innerHTML;
        
        if(buttonText=="AC"){
            screenValue="";
            result.value=screenValue;
        }
        else if(buttonText=="="){
            result.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
        result.value=screenValue;
        }
    })
}

function clr(){
    document.getElementById("result").result.value="";
}