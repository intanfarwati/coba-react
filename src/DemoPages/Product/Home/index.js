import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader";
import {Row} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";

const Home = ({match}) => {
    console.log("udah ada")
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:2222/api/product").then(res => {
            setDataCard(res.data)

            console.log(imageArrayPath)
        })
    }, [])

    useEffect( () => {
        dataCard.map((data, index)=>{
            axios.get('http://localhost:2222/api/product/getImage/'+data.id).then(res => {
                imageArrayPath.push(res.data)
                console.log(res.data)
                console.log("udah ada")
            })
        })
    })


    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                        <Row>
                {dataCard.map((card, index) => (
                    <ThisCard key={index} title={card.productName} category={card.categoryName} stock={card.stock} price={card.price} image={imageArrayPath[index]}/>
                ))}
            </Row>
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Home;