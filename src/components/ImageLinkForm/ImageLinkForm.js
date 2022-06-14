import React from 'react';
import './ImageLinkForm.css';
import Tilt from 'react-parallax-tilt';


const ImageLinkForm = () =>{
    return (
       <div>
           <p className='f3'>
               {'This Magic Brain will detect faces in your pictures. Give it a try.'}
           </p>
           <div className='center'>
                <Tilt className='form Tilt outline center pa4 br3 shadow-5' 
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}>
                    <input className='f4 pa2 w-70 center' type='tex'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-green'>Detect</button>
                </Tilt>
            </div> 
       </div>
    );
}

export default ImageLinkForm;