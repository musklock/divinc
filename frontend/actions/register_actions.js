// import * as OTBSampleAPIUtil from '../../util/otb_sample_api_util.js'

export const UPDATE_REGISTER = 'UPDATE_REGISTER_OBJECT_OBJECT';
export const UPDATE_USER_PROFILE= "UPDATE_USER_PROFILE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveErrors = errors => ({
    type: RECEIVE_OTB_SAMPLE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 


const updateRegisterObject = registerObject => {
    type: UPDATE_REGISTER_OBJECT,
    registerObject

}

const updateProfile = user => {
    type: UPDATE_USER_PROFILE,
    user
}


export const updateRegistrationProfileObject = (registrationObject) => dispatch => {
   dispatch(updateRegisterObect(registrationObject)), err => dispatch(receiveErrors(err.response.JSON))
}  

export const updateProfile = userObject => dispatch => {
    dispatch(updateProfile(userObject)), err => dispatch(receiveErrors(err.response.JSON))
}




// const receiveOTBSamples = OTBSamples => {
    
//  return {   type: RECEIVE_OTB_SAMPLES,
//     OTBSamples
//      }
// }

// const receiveOTBSample = OTBSample => ({
//     type: RECEIVE_OTB_SAMPLE,
//     OTBSample
// })

// const removeOTBSample = OTBSampleId => ({
//     type: REMOVE_OTB_SAMPLE,
//     OTBSampleId
// })



// export const fetchOTBSamples = () => dispatch => (
//     OTBSampleAPIUtil.fetchOTBSamples()
//         .then(OTBSamples => (dispatch(receiveOTBSamples(OTBSamples))
//         ), err => (
//             dispatch(receiveErrors(err.responseJSON))
//         ))
// )

// export const fetchOTBSample = id => dispatch => (
//     OTBSampleAPIUtil.fetchOTBSample(id)
//         .then(OTBSample => (dispatch(receiveAirTravel(OTBSample))
//         ), err => (
//             dispatch(receiveErrors(err.responseJSON))
//         ))
// )

// export const createOTBSample = OTBSample => dispatch => (
//     OTBSampleAPIUtil.createOTBSample(OTBSample)
//         .then(OTBSample => (dispatch(receiveOTBSample(OTBSample))
//         ), err => (
//             dispatch(receiveErrors(err.responseJSON))
//         ))
// )
// export const updateOTBSample = OTBSample => dispatch => (
//     OTBSampleAPIUtil.updateOTBSample(OTBSample)
//         .then(OTBSample => (dispatch(receiveOTBSample(OTBSample))
//         ), err => (
//             dispatch(receiveErrors(err.responseJSON))
//         ))
// )
// export const deleteOTBSample = OTBSampleId => dispatch => (
//     OTBSampleAPIUtil.deleteOTBSample(OTBSampleId)
//         .then(() => dispatch(removeOTBSample(OTBSampleId)))
// )