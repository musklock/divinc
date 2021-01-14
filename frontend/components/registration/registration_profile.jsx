
import React, {useState, useEffect} from 'react';

import BlankHeader from '../header_footer/blank_header';
import Footer from '..//header_footer/footer'
import Dropdown from '../dropdown/dropdown'
// import TableContainer from '../table/table_container'


const RegistrationProfile = props => {

  // const questions = [
  //     {id: 1, value: "test1"}, 
  //     {id: 2, value: "test2"}, 
  //     {id: 3, value: "test3"},
  //     {id: 3, value: "test3"},
  //     {id: 3, value: "test3"},
  //     {id: 3, value: "test3"},
  //     {id: 3, value: "test3"},
  //   ]
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
              <div className="photo-bubble">
                <svg className="photo_button" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1864 13.6392C16.3517 13.4094 16.5353 13.128 16.7695 12.7487C16.855 12.6101 17.0882 12.2253 17.2619 11.9387C17.3546 11.7858 17.4303 11.6608 17.4576 11.6163C19.3919 8.45224 20.798 7 23.3334 7H35V11.6667H23.3334C23.131 11.6667 22.4945 12.324 21.4392 14.0504C21.4175 14.0859 21.3528 14.1925 21.2703 14.3288L21.2694 14.3302L21.2685 14.3316C21.0934 14.6205 20.8389 15.0405 20.7407 15.1995C20.4538 15.6644 20.2155 16.0297 19.9748 16.3643C18.9289 17.8183 17.8835 18.6667 16.3334 18.6667H9.33337C8.04471 18.6667 7.00004 19.7113 7.00004 21V42C7.00004 43.2887 8.04471 44.3333 9.33337 44.3333H46.6667C47.9554 44.3333 49 43.2887 49 42V28H53.6667V42C53.6667 45.866 50.5327 49 46.6667 49H9.33337C5.46738 49 2.33337 45.866 2.33337 42V21C2.33337 17.134 5.46738 14 9.33337 14H15.9045C15.9822 13.9112 16.0774 13.7908 16.1864 13.6392ZM39.6667 18.6667V14H44.3334V9.33335H49V14H53.6667V18.6667H49V23.3333H44.3334V18.6667H39.6667ZM28 42C21.5567 42 16.3334 36.7766 16.3334 30.3333C16.3334 23.89 21.5567 18.6667 28 18.6667C34.4434 18.6667 39.6667 23.89 39.6667 30.3333C39.6667 36.7766 34.4434 42 28 42ZM28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4674 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4674 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z" fill="black"/>
                  </svg>

              </div>


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




                <div className="profile_form">


                </div>

                <Footer/>
          
            </div>
        )
}

export default RegistrationProfile