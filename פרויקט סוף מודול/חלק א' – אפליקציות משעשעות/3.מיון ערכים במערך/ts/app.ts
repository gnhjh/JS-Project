import {bubbleSort} from './arrays.js'

const inputNumber = document.getElementById('input-number') as HTMLInputElement
const btnAddNumberToArray = document.getElementById(
  'btn-add-number-to-array'
) as HTMLButtonElement
const btnRandomArray = document.getElementById(
  'btn-add-random-number'
) as HTMLButtonElement
const btnSort = document.getElementById('btn-sort') as HTMLButtonElement
const ulNumbers = document.querySelector('.ul-numbers') as HTMLUListElement

let arr = [3, 4, 3, 2, 1, 4, 56]

const clearTheList = () => {
  document.querySelectorAll('.array-element').forEach((e) => e.remove())
}
const renderTheList = () => {
  clearTheList()
  arr
    .map((n) => {
      const li = document.createElement('li')
      li.classList.add('array-element')
      li.addEventListener('click', () => {
        console.log('item clicked')
      })
      const textNode = document.createTextNode(`${n}`)
      li.appendChild(textNode)
      return li
    })
    .forEach((e) => ulNumbers.appendChild(e))
}

btnSort.addEventListener('click', () => {
  arr = bubbleSort(arr)
  renderTheList()
})
renderTheList()

btnAddNumberToArray.addEventListener('click', () => {
  let value = inputNumber.value
  if (!value) return
  let n = Number(inputNumber.value)
  if (n === NaN) return

  arr.push(n)
  renderTheList()
  inputNumber.value = ''
  inputNumber.focus()
})

btnRandomArray.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 101)
  arr.push(r)
  renderTheList()
})
