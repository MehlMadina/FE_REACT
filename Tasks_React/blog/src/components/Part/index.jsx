import React from 'react'

export default function Part( props ) {
  return (
    <p>
        Тема: { props.part}
        Количество задач: {props.tasks}
    </p>
  )
}
