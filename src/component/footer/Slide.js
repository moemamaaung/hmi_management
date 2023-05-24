import img1 from '../../images/a.jpg'
import img2 from '../../images/n4.jpg'
import img3 from '../../images/c3.jpg'
import img4 from '../../images/j2.jpg'
import img5 from '../../images/se1.jpg'
import img6 from '../../images/sql.jpg'
import Marquee from 'react-fast-marquee'
import classes from './Footer.module.css'

const Slide = () => {

    const background = `marque-wrapper home-wrapper-2 py-3 ${classes.bimg}`
  return (

    <div className={background}>
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src={img1} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img2} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img3} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img4} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img5} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img6} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img5} className={classes.image} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={img6} className={classes.image} alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Slide