import classes from './ProgramFee.module.css'

const ProgramFee = () => {
    const btn = `btn mb-2 ${classes.btn}`

    return (
        
        <div>
            <div className="all-title-box">
                <div className={classes.text}>
                    <h1> Program Fee</h1>
                     </div>
            </div>
            <div className="pricing-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className={classes.singlePrice}>
                                <div className={classes.dealTop}>
                                    <h3>Year-I</h3>
                                    <h4> 3,500,000 <span className="sup">MMK</span> </h4>
                                </div>
                                <div className={classes.dealButton}>

                                    <ul className={classes.dealItem}>
                                        <li><i class="fas fa-check fa-sm"></i> 3 Times Installment / Year</li>
                                        <li><i class="fas fa-check fa-sm"></i> Program fee covers tution &</li>
                                        <li><i class="fas fa-check fa-sm"></i> Registration & text books fees</li>
                                        <li><i class="fas fa-check fa-sm"></i> Not include ITPEC exam fees</li>

                                        <li><i class="fas fa-check fa-sm"></i> Office Day: Mon-Fri 09:00AM-05:00PM</li>
                                    </ul>
                                    <button className={btn}>Register</button>  
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className={classes.singlePrice}>
                                <div className={classes.dealTop}>
                                    <h3>Year-II</h3>
                                    <h4> 3,000,000 <span className="sup">MMK</span> </h4>
                                </div>
                                <div className={classes.dealButton}>
                                    <ul className={classes.dealItem}>
                                        <li><i class="fas fa-check fa-sm"></i> 3 Times Installment / Year</li>
                                        <li><i class="fas fa-check fa-sm"></i> Program fee covers tution &</li>
                                        <li><i class="fas fa-check fa-sm"></i> Registration & text books fees</li>
                                        <li><i class="fas fa-check fa-sm"></i> Not include ITPEC exam fees</li>

                                        <li><i class="fas fa-check fa-sm"></i> Office Day: Mon-Fri 09:00AM-05:00PM</li>
                                    </ul>
                                    
                                    <button className={btn}>Register</button>  
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>








        </div>







    )
}

export default ProgramFee