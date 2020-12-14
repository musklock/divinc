import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import FormData from './form_data.jsx';



function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    console.log('edit_form_data');
    switch (modal) {
        case 'edit_form_data':
            return null
            break;
        default:
            return null;
    }
    return (
        <div className="modal_background" onClick={closeModal}>
            <div className="modal_child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
