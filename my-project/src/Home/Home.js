import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <div id='Home'>
        <div className='Home-container'>
            <h1>WeBuild</h1>
            <h2>We're working hard to improve our website and we'll ready to launch after</h2>
            <div className='day'>
                <h2>365 Days</h2>
            </div>
            <div className='form'>
                <from>
                    <div className='row'>
                        <div className='col-1'>
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required></input>
                        </div>
                        <div className='col-1'>
                        <input type="email" name="name" class="form-control" id="name" placeholder="Your mail" required></input>
                        </div>
                    </div>
                </from>
            </div>
            <div className='button'>
                 <button type="submit">Get notified!</button>
            </div>
        </div>
    </div>
  )
}

export default Home