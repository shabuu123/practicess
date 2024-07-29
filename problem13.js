function findAverage(arr) {
    var addAverage = 0;
    for (let i = 0; i < arr.length; i++) {
        addAverage += arr[i]
    }
    console.log(addAverage / arr.length)
}
findAverage([3,2,1,4,5,6])