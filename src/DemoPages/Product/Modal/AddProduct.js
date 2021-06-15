import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, CardTitle, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {IoIosSettings} from "react-icons/io";
import Select from "react-select";

const AddProduct = (props) => {
    const [idCategory, setIdCategory] = useState(0)
    const [selectOptions, setSelectOptions] = useState([]);
    const [productName, setProductName] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [picture, setPicture] = useState();
    const [file, setFile] = useState()

    const onSubmit = () => {

        const formData = new FormData();
        const json = JSON.stringify({
            "productName": productName,
            "idCategory": idCategory,
            "stock": stock,
            "price": price,
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('pictureUrl', picture)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:2222/api/product/save", formData, config)
            .then(props.tampil).catch()

        props.onChangeToggle(false)
        props.tampil();

    }


    const getOptions = () => {
        console.log("why im not around")
        axios.get('http://localhost:2222/api/productcategory', {
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            const data = res.data;
            const options = data.map(d => ({
                "value": d.id,
                "label": d.categoryName

            }));
            setSelectOptions(options)
        })

        console.log(selectOptions)
    }

    // const tampil = () =>{props.tampil}

    useEffect(() => {
        getOptions();
    }, [])

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle}>
                        <ModalHeader toggle={props.toggle}>Input Product Data</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Product Name</Label>
                                    <Input type="text" name="name" id="name"
                                           placeholder="Input Name of Product" onChange={(e) => {
                                        setProductName(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category Product</Label>
                                    <Select name="idCategory" id="idCategory"
                                            options={selectOptions}
                                            // onChange={handleChangeSelect.bind(this)}
                                            onChange={(e)=>{setIdCategory(e.value)}}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="stock">Stock</Label>
                                    <Input type="number" name="stock" id="stock"
                                           placeholder="Input Stock of Product" onChange={(e) => {
                                        setStock(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="text" name="price" id="price"
                                           placeholder="Input Price of Product" onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Picture of Product</Label>
                                    <Input type="file" name="picture" id="picture"
                                           placeholder="Input Picture of Product"
                                           onChange={(e) => {
                                        setPicture(e.target.files[0])
                                    }}
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                props.onChangeToggle(false)
                            }}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default AddProduct;