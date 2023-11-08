import React from 'react'

interface Props {
    id: string;
    type: string;
}

function NotificationElmement({ id, type }:Props) {
  return (
    <div className='notification-content'>
        <p className='notification-id'>
            {id}
        </p>
        <p className='notification-type'>
            type:{type}
        </p>
    </div>
  )
}

export default NotificationElmement