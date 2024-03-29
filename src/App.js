import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [numberOfShades, setNumberOfShades] = useState(4);
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(numberOfShades));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(numberOfShades);
      setList(colors);
    }
    catch (error){
      console.log(error);
      setError(true);
    }
  }

  // useEffect()
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={color} 
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
          className={`${error ? 'error' : ''}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} numberOfShades={numberOfShades}></SingleColor>
          );
        })}
      </section>
    </>
    
  )
}

export default App
