import React from "react"
import { Modal, Button } from "react-bootstrap"

function NewModal(props) {
  const { modalTitle, handleClose, onSubmit, show } = props
  return (
    <Modal size={props.size} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.buttons ? (
          props.buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))
        ) : (
          <Button
            variant="primary"
            {...props}
            style= {{backgroundColor: "#333"}}
            className="btn-sm"
            onClick={onSubmit}
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default NewModal
