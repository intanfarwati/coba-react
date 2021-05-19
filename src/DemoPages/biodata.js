import React, {Fragment, Component} from 'react';

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

function LabelBaru(props) {
    return <label>{props.name}</label>
}

class Biodata extends Component {
    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Form Biodata</CardTitle>
                                    <Form>
                                        <FormGroup>
                                            <LabelBaru name={"Nameeeeee"}/>
                                            <Input type="text" name="name" id="exampleName"
                                                   placeholder="Input Name"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail"
                                                   placeholder="Input Email"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="religion">Religion</Label>
                                            <Input type="select" name="religion" id="religion">
                                                <option>Islam</option>
                                                <option>Christ</option>
                                                <option>Buddhist</option>
                                                <option>Hindu</option>
                                                <option>Atheist</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <div>
                                            <Label>Gender</Label>
                                                <CustomInput type="radio" id="male" name="gender"
                                                             label="Male"/>
                                                <CustomInput type="radio" id="female" name="gender"
                                                             label="Female"/>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="address">Address</Label>
                                            <Input type="textarea" name="address" id="address"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleFile">Image</Label>
                                            <Input type="file" name="file" id="exampleFile"/>
                                            <FormText color="muted">
                                                Please input your image
                                            </FormText>
                                        </FormGroup>
                                        <Button color="primary" className="mt-1">Submit</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </CSSTransitionGroup>
            </Fragment>
        )
    };
}

export default Biodata