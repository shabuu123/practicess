function evenNumber(arr){
    var addEven = []

    for (let i = 0; i < arr.length; i++)
        if(arr[i] % 2 == 0){
            addEven.push(arr[i])
        }
        console.log(addEven)
}
evenNumber([1,2,3,4,5,6,7,8,9,10])