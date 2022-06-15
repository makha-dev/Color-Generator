import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, numberOfShades}) => {
  const [alert, setAlert] = useState(false);
  const a = rgb.join(',');
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert])
  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  }
  return (
    <article 
      className={`color ${index > 100 / numberOfShades && 'color-light'}`} 
      style={{backgroundColor: `rgb(${a})`}}
      onClick={handleClick}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>Copied To clipboard</p>}
    </article>
  );
}

export default SingleColor
