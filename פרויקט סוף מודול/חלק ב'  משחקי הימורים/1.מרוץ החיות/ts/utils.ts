export function random(from: number = 0, to: number = 0) {
  const diff = to - from
  return from + Math.floor(Math.random() * diff)
}

export function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1)
}

export function shuffle(array: any[], inPlace = true) {
  if (!inPlace) array = [...array]
  for (let i = 0; i < array.length; i++) {
    const rand = random(0, array.length)
    const temp = array[i]
    array[i] = array[rand]
    array[rand] = temp
  }

  if (!inPlace) return array
}
