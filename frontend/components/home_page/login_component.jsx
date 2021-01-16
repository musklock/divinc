import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';



const LoginContainer = (props) => {

    return (

        <span className="login-wrapper">
            <form className='login-container' action="">
                <input className="login-container-input" type="text" placeholder="Email"/>
                <input className="login-container-input" type="password" placeholder="Password"/>
                <input className="login-container-submit" type="submit" value={"LOGIN"}/>
                <a href="#" className="reset-password">Forgot password?</a>
              

            </form>

            <div className="register-container"><p>Don't have an account? <Link className="signup-link" to="/register">Sign up</Link></p></div>

        </span>
    )
}
 

const mSTP = state => {
    return {

    }
}


const mDTP = dispatch => {
    return {

    }

}




export default connect(mSTP, mDTP)(LoginContainer)

