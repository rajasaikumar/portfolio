import { useState } from 'react';

/*function MyComponent() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
export default MyComponent;*/



function Component(){
    const [Name,setName] =useState('sai') ;

return(
    <>
    <h1>my name is king{Name}</h1>
    <button 
    type ="button"
    onClick={()=> setName("Raja sai kumar")}
    submit>double click</button>
    </>
)
}
export default Component;