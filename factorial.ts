// recursion
function factorial(factNum: number): number {
    if(factNum <= 1) return 1
    if(factNum < 0) return 0;
    return factNum * factorial(factNum - 1)
}

