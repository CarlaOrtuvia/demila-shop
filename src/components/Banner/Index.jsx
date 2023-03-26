import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div>
         <div className='vid-container' style={{backgroundColor:'#ceedc7'}}>
    <video src={process.env.PUBLIC_URL + '/video/logoDemila.mp4'} style={{width: '150px', marginLeft: '650px' , marginTop: '5px'}} autoPlay loop muted controls  >
        

    </video>
        </div>
        <div className='banner'>
            <div className='banner-container'>
                <h1>Milanesas de Legumbres</h1>
                <p>Productos caseros, preparados con ❤️, ricos sanos, agroecologícos pensados para una vida mas natural y sana</p>

            </div>

        </div>

    </div>
  )
}

export default Banner