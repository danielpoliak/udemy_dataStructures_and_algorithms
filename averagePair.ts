function averagePair(arrOfNums: number[], targetAverage: number): boolean {
    let startPointer = 0
    let endPointer = arrOfNums.length - 1
    let averageSum

    while(startPointer <= endPointer) {
        averageSum = (arrOfNums[startPointer] + arrOfNums[endPointer]) / 2

        if(averageSum === targetAverage) {
            return true
        }

        if(averageSum > targetAverage) {
            endPointer--
        }

        if(averageSum < targetAverage) {
            startPointer++
        }
    }

    return false
}