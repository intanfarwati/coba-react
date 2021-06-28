import React, {Fragment} from 'react';

import cx from 'classnames';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: localStorage.getItem("username")
        };
    }

    render() {
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': true
                })}>
                    <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Type to search"
                               onChange={
                                   this.props.handleChangeSearch
                               }/>
                        <button onClick={
                            // console.log("ada ga ya")}
                            this.props.handleSearch
                        }
                                className="search-icon"><span/></button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SearchBox;