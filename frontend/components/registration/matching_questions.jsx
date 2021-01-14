
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import MenteeDropdown1 from '../dropdown/menteedropdown1';
import MenteeDropdown2 from '../dropdown/menteedropdown2';
import MenteeDropdown3 from '../dropdown/menteedropdown3';
import MentorDropdown1 from '../dropdown/mentordropdown2';
import MentorDropdown2 from '../dropdown/mentordropdown1';
import MentorDropdown3 from '../dropdown/mentordropdown3';
import MentorDropdown4 from '../dropdown/mentordropdown4';


const industries = [
        {
        id: 0,
        value: "ARts, Audio/Video Technology, Communication",
        },
        {
        id: 1,
        value: "Architecture, Construction and Manufacturing"
        },
        {
        id: 2,
        value: "Agriculture, Food and Natural Resources",
        },
        {
        id: 3,
        value: "Business, Managemetn and Administration",
        },
        {
        id: 4,
        value: "Education",
        },
        {
        id: 5,
        value: "Engineering",
        },
        {
        id: 6,
        value: "Government and Public Services",
        },
        {
        id: 7,
        value: "Healthcare",
        },
        {
        id: 8,
        value: "Hospitality",
        },
        {
        id: 9,
        value: "Information Technology",
        },
        {
        id: 10,
        value: "Law/Legal",
        },

      ]

const fields = [
  {
  id: 0,
  value: "Product Management",
  },
  {
  id: 1,
  value: "User Experience Design"
  },
  {
  id: 2,
  value: "Software Engineering",
  },
  ]

 const menteeGoals = [
        {
        id: 0,
        value: "Build Confidence",
        },
        {
        id: 1,
        value: "Develop Transferrable Skills"
        },
        {
        id: 2,
        value: "Resume Feedback",
        },
        {
        id: 3,
        value: "Job Search Strategy",
        },
        {
        id: 4,
        value: "Interview Feedback",
        },
        {
        id: 5,
        value: "Build ongoing relationships with experienced professionals",
        },

        ]

 const  yesNoSelect = [
        {
        id: 0,
        value: "No",
        },
        {
        id: 1,
        value: "Yes"
        },
       
        ]        


const mentorGoals = [
{
id: 0,
value: "Help Build Confidence",
},
{
id: 1,
value: "Help Develop Transferrable Skills"
},
{
id: 2,
value: "Give Resume Feedback",
},
{
id: 3,
value: "Help with Job Search Strategy",
},
{
id: 4,
value: "Give Interview Feedback",
},
{
id: 5,
value: "Build ongoing relationships with aspiring professionals",
},

]

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

              { 
                (registration.userType === "mentee") ?
                <div className="form_box">

                  <form className="registration_form" onSubmit={()=>submit()}>
                    <h1 className="form_header">Let's get started with matching you with some mentees!</h1>

                    <label className="dropdown_label"> Have you switched from another Industry into tech?
                      <MenteeDropdown1 title="Select One" items={yesNoSelect}/>
                    </label>
                    <label className="dropdown_label"> If yes, which industry did you switch from?
                      <MenteeDropdown2 title="Select One" items={industries}/>
                    </label>
                    <label className="dropdown_label"> What's your current field?
                      <MenteeDropdown3 title="Select One" items={fields}/>
                    </label>
                    <label className="dropdown_label"> What can you offer as a mentor?
                      <MenteeDropdown3 title="Select All That Apply" items={mentorGoals} multiselect/>
                    </label>

                    <input type="submit" value="Submit"/>

                  </form>
                </div> :

                <div className="form_box">

                  <form className="registration_form" onSubmit={()=>submit()}>
                    <h1 className="form_header">Let's get started with matching you with some mentors!</h1>

                    <label className="dropdown_label"> What industry are you currently in?
                      <MentorDropdown1 title="Select One" items={industries}/>
                    </label>
                    <label className="dropdown_label"> What's your desired field in Tech?
                      <MentorDropdown2 title="Select One" items={fields}/>
                    </label>
                    <label className="dropdown_label"> What do you wnat out of mentorship?
                      <MentorDropdown3 title="Select One" items={menteeGoals}/>
                    </label>
                
                    <input type="submit" value="Submit"/>

                  </form>
                </div>

              }

              </div> 
            </div>
        )
}

export default MatchingQuestions