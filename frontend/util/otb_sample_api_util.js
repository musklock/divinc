import $ from 'jquery';

export const fetchOTBSamples = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'api/otb_samples',
    })
    
}

export const fetchOTBSample = id => (
    $.ajax({
        method: 'GET',
        url: `api/otb_samples/${id}`
    })
)

export const createOTBSample = OTBSample => {
    
 return   $.ajax({
        method: 'POST',
        url: `api/otb_samples`,
        data: { OTBSample }
    })
}

export const updateOTBSample = (OTBSample, OTBSampleCompositeId) => (
    $.ajax({
        method: 'PATCH',
        url: `api/otb_samples/${OTBSampleCompositeId}`,
        data: { OTBSample }
    })
)

export const deleteOTBSample = OTBSampleCompositeId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/otb_samples/${OTBSampleCompositeId}`,
        data: OTBSampleCompositeId
    })
}