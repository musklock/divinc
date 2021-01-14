export const SET_CURRENT_OTB_SAMPLE_HISTORIES = "SET_CURRENT_OTB_SAMPLE_HISTORIES";

export const setCurrentOTBSampleHistories = currentOTBSampleHistories => {
    return {
    type: SET_CURRENT_OTB_SAMPLE_HISTORIES,
    currentOTBSampleHistories
    }
}