import React ,{useState,useRef}from 'react'

// USE REF() hook

const Demo2 = () => {
    const [y,setY] = useState(0);
    let x = 10;
    const z = useRef(0);   // it return an object
    // and the value we passed in ref it is passed as an object
    /**
     * const ref = {current: 0}
     */
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96
    '>
        <div>
            <button className='bg-green-100 px-2' onClick={()=>{x = x+1;
            console.log(x)
             } }>Increase x</button>
              <span className='font-bold'>state = {x}</span>

            
        </div>
        <div>
        <button className='bg-green-100 px-2 my-2' onClick={()=>{setY(y+1);
            console.log(y)
             } }>Increase y</button>
           
            <span className='font-bold'>state = {y}</span>
        </div>
        <div>
        <button className='bg-green-100 px-2 my-2' onClick={()=>{
        z.current = z.current + 1;
            console.log(z)
             } }>Increase z</button>
           
            <span className='font-bold'>ref = {z.current}</span>
        </div>
    </div>
  )
}

export default Demo2