import React, {Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader";
import {Row} from "reactstrap";
import ThisCard from "../Kartu";

const Home = ({match}) => {
    return (
        <Fragment>
            <Row>
                <ThisCard/>
            </Row>
        </Fragment>
    )
}


export default Home;