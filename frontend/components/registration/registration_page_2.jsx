
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import RegisterHeader from '../header_footer/register_header';
// import TableContainer from '../table/table_container'
import Footer from '../header_footer/footer'
const RegistrationPage2 = ({userProfile, registration, updateRegistrationProfileObject, updateUserProfile}) => {


// useEffect(() => {
//     props.fetchOTBSamples()
//     props.fetchOTBSampleHistories()
// }, [])    

// let table = true;
// function container() {
//     if (table) {
//         return <TableContainer/>
//     }
// }





// const [initialData, setInitialData] = useState([{}]);

//   useEffect(() => {
//     fetch('/api').then(
//       response => response.json()
//     ).then(data => setInitialData(data))
//   }, [])


    
    return (
            <div className="main_page_container">
              <RegisterHeader/>

              
              
              
              <div className="background_container">
                <div className="form_box">
                  <h2>Are you interested in being a mentor or a mentee?</h2>
                  
                  
                      <Link to="/register3" className="register_button" onClick={()=> updateRegistrationProfileObject({userType: "mentor"})}>Mentor</Link>
                      <Link to="/register3"  className="register_button" onClick={()=> updateRegistrationProfileObject({userType: "mentee"})}>Mentee</Link>
                  
                </div>
              
            </div>
            <Footer/>
            </div>
        )
}

export default RegistrationPage2