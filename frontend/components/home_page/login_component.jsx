import React from 'react';
import { connect } from 'react-redux';




const LoginContainer = (props) => {

    return (

        <span>
            <form className='login-container' action="">
                <input className="login-container-input" type="text" placeholder="Email"/>
                <input className="login-container-input" type="password" placeholder="Password"/>
                <input className="login-container-submit" type="submit" value={"LOGIN"}/>
              

            </form>


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

