import React from 'react'

export default function ToDo({id, title, done}) {

    const done_style = {
        color: 'gray',
        textDecoration: 'line-through'
    }

  return (
    <div style={done ? done_style : {}}>
        <p>{title}</p>
    </div>
  )
}
