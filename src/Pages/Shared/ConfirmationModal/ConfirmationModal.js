import React from 'react';

const ConfirmationModal = ({ title, description, closeModal, modalData, successAction }) => {
    return (
        <div>


            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  relative">
                    <label htmlFor="confirmation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-red-600">{title}</h3>
                    <p className="py-4 font-bold text-red-600">{description}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-error text-white ">Confirm</label>
                        <label onClick={closeModal} className="btn btn-outline text-primary ">Cancle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;