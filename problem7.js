 count = 0
 function frequency(str,char){
    var count = 0;
    for(let i= 0; i < str.length; i++)
        if (str[i] === char) {
            count = count +1
            
        }
        console.log(count)
 }

 frequency("shabnam" , "s")