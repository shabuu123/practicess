function printOdd(arr) {
    var oddAdd = []

    for (let i = 0; i < arr.length; i++)

        if (arr[i] % 2 != 0) {
            oddAdd.push(arr[i])
        }
    console.log(oddAdd)

}
printOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])