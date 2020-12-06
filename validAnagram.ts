// counter pattern
function validAnagram(value1: string, value2: string) {
    if (value1.length !== value2.length) {
        return false;
    }

    let result = true;
    const valueCounter1: { [key: string]: number } = {};

    value1.split('').forEach(letter1 => {
        if (valueCounter1[letter1]) {
            valueCounter1[letter1] += 1;
        } else {
            valueCounter1[letter1] = 1;
        }
    });

    value2.split('').some(letter2 => {
        if (!valueCounter1[letter2]) {
            result = false;
            return;
        }
        valueCounter1[letter2] -= 1;
    });

    if (!result) return false;

    result = !Object.keys(valueCounter1).find(
        valueCounter1Key => valueCounter1[valueCounter1Key] !== 0
    );

    return result;
}
