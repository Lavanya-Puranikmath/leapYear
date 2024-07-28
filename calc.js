var msg=prompt("enter the year")

function leap(year){
    if(year%4===0){
        return "its a leap year"
    }
    if(year%100!==0){
        return "not a leap year"
    }

    if(year%400===0){
        return "its a leap year"
    }
    
}
var res=leap(msg)
alert(res)