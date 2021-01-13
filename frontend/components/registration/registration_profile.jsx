
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


                <svg id="back-arrow-svg"width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* <g filter="url(#filter0_d)"> */}
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3626 23.8335L26.4728 35.3704L23.5265 37.9632L5.38672 22.0001L23.5265 6.03711L26.4728 8.62983L13.3626 20.1668H43.7497V23.8335H13.3626Z" fill="rgb(46, 44, 44)"/>
                {/* </g> */}
                <defs>
                {/* <filter id="filter0_d" x="-4" y="0" width="58" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation=".4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter> */}
                </defs>
                </svg>



                <h2 className="name-header">Profile Name</h2>
          
            </div>
        )
}

export default RegistrationProfile