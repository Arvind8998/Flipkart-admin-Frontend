import * as React from "react"
import Modal from "../../../components/UI/Modal/index"
import Input from "../../../components/UI/Input/index"
import { Col, Row } from "react-bootstrap"

const AddCategoryModal = (props) => {
  const {
    show,
    handleClose,
    categoryName,
    setCategoryName,
    modalTitle,
    parentCategoryId,
    setparentCategoryId,
    categoryList,
    handleCategoryImage,
    onSubmit,
  } = props
  return (
    <Modal
      show={show}
      onSubmit={onSubmit}
      handleClose={handleClose}
      modalTitle={modalTitle}
    >
      <Row>
        <Col>
          <Input
            value={categoryName}
            placeholder={"Category Name"}
            onChange={(e) => setCategoryName(e.target.value)}
            className="form-control-sm"
          />
        </Col>
        <Col>
          <select
            value={parentCategoryId}
            className="form-control form-control-sm"
            onChange={(e) => setparentCategoryId(e.target.value)}
          >
            <option>Select Category</option>
            {categoryList.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <input
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
        ></input>
      </Row>
    </Modal>
  )
}

export default AddCategoryModal
