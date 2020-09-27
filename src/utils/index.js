export const onLoadEditableElements = () => {
  for (let key in localStorage) {
    if (key.includes('sheetData-')) {
      const id = key.replace('sheetData-','')
      document.querySelector('#' + id).innerHTML = localStorage.getItem(key)
    }
  }
}

export const onSaveEditable = () => {
  const editableElements = document.querySelectorAll('[contenteditable]')

  editableElements.forEach(el => {
    el.addEventListener('keyup', () => {
      localStorage.setItem('sheetData-' + el.id, el.innerHTML)
    })
  })
}

export const onManuallySaveEditable = () => {
  const editableElements = document.querySelectorAll('[contenteditable]')

  Array.from(editableElements).forEach(el => {
    localStorage.setItem('sheetData-' + el.id, el.innerHTML)
  })
}
