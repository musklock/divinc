
import React, {useState, useEffect} from 'react';

import Header from '../header_footer/header';
// import TableContainer from '../table/table_container'

const RegistrationPage = props => {


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
              <Header/>

            
            </div>
        )
}

export default RegistrationPage