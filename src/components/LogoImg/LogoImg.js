import src from '../../assets/image/1.jpg';
import styled from './LogoImg.module.scss';
import { useState, useRef, useEffect } from 'react';

function LogoImg() {
  const [preloder, setPreloder] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    const style = window.getComputedStyle(imgRef.current, null);
    console.log('width:', style.width, 'height:', style.height)
  }, [preloder])
  
  function hendlPreloder() {
    setPreloder(()=> !preloder)
    console.log(' загружено ')
  }
  
  return (
    <div className={styled.container}>
      <img ref={imgRef} onLoad={hendlPreloder} className={`${styled.logo} ${preloder ? '' : styled.active}` } src={src} alt="logo" />
      <span>Загрузка изображения...</span>
    </div>
  )
}

export default LogoImg