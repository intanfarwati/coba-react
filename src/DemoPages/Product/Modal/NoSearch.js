import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./addToCart.css"
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const NoSearch = (props) => {

    return (
        <>
            <span className="mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} centered>
                        <ModalHeader toggle={props.toggle}>Congratulation!</ModalHeader>
                        <ModalBody>
                            <div>
                                <h6>Sorry we don't have the product you mentioned :(</h6>
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

export default NoSearch