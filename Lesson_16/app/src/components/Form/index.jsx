import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function Form() {

// const [ name, setName ] = useState("");
// const onNameChange = event => setName(event.target.value);

// const [ value, setValue ] = useLocalStorage("", name);

const name = useInput("");
const lastname = useInput("");
const age = useInput("");
const prof = useInput("");


  return (
    <div>
        <input {...name} type="text" placeholder='Firstname' />
        <input {...lastname} type="text" placeholder='Lastname'/>
        <input {...age} type="text" placeholder='Age'/>
        <input {...prof} type="text" placeholder='Profession'/>
        <button onClick={() => {
            console.log(name.value, lastname.value, age.value, prof.value);
            
        }}>Вывести данные</button>
    </div>
  )
}
