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
    const [data, setData]= useState([]);

    useEffect(()=> {
        axios.get('http://localhost:2222/api/product/' + props.idPro).then(res=>{
            setData(res.data)
            console.log(res.data)
        })
    })

    console.log(data.id)
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
                                                       placeholder="Input Name of Product" value={data.productName}
                                                       />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="category">Category Product</Label>
                                                <Select name="idCategory" id="idCategory" value={data.idCategory}
                                                        />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="stock">Stock</Label>
                                                <Input type="text" name="stock" id="stock"
                                                       placeholder="Input Stock of Product" value={data.stock}
                                                      />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="price">Price</Label>
                                                <Input type="text" name="price" id="price"
                                                       placeholder="Input Price of Product" value={data.price}
                                                       />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Picture of Product</Label>
                                                <Input type="file" name="pictureUrl" id="pictureUrl"
                                                       placeholder="Input Picture of Product"
                                                       />
                                            </FormGroup>
                                            <Button type="submit" className="mt-1" color="primary"
                                                   >Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>


                    </ModalBody>

                    <ModalFooter>
                        <Button color="link" onClick={props.toggle}>Cancel</Button>
                        <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
    )

}

export default ModalAja;