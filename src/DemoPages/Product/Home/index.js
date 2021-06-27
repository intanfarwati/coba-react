import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {Row} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";


const Home = ({match}) => {
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2222/api/product").then(res => {
            setDataCard(res.data)
        }).catch()
    }, [])

    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>

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


export default Home;