import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const AddToCart = (props) => {

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} style={{margin:"center"}}>
                        <ModalHeader toggle={props.toggle}>Congratulation!</ModalHeader>
                        <ModalBody>
                            <div>
                                <h6>Your product has been added to your cart!</h6>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => {
                                props.onChangeToggle(false)
                            }} style={{margin:"auto"}}><p style={{fontSize:"18px", margin:"auto"}}>OK</p></Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default AddToCart