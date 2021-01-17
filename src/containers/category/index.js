import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../actions/category.action'
import Input from '../../components/UI/Input'
import Modal from '../../components/UI/Modal/index';

function Category() {
    const category = useSelector(state=> state.category)
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] =  useState('')
    const [parentCategoryId, setparentCategoryId] =  useState('')
    const [categoryImage, setcategoryImage] =  useState('')
    
    const dispatch = useDispatch()

    const handleClose = () => {
        const form = new FormData()

        form.append('name', categoryName)
        form.append('parentId', parentCategoryId)
        form.append('categoryImage', categoryImage)
        dispatch(addCategory(form))
        setCategoryName('')
        setparentCategoryId('')
        // const cat = {
        //     categoryImage,
        //     categoryName,
        //     parentCategoryId
        // }
        // console.log('cat', cat)
        setShow(false)};
    const handleShow = () => setShow(true);

    const renderCategories = (categories)=>{
        let myCategories = []
        for(let category of categories){
            myCategories.push(
                <li key={category.name}>{category.name}
                    <ul>
                        {
                        category.children.length>0 ? 
                        (<ul>{renderCategories(category.children)}</ul>)
                        : null}
                    </ul>
                </li>
            )
        }
        return myCategories
    }

    const createCategoryList = (categories, options=[])=>{
        for(let category of categories){
            options.push({value: category._id, name: category.name})
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }
        return options
    }

    const handleCategoryImage = (e)=>{
        setcategoryImage(e.target.files[0])
    }
    
    return (
       <Layout sidebar>
           <Container>
               <Row>
                   <Col md={12}>
                       <div style={{display:"flex", justifyContent:'space-between'}}>
                            <h3>Category</h3>
                            <button onClick={handleShow}>Add</button>
                       </div>
                   </Col>
               </Row>

               <Row>
                   <Col md={12}>
                       <ul>
                            {renderCategories(category.categories)}
                       </ul>
                   </Col>
               </Row>

           </Container>

           <Modal
           show= {show}
           handleClose = {handleClose}
           modalTitle= {'Add new Category'}>
           <Input 
                    value={categoryName}
                    placeholder= {'Category Name'}
                    onChange = {e=>setCategoryName(e.target.value)}
                    />
                    <select 
                        value={parentCategoryId} 
                        className="form-control"
                         onChange={e=> setparentCategoryId(e.target.value)}>
                        <option>Select Category</option>
                        {createCategoryList(category.categories).map(option=>
                            <option key={option.value} value={option.value} >{option.name}</option>
                        )
                       }
                    </select>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage}></input>
           </Modal>
       </Layout>
    )
}

export default Category
