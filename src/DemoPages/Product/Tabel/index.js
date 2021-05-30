import React, {Fragment, useState} from 'react';
import ReactTable from "react-table";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import axios from "axios";
import AppHeader from "../../../Layout/AppHeader";
import {Card, CardBody} from "reactstrap";

class Tabel extends React.Component {
    constructor() {
        super();
        this.state = {
            dataTabel: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:2222/api/product`)
            .then(res => {
                this.setState({dataTabel: res.data})
                console.log(res)
            })
    }

    render() {
        return (
            <Fragment>

                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <AppHeader/>
                    <div className="app-main">
                        <div className="app-main__inner">
            <Card clasName="main-card m-5">
                <div className="mb-3">
                    <CardBody>
                        <ReactTable data={this.state.dataTabel} filterable columns={[{
                            columns: [
                                {
                                    Header: 'Product ID',
                                    accessor: 'id',
                                },
                                {
                                    Header: 'Product Name',
                                    accessor: 'productName',
                                },
                                {
                                    Header: 'Stock',
                                    accessor: 'stock',
                                },
                                {
                                    Header: 'Price',
                                    accessor: 'price',
                                },
                                {
                                    Header: 'Picture URL',
                                    accessor: 'pictureUrl',
                                },
                                {
                                    Header: 'Product Category',
                                    accessor: 'categoryName',
                                },
                            ]
                        }]}
                                    defaultPageSize={5}
                                    className="-striped -highlight"
                                    />
                    </CardBody>
                </div>
            </Card>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>

        )
    }
};

export default Tabel
