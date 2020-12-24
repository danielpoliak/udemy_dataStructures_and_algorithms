function binarySearch(arr: any[], value: any): number {
    let i = 0
    let j = arr.length - 1
    let roundedIndex = Math.floor((j+i) / 2)

    if(value > arr[arr.length -1] || value < arr[0]) return -1

    while(arr[roundedIndex] !== value) {
        if(arr[roundedIndex] > value) {
            j = roundedIndex - 1
        } else {
            i = roundedIndex + 1
         }
        roundedIndex = Math.floor((j+i) / 2)
    }
    return roundedIndex
}