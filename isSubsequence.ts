function isSubsequence(text1: string, text2: string): boolean {
    let i = 0
    let j = 0

    while(j < text2.length) {
        if(text1[i] === text2[j]) {
            i++
            j++
        } else {
            j++
        }

        if(i === text1.length) return true
    }

    return false
}

function isSubsequenceRecursion(str1: string, str2: string): boolean {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequenceRecursion(str1.slice(1), str2.slice(1))
    return isSubsequenceRecursion(str1, str2.slice(1))
}