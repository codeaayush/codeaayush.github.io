import React, { Component } from 'react';
import { AppProvider, Page } from '@shopify/polaris';
import DataTable from './DataTable';
import axios from 'axios';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillMount() {
        axios.get('https://swapi.co/api/planets/?page=2&format=json').then(data => {
            this.setState({ data: data });
        })
    }
    render() {

        const headings = [
            "name",
            "rotation_period",
            "orbital_period",
            "diameter",
            "climate",
            "gravity",
            "terrain",
            "surface_water",
            "population",
        ];
        return (
                <Page title="Data table">
                    <DataTable headings={headings} rows={data} />
                </Page>
        );
    }
}

export default App;