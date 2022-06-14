import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './Brain.png'
import './Logo.css';

const Logo = () =>{
    return (
        <Tilt className= 'Tilt ma4 mt0 br2 shadow-2' 
            style={{height: '150px', width: '150px'}}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}>
            <div className='pa1'>
                <h1><img  alt = 'logo' src={brain} ></img> </h1>
            </div>
        </Tilt>
    );
}

export default Logo;