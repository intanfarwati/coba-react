import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";

const ThisCard = (props)=> (
    <Fragment>
        <Col md ="3">
            <Card className="main-card mb-3">
                <CardImg top width="100%"
                         src={props.image}
                         alt={props.title}/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.category}
                    <br /> Stock: {props.stock}
                    </CardSubtitle>
                    <CardText >
                        Rp.{props.price}
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button>Add to Cart</Button>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
)

export default ThisCard