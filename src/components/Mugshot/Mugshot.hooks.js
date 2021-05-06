import { useState, useEffect } from 'react'
import axios from 'axios'
import defaultImage from 'assets/default.png'

export const useMugshot = ({ monsterData, onGetData }) => {
  const [imageSource, setImageSource] = useState(null)

  useEffect(() => {
    const hasMonsterImage = monsterData && monsterData.mugshot
    setImageSource(hasMonsterImage ? window.atob(monsterData.mugshot) : defaultImage)
  }, [])

  const onSaveImage = ({ file }) => {
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        const readerResult = reader.result
        setImageSource(readerResult)
        const updatedData = { ...monsterData, mugshot: window.btoa(readerResult) }

        axios
          .put('https://helladarion.herokuapp.com/monster/update', updatedData)
          .then(onGetData)
          .catch(error => console.error(error))
      },
      false
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return {
    onSaveImage,
    imageSource
  }
}
