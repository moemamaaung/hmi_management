import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'
import logo from '../images/hmilogo.png'

const MainNavigation = () => {

  const login = `btn btn-primary me-5  ${classes.login}`
 
  const sub = `nav-item dropdown me-5 ${classes.sub}`
  
  const navbg = `navbar  navbar-expand-lg fixed-top  ${classes.navbg}`
  const img = `rounded-circle  ${classes.img}`
  const text = `nav-link text-light me-5 ${classes.text}`
  const text1 = `nav-link active font-weight-semi-bold dropdown-toggle text-light ${classes.text1}`
  const t1 = `text-light ${classes.t1}`
 
  const menu1 = `navbar-nav  me-0 ${classes.menu1}`

  return (
   


        <nav className={navbg} >
           {/* <div className="container-fluid ">  */}
            <div className="col-lg-3 ms-5">
              <a href="" className="text-decoration-none ">
              <div className="row">
              <div className="col-md-2 ">
              <img src={logo} className={img} />
              </div>
              <div className="col-md-8 ms-3">
              <h2 className={t1}>H <i class="fas fa-globe fa-sm "></i> S T </h2>
                <h5 className="text-light mt-0">MYANMAR INSTITUTE</h5>
              </div>
              </div>
         
        
              </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
          
              <ul className={menu1}>
                <li className={sub}>
                  <a className={text1} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Subjects
                    {/* <i class="fas fa-book-open fa-sm mx-1"></i>  Subjects */}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">C Programming</a></li>
                    <li><a className="dropdown-item" href="#"> A+ Network</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item "><Link to='/' className={text} href="#"> Home </Link></li>
                <li className="nav-item"><Link to='/about' className={text} href="#"> About</Link></li>
                <li className="nav-item"><Link to='/program-fee' className={text} href="#"> Program Fee </Link></li>
                <li className="nav-item"><Link to='/teacher' className={text} href="#"> Teacher</Link></li>
                <li className="nav-item"><Link to='/contact' className={text} href="#"> Contact</Link></li>
                
                {/* <li className="nav-item"><Link to='/card' className={text} href="#"> Card</Link></li> */}
              </ul> 
              <form className="d-flex ">

                <Link to='/login' className={login} type="button">Login</Link>
              </form></div>
           
           {/* </div>  */}

        </nav>
  











  )
}

export default MainNavigation

