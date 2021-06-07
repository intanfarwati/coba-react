import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle, Col,
    Form,
    FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import axios from "axios";
import Select from "react-select";
// import FormProduct from "../Form";


const ModalAja = (props) => {
    const [data, setData] = useState("");
    const [idCategory, setIdCategory] = useState(data.idCategory);
    const [selectOption, setSelectOption] = useState();
    const [productName, setProductName] = useState();
    const [stock, setStock] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();


    // console.log(props)
    const onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.idPro,
            "productName": productName == null ? data.productName : productName,
            "idCategory": idCategory == null ? data.idCategory : idCategory,
            "stock": stock == null ? data.stock : stock,
            "price": price == null ? data.price : price
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append('idCategory', this.state.idCategory)
        formData.append("pictureUrl", picture == null ? data.pictureUrl : picture)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:2222/api/product/save", formData, config)
            .then(res => console.log(res.data))
    }

    const getOptions = async () => {
        const res = await axios.get('http://localhost:2222/api/productcategory', {
            headers: {'Content-Type': 'application/json'}
        })
        const data = res.data

        const options = data.map(d => ({
            "value": d.id,
            "label": d.categoryName

        }))

        setSelectOption(options)
    }

    const handleChangeSelect = (e) => {
        setIdCategory(e.value)
    }

    useEffect(() => {
        getOptions()
    }, [])



    useEffect(() => {
        axios.get('http://localhost:2222/api/product/' + props.idPro).then(res => {
            setData(res.data)
            console.log("ini adalah" + res.data)
        })
    }, [])

    console.log("ini" + data)
    return (
        <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                    <ModalHeader toggle={props.toggle}>Edit Product</ModalHeader>
                    <ModalBody>
                        <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Input Product Data</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="name">Product Name</Label>
                                                <Input type="text" name="name" id="name"
                                                        value={data.productName}
                                                       onChange={(e)=>{setProductName(e.value)}}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="category">Category Product</Label>
                                                <Select name="idCategory" id="idCategory" placeholder={data.categoryName}
                                                        options={selectOption}
                                                        onChange={handleChangeSelect.bind(this)}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="stock">Stock</Label>
                                                <Input type="text" name="stock" id="stock"
                                                       placeholder={data.stock}
                                                       onChange={(e)=>{setStock(e.value)}}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="price">Price</Label>
                                                <Input type="text" name="price" id="price"
                                                       placeholder={data.price}
                                                       onChange={(e)=>{setPrice(e.value)}}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Picture of Product</Label>
                                                <Input type="file" name="pictureUrl" id="pictureUrl"
                                                       placeholder="Input Picture of Product"
                                                       onChange={(e)=>{setPicture(e.files[0])}}
                                                />
                                            </FormGroup>

                                        </Form>
                                    </CardBody>
                                </Card>


                    </ModalBody>

                    <ModalFooter>
                        <Button color="link" onClick={props.toggle}>Cancel</Button>
                        <Button type="button" className="mt-1" color="primary"
                        onClick={onSubmit}>Submit</Button>
                    </ModalFooter>
                </Modal>
            </span>
    )

}

export default ModalAja;