import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";
import axios from "axios";

const onSubmit = (props) => {
    const formData = new FormData();

    const json = JSON.stringify({
        "idProduct":  2, //perlu diganti
        "quantity": 1
    });
    console.log(json)
    const blobDoc = new Blob([json], {
        type: 'application/json'
    });

    formData.append('data', blobDoc)

    const config = {
        headers: {
            'content-type': 'multipart/mixed'
        }
    }
    console.log(formData)
    axios.post("http://localhost:2222/api/cart", formData, config)
        .then(res => console.log(res.data))

}
//
// var Id = props.id;


const ThisCard = (props) => (
    <Fragment>
        <Col md="3">
            <Card className="main-card mb-3">
                <CardImg top width="100%"
                         src={props.image}
                         alt={props.title}/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.category}
                        <br/> Stock: {props.stock}
                    </CardSubtitle>
                    <CardText>
                        <strong>Rp.{props.price}</strong>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button color="warning" type="button" onClick={onSubmit}>Add to Cart</Button>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
)

export default ThisCard