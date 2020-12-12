function areThereDuplicates(...params: any[]): boolean {
    let paramCounter = {}

    for(const value of params) {
        if(paramCounter[value] === 1) {
            return true
        }
        paramCounter[value] = 1
    }
    return false
}