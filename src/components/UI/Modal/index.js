import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function NewModal(props) {
    const {modalTitle, handleClose, show} = props
    return (
        <Modal size = {props.size} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default NewModal
