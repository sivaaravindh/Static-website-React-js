import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <div className='fixed'>
         <div className='Header'>
            <div className='logo'>
                <h1><a><span>WeBuild</span></a></h1>
            </div>
              <div class="b-icon">
               <i class="fa fa-bars"></i>
              </div>
            <div className='nav'>
                <nav> 
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#contect'>Contect</a>
                </nav>
            </div>
        </div>
    </div>
  )
}
export default Header