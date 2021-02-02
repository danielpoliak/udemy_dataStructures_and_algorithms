class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)

        let index = this.values.length - 1
        let parentIndex = Math.floor((index -1) / 2)

        while (this.values[index] > this.values[parentIndex]) {
            const currentValueTemp = this.values[index]

            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = currentValueTemp

            index = parentIndex
            if(index === 0) return value
            parentIndex = Math.floor((index -1) / 2)
        }

        return value
    }
}