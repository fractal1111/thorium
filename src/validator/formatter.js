
const s = '  Function Up  '

function toTrim(){
    let text= s.trim()
    console.log(text)

}

function changeToLowerCase(){

    let lc =s.toLocaleLowerCase();
    console.log(lc)
}

function changeToUpperCase(){

    let uc = s.toUpperCase()
    console.log(uc)
}


module.exports.t=toTrim;
module.exports.ctlc=changeToLowerCase;
module.exports.ctuc=changeToUpperCase;