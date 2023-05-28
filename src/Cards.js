import React, {useState} from 'react'
import './Cards.css'

function Cards() {

    const [persona, setPersona] = useState([
        {
            nombre:'Camila Perez',
            url: 'https://acortar.link/CzALe2'
        },

        {
            nombre:'Isabella Camacho',
            url: 'https://acortar.link/YEwiIj'
        },
    ])
  return (
    <div className='cards'>
       <div className='cards__content'>

       </div>
    </div>
  )
}

export default Cards