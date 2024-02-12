let time=document.querySelector('.time');
let timetonumber = parseInt(time.innerHTML);
let timer=11;
let interval;
//add and minus number
function minusnumber(){
    timetonumber = timetonumber-1
    time.innerHTML=timetonumber
    clearInterval(interval)
    timer=11
    interval= setInterval(ourtimer, 1000); 
}
function addnumber(){
    timetonumber = timetonumber+1
    time.innerHTML=timetonumber
    clearInterval(interval)
    timer=11
    interval= setInterval(ourtimer, 1000); 
}
// operators
function plusFunction(){
    let sendpromt=prompt('send Number:')
    let changeprompt=parseInt(sendpromt)
    if(!isNaN(changeprompt)){
        timetonumber = timetonumber+changeprompt
        time.innerHTML=timetonumber 
        clearInterval(interval)
        timer=11
        interval= setInterval(ourtimer, 1000);  
    }
}
function minusfunction(){
    let sendpromt=prompt('send Number:')
    let changeprompt=parseInt(sendpromt)
    if(!isNaN(changeprompt)){
        timetonumber = timetonumber-changeprompt
        time.innerHTML=timetonumber 
        clearInterval(interval)
        timer=11
        interval= setInterval(ourtimer, 1000);   
    }
}
function multiplyFunction(){
    let sendpromt=prompt('send Number:')
    let changeprompt=parseInt(sendpromt)
   if(!isNaN(changeprompt)){
        timetonumber = timetonumber*changeprompt
        time.innerHTML=timetonumber  
        clearInterval(interval)
        timer=11
        interval= setInterval(ourtimer, 1000);  
    }
}
function divisionfunction(){
    let sendpromt=prompt('send Number:')
    let changeprompt=parseInt(sendpromt)
    if(!isNaN(changeprompt)){
        timetonumber = timetonumber/changeprompt
        time.innerHTML=timetonumber  
        clearInterval(interval)
        timer=11
        interval= setInterval(ourtimer, 1000);  
    }
}
// timer
function ourtimer(){
    timer= timer-1
    document.querySelector('.timer').innerHTML=timer
    if(timer==0){
        timer=11
        timetonumber = timetonumber+1
        time.innerHTML=timetonumber 
    }
}
interval=setInterval(ourtimer,1000)