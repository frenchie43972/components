import { useState } from "react";
import Modal from "../components/Modal"
import Button from "../components/Button";

function ModalPage() {
    // Piece of state that is set to default so the modal does not show
    const [showModal, setShowModal] = useState(false);

    // Click event that will show the modal 
    const handleClick = () => {
        setShowModal(true);
    };

    // Closes the modal
    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>Ni! Ni! Ni!</Button>
        </div>
    );
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
        What a strange person. Well, what do you want? Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. You can't expect to wield supreme power just 'cause some watery tart threw a sword at you!
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {/* An expression that IF showModal is TRUE we show the modal
            IF it is NOT TRUE the modal does not display */}
            {showModal && modal}
        </div>
    );
}

export default ModalPage