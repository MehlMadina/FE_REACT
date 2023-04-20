import React from 'react'

export default function ToDoForm() {

const submit = event => {
    event.preventDefault();
    const { title } = event.target;
    console.log(title.value);
    title.value = '';
}

  return (
    <form onSubmit={submit}>
        <input type="text" name='title' placeholder='Enter your todo items'/>
        <button>Add</button>
    </form>
  )
}
