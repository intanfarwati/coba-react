import React, {Fragment, useState} from 'react';
import ReactTable from "react-table";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import axios from "axios";
import AppHeader from "../../../Layout/AppHeader";
import { ButtonToggle, Card, CardBody, CardFooter, CardTitle} from "reactstrap";
import styled from 'styled-components';


const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['PDF', 'EXCEL'];

function ToggleGroup() {
    const [active, setActive] = useState(types[0]);
    return (
        <ButtonGroup>
            {types.map(type => (
                <ButtonToggle
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                    color={"purple"}
                >
                    {type}
                </ButtonToggle>
            ))}
        </ButtonGroup>
    );
}

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
                    <Card clasName="main-card m-5">
                        <div className="mb-3">
                            <CardBody>
                                <CardTitle><h2>Data of All Products</h2></CardTitle><br/>
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
                                <CardFooter>
                                    <ToggleGroup/>
                                </CardFooter>
                            </CardBody>
                        </div>
                    </Card>
                </CSSTransitionGroup>
            </Fragment>

        )
    }
};

export default Tabel
