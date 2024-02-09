import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar(props) {
  let { user, logOut } = props
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className='container'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="home"  > Home</NavLink>
        </li>

        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="movie"  >Movies </NavLink>
        </li>

        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="tv"  > Tv Show</NavLink>
        </li>

        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="People"  >People</NavLink>
        </li>

        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="About"  > About</NavLink>
        </li>

        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="network" > Network</NavLink>
        </li>
    

      
      </ul> */}  
      {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className='nav-item d-flex align-items-center'>
      <i className='fa-brands fa-facebook mx-2'  ></i>
      <i className='fa-brands fa-youtube mx-2'  ></i>
      <i className='fa-brands fa-google mx-2'  ></i>
      <i className='fa-brands fa-spotify mx-2'  ></i>


        </div>


      <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="login"  >login </NavLink>
        </li>
        <li className="nav-item">
       <NavLink   className={ ({isActive}) =>isActive ? 'nav-link active' :'nav-link'} to="register"  > Register</NavLink>
        </li>
        <li className="nav-item">
       <span className='nav-link'>logout</span>
        </li>

</ul> */}

{user != null ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">

<li className="nav-item">
  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='home'>Home</NavLink>
</li>
<li className="nav-item">
  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='about'>About</NavLink>
</li>


<li class="nav-item dropdown">

  <NavLink className={({ isActive }) => isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"} to='movies'>Movies</NavLink>

  <ul class="dropdown-menu">

    <li><a class="dropdown-item" >popular</a></li>
    <li><a class="dropdown-item" >top rated</a></li>
    <li><a class="dropdown-item" >upcoming</a></li>
    <li><a class="dropdown-item" >now playing</a></li>

  </ul>
</li>
<li className="nav-item">
  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='people'>people</NavLink>
</li>
<li className="nav-item">
  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='tv'>Tv Show</NavLink>
</li>

<li className="nav-item">
  <span className='nav-link' onClick={logOut}>LogOut</span>
</li>
</ul> : <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
<li className="nav-item d-flex  align-items-center">
  <i className='fa-brands fa-facebook mx-3'></i>
  <i className='fa-brands fa-instagram mx-3'></i>
  <i className='fa-brands fa-youtube mx-3'></i>
  <i className='fa-brands fa-spotify mx-3'></i>

</li>
<li className="nav-item">
  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='login'>Login</NavLink>
</li>
<li className="nav-item">
  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='register'>Register</NavLink>
</li>


</ul>}
      


    </div>
</div>

  </div>
</nav>






    </div>
  )
}
