import React, { useState } from 'react'

function Button() {
    let [count, setCount] = useState(0);

     let decrement =  () => {
        return setCount(count - 1)
      }

    let increment = () => {
        return setCount(count + 1)
      }
    
    let Heading = () => {
      if(count < 10) {
        return (
          <>
          <h2 className=' text-danger'>{count}</h2>
          <h3 className='text-danger'>Click the below and Increase and Decrease the Number</h3>
          </>
        )
      }
      else if (count < 20 ) {
        return (
          <>
          <h2 className='text-primary'>{count}</h2>
          <h3 className='text-primary'>Click the below and Increase and Decrease the Number</h3>
          </>
        )
      }
      else{
        return (
          <>
          <h2 className='text-success'>{count}</h2>
          <h3 className='text-success'>Click the below and Increase and Decrease the Number</h3>
          </>
        )
      }
    }


  return (
    <>
    <div className='ami'>
    <div className='practice'>
    <h1 className='text-secondary'>this is practice file</h1>

    <Heading />
 
    <div onClick={decrement} className='btn btn-primary me-3 '>Decrement -</div>
    <div onClick={increment} className='btn btn-primary'>Increment +</div>
    </div>
    </div>
    </>
  )
}

export default Button