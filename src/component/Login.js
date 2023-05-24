import classes from './Login.module.css'


const Login = () => {
  return (
    <section className={classes.login}>
		<div className={classes.loginBox}>
			<div className={classes.left}>
				
				<div className={classes.contact}>
					<form action="">
						<h3>SIGN IN</h3>
            
						<input type="text" placeholder="USERNAME"/>
          
						<input type="text" placeholder="PASSWORD"/>
						<button className={classes.submit}>LET'S GO</button>
					</form>
				</div>
			</div>
			<div className={classes.right}>
				<div className={classes.rightText}>
					{/* <h2>WELCOME</h2> */}
					{/* <h5>HOST MYANMAR INSTITUTE</h5> */}
				</div>
				
			</div>
		</div>
	</section>
  )
}

export default Login