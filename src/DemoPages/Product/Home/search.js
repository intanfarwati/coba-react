import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {
    Button,
    Card, CardBody, CardFooter,
    CardSubtitle, CardText,
    CardTitle,
    Col,
    Jumbotron,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";
import cx from "classnames";
import NoSearch from "../Modal/NoSearch";
import {indexOf} from "react-widgets";
import {Link} from "react-router-dom";
import swal from "sweetalert";

const Search = ({match}) => {
    const [dataCard, setDataCard] = useState([]);
    const [search, setSearch] = useState("");
    const [listSearch, setListSearch] = useState(["semot"]);
    const [modalSearch, setModalSearch] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleSearch = () => {
        setModalSearch(!modalSearch)
    }

    const onChangeToggleSearch = () => {
        setModalSearch(!modalSearch)
    }

    const handleSearch = () => {
        axios.get('http://localhost:2222/api/product/find/' + search).then(
            res => {
                setDataCard(res.data);
                setListSearch(res.data);
                // setPanjang(res.data.length);
                console.log(res.data.length);
            }).catch()
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }


    // if (panjang === 0) {
    //     console.log("tak ada")
    //     return (
    //         <Fragment>
    //             <CSSTransitionGroup
    //                 component="div"
    //                 transitionName="TabsAnimation"
    //                 transitionAppear={true}
    //                 transitionAppearTimeout={0}
    //                 transitionEnter={false}
    //                 transitionLeave={false}>
    //
    //                 <NoSearch toggle={() => {
    //                     toggleSearch()
    //                 }} modal={modalSearch} onChangeToggle={onChangeToggleSearch()}/>
    //                 <Row style={{marginBottom: "20px"}}>
    //                     <div className={cx("search-wrapper", {
    //                         'active': true
    //                     })} style={{margin: "auto"}}>
    //                         <div className="input-holder">
    //                             <input type="text" className="search-input" placeholder="Type to search"
    //                                    onChange={(e) => {
    //                                        handleChangeSearch(e)
    //                                    }}/>
    //                             <button type="submit" onClick={() => {
    //                                 handleSearch()
    //                             }} className="search-icon"><span/></button>
    //                         </div>
    //                     </div>
    //                 </Row>
    //
    //                 <Row>
    //                     {dataCard.map((card, index) => (
    //                         <ThisCard key={index} id={card.id} title={card.productName} category={card.categoryName}
    //                                   stock={card.stock} price={card.price}/>
    //                     ))}
    //                 </Row>
    //             </CSSTransitionGroup>
    //         </Fragment>
    //     )
    // }


    // console.log(listSearch.length)
    if (listSearch.length === 0) {
        console.log(listSearch.length)
        console.log("tak ada")

        // setShow(true)
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <Row style={{marginBottom: "20px"}}>
                        <div className={cx("search-wrapper", {
                            'active': true
                        })} style={{margin: "auto"}}>
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Search product here.."
                                       onChange={(e) => {
                                           handleChangeSearch(e)
                                       }}/>
                                <button type="submit" onClick={() => {
                                    handleSearch()
                                }} className="search-icon"><span/></button>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col className="col-sm-4" style={{margin: "auto"}}>
                            <Card className="main-card mb-3 text-center" style={{alignItems:"center", fontSize:"18px"}}>
                                <CardBody>
                                    <CardText>
                                        <strong>Sorry, we don't have the product you search :(</strong>
                                    </CardText>

                                <Link to="/#/product/home" className="btn" style={{backgroundColor:"#8f10de", color:"#ffffff", outlineColor:"#8f10de", fontSize:"16px"}}>
                                    Take me to home
                                </Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>

                <Row style={{marginBottom: "20px"}}>
                    <div className={cx("search-wrapper", {
                        'active': true
                    })} style={{margin: "auto"}}>
                        <div className="input-holder">
                            <input type="text" className="search-input" placeholder="Search product here.."
                                   onChange={(e) => {
                                       handleChangeSearch(e)
                                   }}/>
                            <button type="submit" onClick={() => {
                                handleSearch()
                            }} className="search-icon"><span/></button>
                        </div>
                    </div>
                </Row>

                <Row>
                    {dataCard.map((card, index) => (
                        <ThisCard key={index} id={card.id} title={card.productName} category={card.categoryName}
                                  stock={card.stock} price={card.price}/>
                    ))}
                </Row>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Search;