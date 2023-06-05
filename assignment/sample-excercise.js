// 1. Create a function that determines if a number is odd or even

function checkOddEven(num){

    (num % 2 == 0)? console.log("Even"):console.log("Odd"); 
}

// checkOddEven(51); 

// 2. Create a function that gets a number and checks if it is divisible by 3 or 5 or both

function checkDiv(num){

    isDiv3 = false; 
    isDiv5 = false; 
    (num % 3 == 0) ? isDiv3 = true: isDiv3 = false;
    (num % 5 == 0) ? isDiv5 = true: isDiv5 = false;
    
    switch(true){
        case (isDiv3 && isDiv5):
            console.log("divisible by 3 and 5"); 
            break; 
            
        case isDiv3: 
            console.log("divisible by 3"); 
            break;

        case isDiv5: 
            console.log("divisible by 5"); 
            break; 

        default:
            console.log("not divisible by 3 nor 5"); 
            break; 
    }
}

// checkDiv(10); 

// Challenge 1: Create a function that checks if a year is a leap year or not

function checkLeap(year){
    checkCondition = false; 
    checkCondition = (year % 4 == 0) && (year % 100 ==0) && (year % 400 == 0);
    
    if(checkCondition){
        console.log(year + " is a leap year")
    }
    else{
        console.log("not leap year"); 
    }

    console.log(checkCondition); 
}

checkLeap(2000); 


