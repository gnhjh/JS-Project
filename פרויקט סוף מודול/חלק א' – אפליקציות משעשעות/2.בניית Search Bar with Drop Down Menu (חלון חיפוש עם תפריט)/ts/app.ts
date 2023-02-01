const names = ['Moe', 'Dave', 'Josh', 'Ayala', 'Nissim', 'Bob']
names.sort()

const input = document.getElementById('input') as HTMLInputElement
const namesUL = document.querySelector('.name-list')
const nameClicked = (e: MouseEvent) => {
  const li = e.target as HTMLLIElement
  input.value = li.innerText
  clearTheList()
}

const clearTheList = () => {
  document.querySelectorAll('.name-list-item').forEach((e) => e.remove())
}
input.addEventListener('keyup', (e) => {
  clearTheList()

  //resolve the input value:
  const inputValue = input.value.toLowerCase()

  //filter the names:
  const filteredNames = names.filter((name) =>
    name.toLocaleLowerCase().startsWith(inputValue)
  )

  //map the names to li
  filteredNames
    .map((n) => {
      const li = document.createElement('li')
      li.classList.add('name-list-item')
      li.setAttribute('data-name', n)
      li.addEventListener('click', nameClicked)

      const l = inputValue.length
      const firstPart = `<b style='color:orange;'>${n.slice(0, l)}</b>`
      const secondPart = n.slice(l)
      const word = firstPart + secondPart
      li.innerHTML = word
      return li
    }) //show the list items in the ul
    .forEach((e) => namesUL.appendChild(e))
})

const btnAddName = document.getElementById('btn-add-name') as HTMLButtonElement
const addNameInput = document.getElementById(
  'add-name-input'
) as HTMLInputElement

btnAddName.addEventListener('click', (e) => {
  e.preventDefault()
  const nameToAdd = addNameInput.value

  if (nameToAdd) {
    names.push(nameToAdd)
    addNameInput.value = ''
  }
})

//click outside to clear the list
document.addEventListener('click', (e) => {
  let node = e.target as Node
  if (!document.querySelector('.auto-complete-form__wrapper').contains(node)) {
    //clearTheList()
  }
})


const showAllNames = document.getElementById('show-all-names');
showAllNames.addEventListener('click', (e)=>{
  clearTheList()

  names
  .map((n) => {
    const li = document.createElement('li')
    li.classList.add('name-list-item')
    li.setAttribute('data-name', n)
    li.addEventListener('click', nameClicked)
    li.innerHTML = n
    return li
  }) //show the list items in the ul
  .forEach((e) => namesUL.appendChild(e))
})