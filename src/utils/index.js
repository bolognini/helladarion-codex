export const onLoadEditableElements = () => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  Object.keys(localStorage).forEach(key => {
    if (key.includes(`${monsterId}-`)) {
      const id = key.replace(`${monsterId}-`, '')
      const element = document.querySelector(`#${id}`)
      if (element) {
        element.innerHTML = localStorage.getItem(key)
      }
    }
  })
}

export const onSaveEditable = () => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  const editableElements = document.querySelectorAll('[contenteditable]')

  editableElements.forEach(el => {
    el.addEventListener('keyup', () => {
      localStorage.setItem(`${monsterId}-${el.id}`, el.innerHTML)
    })
  })
}

export const onManuallySaveEditable = text => {
  const editableElements = document.querySelectorAll('[contenteditable]')

  Array.from(editableElements).forEach(el => {
    localStorage.setItem(`sheetData-${el.id}`, text)
  })
}
