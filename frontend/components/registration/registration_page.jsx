
import React, {useState, useEffect} from 'react';


import Header from '../header_footer/main_page_header';

// import TableContainer from '../table/table_container'

const RegistrationPage = props => {



// const [initialData, setInitialData] = useState([{}]);

//   useEffect(() => {
//     fetch('/api').then(
//       response => response.json()
//     ).then(data => setInitialData(data))
//   }, [])

const handleSubmit = (e) => {
  e.preventDefault();
}

    
    return (
            <div className="main_page_container">
              <Header/>
              <div className="background_container">
                <div className="form_box">
                  <h1>Your Information</h1>
                  <form className="registration_form" onSubmit={handleSubmit(event)}>
                    
                    <label className="registration_text">Email
                        <input type="text" placeholder="youremail@example.com"/>
                    </label>
                    <label className="registration_text">Password
                        <input type="text" placeholder="must be longer than 6 characters"/>
                    </label>
                    <label className="registration_text">Verify Password
                        <input type="text" placeholder="type to confirm your password"/>
                    </label>
                    <label className="registration_text">Linkedin URL
                        <input type="text" />
                    </label>


                      <button className="register_button">Register</button>
                  </form>
                </div>
              </div> 
            </div>
        )
}

export default RegistrationPage