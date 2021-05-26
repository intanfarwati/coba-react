import React, {Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../Layout/AppHeader";
import {Row} from "reactstrap";
import ThisCard from "./Card/Card";

const Home = ({match}) => {
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
                                <ThisCard/>
                            </Row>
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Home;