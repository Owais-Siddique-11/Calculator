const display= document.getElementById('display');  //Acessing Display

function appendToDisplay(input){    //Getting Input From User
    display.value+= input;          //Adding Input to the String 
}
 
function clearDisplay(){            //'C' For Clearing String
    display.value="";
}

function calculate(){               
    try{
    display.value=eval(display.value);        //Inbuilt Function of evaluating String 
    }
    catch(error){
            display.value="ERROR!";             //If someone Enters Wrong Syntax
    }
}