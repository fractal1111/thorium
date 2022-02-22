

function printDate (){

    let today = new Date();
    let date = today.getDate();
    console.log('The date is '+' '+date);
}

function printMonth(){
    let tm= new Date()
    let month = tm.getMonth()+1;
    console.log('the month is'+' '+month)
    return month;
}

function getYear () {
    let yr = new Date();
    let year = yr.getFullYear();
    return year;




}


function getWeek (getYear, printMonth) {
    let daysNum = 32 - new Date(getYear, printMonth, 32).getDate(),
        fDayO = new Date(getYear, printMonth, 1).getDay(),
        fDay = fDayO ? (fDayO - 1) : 6,
        weeksNum = Math.ceil((daysNum + fDay) / 7);
    return weeksNum;
}
  

function getBatchInfo(getWeek){

    const batch= "Thorium";
    let w = getWeek-4;
    let gd = new Date();
    let day= gd.getDay();
     
    console.log(batch+' '+ 'W'+w +'D'+day)

    }

    module.exports.cdate=printDate;
    module.exports.cmonth=printMonth;
    module.exports.binfo=getBatchInfo