import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'
import logo from '../images/navhmi.jpg'

const MainNavigation = () => {

  const login = `btn btn-primary me-3  ${classes.login}`
  const navbg = `navbar navbar-expand-lg navbar-light    ${classes.navbg}`
  const text = `nav-link text-light me-4 ${classes.text}`
  const text1 = `nav-link active font-weight-semi-bold dropdown-toggle text-light me-4 ${classes.text1}`
  const menu1 = `navbar-nav ml-auto ${classes.menu1}`

  return (

<header class="top-navbar">
		<nav class={navbg}>
			<div class="container-fluid">
				<a class="navbar-brand" href="index.html">
					<img src={logo} alt="" />
				</a>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
              <span className="navbar-toggler-icon"></span>
        </button>
				<div class="collapse navbar-collapse" id="main_nav">
					<ul class={menu1}>
          <li class="nav-item dropdown">
          <a className={text1} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Subjects
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">C Programming</a></li>
                    <li><a className="dropdown-item" href="#"> A+ Network</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
						</li>
						<li class="nav-item active"><Link to='/' class={text}>Home</Link></li>
						<li class="nav-item"><Link to='/about' class={text} >AboutUs</Link></li>
					  <li class="nav-item"><Link to='/teacher' class={text} >Teachers</Link></li>
						<li class="nav-item"><Link to='program-fee' class={text} >Pricing</Link></li>
						<li class="nav-item"><Link to='/contact' class={text}>Contact</Link></li>
					</ul>
					<Link className={login} type="button">Login</Link>
          </div>
			</div>
		</nav>
	</header>

  )
}

export default MainNavigation

