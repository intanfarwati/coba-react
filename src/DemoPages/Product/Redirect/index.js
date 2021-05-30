import React, {Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader";
import {Row} from "reactstrap";
import ThisCard from "../Kartu";
import AddProduct from "../Form";
import Tabel from "../Tabel"
import {Route} from "react-router-dom";
import FormElementsControls from "../../Forms/Elements/Controls";

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

                            {/*Form Product*/}
                            <Route path={`${match.url}/add-product`} component={AddProduct}/>

                            {/*Table Product*/}
                            <Route path={`${match.url}/table`} component={Tabel}/>
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Home;