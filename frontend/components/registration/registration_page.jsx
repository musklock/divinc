
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import RegisterHeader from '../header_footer/register_header';

// import TableContainer from '../table/table_container'

const RegistrationPage = ({userProfile, registration, updateRegistrationProfileObject, updateUserProfile, history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('&&&&');
  const [confirmation, setConfirmation ] = useState('');
  const [linkedin, setlinkedin] = useState('');

  const submit = () => {

    if (password != confirmation) {

      alert('Passwords must match!')
      return;

    }
    let userObject = {
      email: email,
      password: password,
      linkedin: linkedin
    }

    updateRegistrationProfileObject(userObject)
    history.push("/register2")

    }



    
    return (
            <div className="background_container">
              <RegisterHeader/>
              <div className="form-box-container">
                <div className="form_box">
                  <h1>Your Information</h1>
                  <form className="registration_form" onSubmit={()=>submit()}>
                    
                    <label className="registration_text">Email
                        <input type="text" onChange={event => setEmail(event.target.value)} placeholder="youremail@example.com"/>
                    </label>
                    <label className="registration_text">Password
                        <input type="password" onChange={event => setPassword(event.target.value)} placeholder="must be longer than 6 characters"/>
                    </label>
                    <label className="registration_text">Verify Password
                        <input type="password" onChange={event => setConfirmation(event.target.value)} placeholder="type to confirm your password"/>
                    </label>
                    <label className="registration_text" onChange={event => setlinkedin(event.target.value)}>Linkedin URL
                        <input type="text" />
                    </label>


                      <input type="submit" value="Register" className="register_button" />
                      
                      {/* <button className="register_button"><Link>Register</button> */}
                  </form>
                </div>
              </div> 
            </div>
        )
}

export default RegistrationPage