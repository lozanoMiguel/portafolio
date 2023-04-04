import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <header id='header'>
        <h2 className='myName'>Miguel Lozano</h2>
        <nav className='navbar'>
            <ul className='navbar_list'>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </nav>
    </header>
  )
}
