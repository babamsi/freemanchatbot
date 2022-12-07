import React from 'react'
import {ColorRing} from 'react-loader-spinner'
import './Spinner.css'

function Spinner() {
  return (
    <div className="spinner">
        <ColorRing height="300" width="300" color='red' ariaLabel='Loading' colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
</div>
  )
}

export default Spinner