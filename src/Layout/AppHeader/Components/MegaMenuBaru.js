import React, {Fragment, lazy} from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover,
    Nav, NavLink, Col, Row, NavItem, UncontrolledButtonDropdown, Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

import bg2 from '../../../assets/utils/images/dropdown-header/abstract2.jpg';
import bg3 from '../../../assets/utils/images/dropdown-header/abstract3.jpg';

import {
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";


class MegaMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            popoverOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            popoverOpen: !this.state.popoverOpen

        });
    }

    state = {};

    render() {
        return (
            <Fragment>
                <Nav className="header-megamenu">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <div style={{display: "flex"}}>
                                <div>
                                    <i className="nav-link-icon pe-7s-gift"> </i>
                                </div>
                                <div style={{lineHeight: "20px", fontSize: "17px"}}>
                                    {/*<p className="nav-item" style={{lineHeight:"20px", fontSize:"17px"}}>Products</p>*/}
                                    Products
                                </div>
                                <div>
                                    <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>
                                </div>
                            </div>

                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-rounded dropdown-menu-lg rm-pointers">
                            <div className="dropdown-menu-header"
                                 style={{backgroundColor: "#d099f2"}}>
                                <div className="dropdown-menu-header-inner">
                                    <div className="menu-header-content text-left">
                                        <h5 className="menu-header-title" style={{color: "#5f0963"}}>Products Daily
                                            You</h5>
                                    </div>
                                </div>
                            </div>
                            <Link to="/product/make-up" style={{textDecoration: "none", color: "#5f0963"}}>
                                <DropdownItem>
                                    Make Up
                                </DropdownItem>
                            </Link>
                            <Link to="/product/skin-care" style={{textDecoration: "none", color: "#5f0963"}}>
                                <DropdownItem>
                                    Skin Care
                                </DropdownItem>
                            </Link>
                            <Link to="/product/body-care" style={{textDecoration: "none", color: "#5f0963"}}>
                                <DropdownItem>
                                    Body Care
                                </DropdownItem>
                            </Link>

                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/#/product/table">
                            <div style={{display: "flex"}}>
                                <div>
                                    <i className="nav-link-icon pe-7s-note"> </i>
                                </div>
                                <div style={{lineHeight: "20px", fontSize: "17px"}}>
                                    {/*<p className="nav-item" style={{lineHeight:"20px", fontSize:"17px"}}>Products</p>*/}
                                    Manage Products
                                </div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/product/search">
                            <div style={{display: "flex"}}>
                                <div>
                                    <i className="nav-link-icon pe-7s-search"> </i>
                                </div>
                                <div style={{lineHeight: "20px", fontSize: "17px"}}>
                                    {/*<p className="nav-item" style={{lineHeight:"20px", fontSize:"17px"}}>Products</p>*/}
                                    Search Products
                                </div>
                            </div>
                        </NavLink>
                    </NavItem>


                    {/*<NavItem>*/}
                    {/*    <NavLink href="#" onClick={this.toggle} id="PopoverMegaMenu">*/}
                    {/*        <i className="nav-link-icon pe-7s-gift"> </i>*/}
                    {/*        Activities*/}
                    {/*        <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}
                    {/*<Popover className="dropdown-menu-rounded dropdown-menu-lg rm-pointers" placement="bottom-start" fade={false} trigger="legacy" isOpen={this.state.popoverOpen} target="PopoverMegaMenu"*/}
                    {/*         toggle={this.toggle}>*/}
                    {/*    <div className="dropdown-mega-menu">*/}
                    {/*        <div className="grid-menu grid-menu-col">*/}
                    {/*            <Row className="no-gutters">*/}
                    {/*                <Col>*/}
                    {/*                    <Nav vertical>*/}
                    {/*                        <NavItem className="nav-item-header">*/}
                    {/*                            Overview*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Education Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Health Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Women Empowerment's Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Environment Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                    </Nav>*/}
                    {/*                </Col>*/}
                    {/*            </Row>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Popover>*/}
                </Nav>
            </Fragment>
        )
    }
}

export default MegaMenu;