// multiple pointers pattern

function countUniqueValuesForSortedArray(arr){
    let i = 0

    arr.forEach((num,index ) => {
        if(num !== arr[i]) {
            i++
            arr[i] = num
        }
    })
    if (i > 0) i++
    return i
}