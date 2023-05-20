import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function Test() {

const [ value, setValue ] = useLocalStorage([], "name");

const onSubmit = event => {
    event.preventDefault();
    const word = event.target.word.value;
    setValue(pre => [...pre, word]);
    event.target.reset();
}

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name='word'/>
            <button>Добавить</button>
        </form>
        <div>
            {
                value.map(word => <p key={word}>{word}</p>)
            }
        </div>
        {/* <input type="text" value={value} onChange={event => setValue(event.target.value)}/> */}
    </div>
  )
}
