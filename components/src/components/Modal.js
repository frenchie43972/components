import  ReactDOM  from "react-dom";
import { useEffect } from "react";

// Uses the props form the ModalPage to close the modal when clicked
function Modal({onClose, children, actionBar}) {
    // The useEffect here is so when there is a lot of content on the page,
    // the modal will show and scrolling will not be possible until the 
    // modal is close. That is why we are manipulating the body element
    // with overflow-hidden 
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            {/* Using the fixed property allows us to show the modal
            wherever we happen to be on the page */}
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;