export const bubbleSort = (arr) => {
    const copy = [...arr];
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy.length - 1 - i; j++) {
            if (copy[j] > copy[j + 1]) {
                const temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
            }
        }
    }
    return copy;
};
