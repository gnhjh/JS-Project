export function random(from = 0, to = 0) {
    const diff = to - from;
    return from + Math.floor(Math.random() * diff);
}
export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
export function shuffle(array, inPlace = true) {
    if (!inPlace)
        array = [...array];
    for (let i = 0; i < array.length; i++) {
        const rand = random(0, array.length);
        const temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
    }
    if (!inPlace)
        return array;
}
