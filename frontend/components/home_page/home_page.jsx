
import React, {useState, useEffect} from 'react';
import LoginComponent from './login_component';
import Header from '../header_footer/main_page_header';
import Footer from '../header_footer/footer'
// import TableContainer from '../table/table_container'
import {Link} from 'react-router-dom';

const HomePage = props => {


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
              <div className="main_page_background"> 
              <div className="header-prompt">Match with a mentor in your desired field and start building skills and confidence for your career switch</div>
                <LoginComponent/>
       
                

              </div>

              <Footer/>
            </div>
        )
}

export default HomePage