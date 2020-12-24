import React from 'react';
import { connect } from 'react-redux';




const LoginContainer = (props) => {

    return (

        <span>
            <form action="">
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value={"LOGIN"}/>

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

