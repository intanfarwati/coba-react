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

const Edit = (props) => {
    console.log(props.data)
    const [idCategory, setIdCategory] = useState(0)
    const [selectOptions, setSelectOptions] = useState([]);
    const [productName, setProductName] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [pictureUrl, setPictureUrl] = useState();
    const [dataLama, setDataLama] = useState(props.data)

    const onSubmit = () => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "productName": productName,
            "idCategory": idCategory == null ? props.data.idCategory : idCategory,
            "stock": stock == null ? props.data.stock : stock,
            "price": price == null ? props.data.price : price
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append('idCategory', this.state.idCategory)
        formData.append("pictureUrl", pictureUrl ==null ? props.pictureUrl : pictureUrl)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:2222/api/product/save", formData, config)
            .then(()=>{tampil()})

        props.onChangeToggle(false)
    }

    const tampil = () =>{props.tampil()}


    const getOptions = () => {
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



    useEffect(() => {
        getOptions();
        tampil()
    }, [])


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
                                    <Label for="name">Product Name {props.data.productName}</Label>
                                    <Input type="text" name="name" id="name"
                                           placeholder={props.data.productName}
                                           // value={productName == null ? props.data.productName : productName}

                                           onChange={(e) => {
                                        setProductName(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category Product</Label>
                                    <Select name="idCategory" id="idCategory"
                                            options={selectOptions}
                                        // onChange={handleChangeSelect.bind(this)}
                                            onChange={(e) => {
                                                setIdCategory(e.value)
                                            }}
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
                                    <Input type="file" name="pictureUrl" id="pictureUrl"
                                           placeholder="Input Picture of Product"
                                           onChange={(e) => {
                                               setPictureUrl(e.target.files[0])
                                           }}
                                    />
                                </FormGroup>
                                        </Form>
                                    </CardBody>
                        </Card>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                props.onChangeToggle(false)
                            }}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>

                    </ModalBody>
                </Modal>
            </span>
    )
}

export default Edit