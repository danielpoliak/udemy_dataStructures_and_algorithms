function sameFrequency(firstNumber: number,  secondNumber: number): boolean {
    const firstNumberText = firstNumber.toString()
    const secondNumberText = secondNumber.toString()

    if(firstNumberText.length !== secondNumberText.length) return false

    const firstNumberCounter = {}
    let result = true

    firstNumberText.split("").forEach(numValue => {
        if(!firstNumberCounter[numValue]) {
            firstNumberCounter[numValue] = 1
            return
        }
        firstNumberCounter[numValue] += 1
    })
    secondNumberText.split("").forEach(numValue => {
        if(!firstNumberCounter[numValue]) {
            result = false
            return
        }

        firstNumberCounter[numValue] = firstNumberCounter[numValue] -= 1
    })

    if(!result) return result

    Object.keys(firstNumberCounter).forEach(value => {
        if(firstNumberCounter[value] !== 0) {
            result = false
        }
    })

    return result
}