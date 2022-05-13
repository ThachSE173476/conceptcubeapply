import React, {useState} from 'react';

import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal'

const ModalPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="open" onClick={()=> setOpen(true)}>
                <Button>Open Modal</Button>
            </div>
            <Modal open={open} setModalOpen={(bool) => setOpen(bool)}/>
        </div>
    );
}

export default ModalPage;
