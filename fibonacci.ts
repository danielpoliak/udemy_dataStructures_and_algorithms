// returns nth number in fibonacci sequence
function fib(num: number): number {
    if(num < 3) return 1
    return fib(num - 1) + fib(num - 2)
}