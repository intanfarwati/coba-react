import React, {Fragment} from "react";
import {Button, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import FormProduct from "../Form";


const Modal = (props) => {
    return (
        <Fragment>
            <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                    <ModalHeader toggle={props.toggle}>Edit Product</ModalHeader>
                    <ModalBody>
                        {/*<FormProduct/>*/}
                        Lorem
                    </ModalBody>

                    <ModalFooter>
                        <Button color="link" onClick={props.toggle}>Cancel</Button>
                        <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        </Fragment>
    )

}

export default Modal;