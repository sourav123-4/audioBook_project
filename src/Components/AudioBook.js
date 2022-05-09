import React from 'react'
import '../Styles/Audiobook.css'
function AudioBook() {
  return (
    <div className='audiobook-div'>
      <h3>Audiobook</h3>
      <div className='player-div'>
        <audio controls autoPlay>
        
        </audio>
      </div>
      <h4>Table of Contents</h4>
      <ol>
        <li>overview</li>
      </ol>
    </div>
  )
}

export default AudioBook