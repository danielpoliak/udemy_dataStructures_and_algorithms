// sliding window pattern
function maxSubArraySum(arr: number[], subArrayLength: number): number | null {
    if(subArrayLength > arr.length) return null

    let i = 0
    let j = 0
    let subArrayMax = 0

    while(j < subArrayLength) {
        subArrayMax+=arr[j]
        j++
    }

    let subArraySum = subArrayMax

    while(j < arr.length) {
        subArraySum = subArraySum + arr[j] - arr[i]
        if(subArrayMax < subArraySum) {
            subArrayMax = subArraySum
        }
        i++
        j++
    }
    return subArrayMax
}
