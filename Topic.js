import React from 'react'
import { useParams } from 'react-router-dom'

export default function Topic() {

    let {topicId} = useParams();

  return (
    <div>
        <h2>{topicId}</h2>
    </div>
  )
}
