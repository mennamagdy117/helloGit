import React from 'react';
import './Person.css';




const Person = (Props) =>
{
    
    return(
    <div className="Person" >

     <p onClick={Props.click}>I'm {Props.name} and i'm {Props.age} years old </p>
     <p>{Props.children}</p>
     <input type="text" onChange={Props.changed} value={Props.name}/>
    </div>
    )
}
export default Person;