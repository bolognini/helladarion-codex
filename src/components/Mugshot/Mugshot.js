import React from 'react'
import { useMugshot } from './Mugshot.hooks'
import { Container } from './Mugshot.style'

export const Mugshot = ({ monsterData, onGetData }) => {
  const { imageSource, onSaveImage } = useMugshot({ monsterData, onGetData })

  return (
    <Container
      htmlFor='image-uploader'
      image={imageSource}
    >
      <input
        id='image-uploader'
        type='file'
        accept='.jpg,.jpeg,.png'
        hidden
        onChange={e => onSaveImage({ file: e.target.files[0] })}
      />
    </Container>
  )
}
