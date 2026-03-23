import React from 'react'
import './dock.scss';

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src="./dock-icons/github.svg" alt="icons" /></div>
        <div className="icon calendar"><img src="./dock-icons/calender.svg" alt="icons" /></div>
        <div className="icon spotify"><img src="./dock-icons/spotify.svg" alt="icons" /></div>
        <div className="icon pdf"><img src="./dock-icons/pdf.svg" alt="icons" /></div>
        <div className="icon note"><img src="./dock-icons/note.svg" alt="icons" /></div>
        <div className="icon mail"><img src="./dock-icons/mail.svg" alt="icons" /></div>
        <div className="icon link"><img src="./dock-icons/link.svg" alt="icons" /></div>
        <div className="icon cli"><img src="./dock-icons/cli.svg" alt="icons" /></div>
    </footer>
  )
}

export default Dock