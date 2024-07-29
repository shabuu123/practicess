function reverseString(str){
    let arr = strToArr(str);
    let revArr = [];
    for(let i=0; i<arr.length;i++){
        revArr.push(reverse(arr[i]));
    }

    return join(revArr)
}


console.log(reverseString("I love dogs"))



function strToArr(str) {
    let addstr = [];
    let word = "";
    for(let i=0; i<str.length; i++){
        if(str[i]===" "){
            addstr.push(word);
            word= "";
        }
        else
            word = word + str[i];
    }
    addstr.push(word);
    return addstr; 
}

console.log(strToArr("I love dogs"));

function join(arr) {
    let joinstr = "";
    for(let i = 0; i<arr.length; i++){
        joinstr = joinstr + arr[i] + " ";
    }
    return joinstr
}
console.log(join (["I", "love", "dogs" ]))

function reverse(str) {
    let reversestr = "";
    for (let i = str.length-1; i>=0; i--){
        reversestr = reversestr + str[i];
     
    }
    return reversestr
 
}
console.
log(reverse ("I love dogs" ))