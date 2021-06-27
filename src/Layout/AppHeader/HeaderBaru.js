import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import HeaderLogo from '../AppLogo';
import MegaMenu from './Components/MegaMenuBaru';

function Header(props) {
    console.log("ada ga sih")
    let {
        headerBackgroundColor,
        enableMobileMenuSmall,
        enableHeaderShadow
    } = props;
    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                className={cx("app-header", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                transitionName="HeaderAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}>

                <HeaderLogo/>


                <div className={cx(
                    "app-header__content",
                    {'header-mobile-open': enableMobileMenuSmall},
                )}>


                    <div className="app-header-left">
                        <MegaMenu/>
                    </div>

                    <div className="app-header-right">

                        <div className={cx("search-wrapper", {
                            'active': true
                        })}>
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Type to search"
                                       onChange={
                                           props.handleChangeSearch
                                       }/>
                                <button onClick={
                                    props.handleSearch
                                }
                                        className="search-icon"><span/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);