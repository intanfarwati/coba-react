import React, {Fragment, Component, useState, useEffect} from 'react';
import {Button} from "reactstrap";
import cx from "classnames";

const Cari = (props) => {
    const [activeSearch, setActiveSearch] = useState(props.activeSearch)
    return (
        <Fragment>
            <div className={cx("search-wrapper", {'active': activeSearch})}>
                <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Search Books"
                           onChange={props.handleChangeSearch}/>
                    <Button className="search-icon" onClick={props.handleSearch}></Button>
                </div>
                <button onClick={() => setActiveSearch(!activeSearch)} className="close"/>
            </div>
        </Fragment>
    )
}

export default Cari;