import { useState } from 'react'
import { onGetQueryParams } from 'utils'

const id = onGetQueryParams()

export const useManaPointsModal = ({ monsterData }) => {
  const [maximumMana, setMaximumMana] = useState(monsterData.manapoints)
  const [currentMana, setCurrentMana] = useState(
    localStorage.getItem(`${id}-currentMana`) || monsterData.currentMana
  )

  const trimValue = (value, setter) => {
    if (value < 0) setter(0)
    else if (value > 9999) setter(9999)
    else setter(value)
  }

  const updateMana = ({ value, type }) => {
    if (type === 'manapoints') {
      trimValue(value, setMaximumMana)
    } else {
      trimValue(value, setCurrentMana)
    }
  }

  return {
    maximumMana,
    currentMana,
    updateMana
  }
}
