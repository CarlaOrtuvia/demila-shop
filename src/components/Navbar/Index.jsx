import React from 'react'
import CartWidget from '../CartWidget/Index'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to='/' style={{fontFamily:'Kanit, sans-serif', fontSize:'30px', color:'#4cacbc', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>deMilamores</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" to='/category/Sola mi Alma y Yo' style={{fontFamily:'Kanit, sans-serif', color: '#6cc4a1', fontSize:'20px', marginLeft: '15px'}}>Sola mi Alma y Yo</NavLink>
        <NavLink className="nav-link" to='/category/En Compañía es Mejor'style={{fontFamily:'Kanit, sans-serif', color: '#6cc4a1', fontSize:'20px', marginLeft: '15px'}} >En Compañía es mejor</NavLink>
        <NavLink className="nav-link" to='/category/Amores de mi Alma' style={{fontFamily:'Kanit, sans-serif', color: '#6cc4a1', fontSize:'20px', marginLeft: '15px'}}>Amores de mi Alma</NavLink>
      </div>
      <div className='cart-container'>
        <NavLink to='cart' style={{marginLeft:'500px', color:'#6cc4a1'}}><CartWidget/></NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar