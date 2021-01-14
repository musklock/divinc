
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import MenteeDropdown1 from '../dropdown/menteedropdown1';
import MenteeDropdown2 from '../dropdown/menteedropdown2';
import MenteeDropdown3 from '../dropdown/menteedropdown3';
import MentorDropdown1 from '../dropdown/mentordropdown1';
import MentorDropdown2 from '../dropdown/mentordropdown2';
import MentorDropdown3 from '../dropdown/mentordropdown3';
import MentorDropdown4 from '../dropdown/mentordropdown4';


import RegisterHeader from '../header_footer/register_header';

// import TableContainer from '../table/table_container'

const MatchingQuestions = ({userProfile, registration, updateRegistrationProfileObject, updateUserProfile, history}) => {
  const [mentor1, setMentor1] = useState('');
  const [mentor2, setMentor2] = useState('');
  const [mentor3, setMentor3] = useState('');
  const [mentor4, setMentor4] = useState('');
  
  
  const [mentee1, setMetee1] = useState('');
  const [mentee2, setMetee2] = useState('');
  const [mentee3, setMetee3] = useState('');

  const submit = () => {
    let userObject;
    if (registration.userType === "mentor") {

      userObject = {
        careerSwitcher: mentor1,
        industry: mentor2,
        currentField: mentor3,
        offering: mentor4
      }
    }

    if (registration.userType === "mentee") {

      userObject = {
        industry: mentee1,
        currentField: mentee2,
        goals: mentee3
      }

    }

    updateRegistrationProfileObject(userObject)
    history.push("/matchpage")

    }



    
    return (
            <div className="background_container">
              <RegisterHeader/>
              <div className="form-box-container">
                <div className="form_box">
                  <h1>Your Information</h1>
                  <form className="registration_form" onSubmit={()=>submit()}>
                    
                    <label className="registration_text">Full Name
                        <input type="text" onChange={event => setName(event.target.value)}/>
                    </label>
                    
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

export default MatchingQuestions