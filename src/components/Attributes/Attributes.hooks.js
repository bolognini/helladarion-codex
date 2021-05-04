import { onGetQueryParams } from 'utils'

export const useAttributes = ({ list }) => {
  const monsterId = onGetQueryParams()

  const onSaveAttributes = ({ id, trimmedText }) => {
    const attributeList = list
    const value = Number(trimmedText) || Number(localStorage.getItem(`${monsterId}-${id}`))
    const attrName = id.replace(/-\w+/gm, '')
    const key = id.replace(/\w+-/gm, '')
    const selectedAttr = attributeList.find(attr => attr.name === attrName)
    const index = attributeList.findIndex(attr => attr.name === attrName)
    const updatedAttributes = { ...selectedAttr, [key]: value }
    attributeList[index] = updatedAttributes
    localStorage.setItem('attributes', JSON.stringify(attributeList))
  }

  return {
    onSaveAttributes
  }
}
