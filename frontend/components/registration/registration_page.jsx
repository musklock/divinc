
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
                <div> className="form_box"
                  <form onSubmit={handleSubmit(e)}>
                    


                      <button className="register_button">Register</button>
                  </form>
                </div>
              </div> 
            </div>
        )
}

export default RegistrationPage