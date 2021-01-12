
import React, {useState, useEffect} from 'react';

import BlankHeader from '../header_footer/blank_header';
// import TableContainer from '../table/table_container'

const RegistrationProfile = props => {


// useEffect(() => {
//     props.fetchOTBSamples()
//     props.fetchOTBSampleHistories()
// }, [])    

let table = true;
// function container() {
//     if (table) {
//         return <TableContainer/>
//     }
// }

const [initialData, setInitialData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  }, [])


    
    return (
            <div className="main_page_container">
              <BlankHeader/>

              
              
              <div className="blue-top">
                <div className="blue-header-text bold">Create your profile</div>
                <div className="blue-header-text ">Tell your future mentees about yourself.</div>
                <div className="blue-header-text ">Tell your future mentors about yourself.</div>

    
                {/* <div> if statement for mentor/mentee</div> */}
                
                </div>
              <div className="photo-bubble"></div>
        
            </div>
        )
}

export default RegistrationProfile