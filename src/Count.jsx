import { useState } from 'react';

function Count() {
    const [count,setCount] = useState(50);
  return (
    <>
    <h1>Welcome</h1>
    <h3>count : {count}</h3>
    <button onClick={()=> setCount(count-1)}>decrease</button>
    </>
  )
}

export default Count;