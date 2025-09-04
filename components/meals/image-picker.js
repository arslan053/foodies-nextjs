'use client'

import { useRef, useState } from 'react'
import Image from 'next/image';

import classes from './image-picker.module.css'

export default function Imagepicker({ label }) {

  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef()

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null);
      return
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }
  function handlePickClick() {
    imageInputRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor='image'>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="The image picked by user" fill />}
        </div>
        <input
          className={classes.input}
          type='file'
          id='image'
          accept="image/png, image/jpeg"
          name="image"
          ref={imageInputRef}
          onChange={handleImageChange}
        />
      </div>
      <button className={classes.button} type='button' onClick={handlePickClick} >Pick an Image</button>
    </div>
  )
}