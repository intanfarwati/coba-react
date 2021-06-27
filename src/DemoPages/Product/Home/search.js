import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {Button, Card, Col, Jumbotron, Row} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";
import cx from "classnames";
import NoSearch from "../Modal/NoSearch";
import {indexOf} from "react-widgets";

const Search = ({match}) => {
    const [dataCard, setDataCard] = useState([]);
    const [search, setSearch] = useState("");
    const [listSearch, setListSearch] = useState();
    const [searchActive, setSearchActive] = useState(false);
    const [modalSearch, setModalSearch] = useState();
    const [panjang, setPanjang] = useState(1)

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
                            <input type="text" className="search-input" placeholder="Type to search"
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