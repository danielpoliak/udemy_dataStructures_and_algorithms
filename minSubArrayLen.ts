function minSubArrayLen(arr: number[], value: number): number {
    let i = 0
    let j = 0
    let subArrayLenMin = 1
    let valueTemp = arr[i]

    while(valueTemp < value && j < arr.length) {
        j++
        valueTemp+= arr[j] ? arr[j] : 0
        subArrayLenMin++
    }

    if(valueTemp < value) return 0

    while(j < arr.length) {
        if(valueTemp > value) {
            valueTemp-= arr[i]
            i++
        } else if(valueTemp <= value) {
            j++
            valueTemp+= arr[j]
        }

        if(valueTemp >= value && j-i+1 < subArrayLenMin) {
            subArrayLenMin= j-i+1
        }
    }
    return subArrayLenMin
}