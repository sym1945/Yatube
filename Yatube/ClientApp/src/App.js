import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { VideoDetail } from './components/VideoDetail';
import { Videos } from './components/Videos';
import Index, { IndexProps } from './components/Index';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Index} />
                <Route exact path='/counter' component={Counter} />
                <Route exact path='/counter/f' component={FetchData} />
                <Route exact path='/videos' component={Videos} />
                <Route exact path='/videos/:id' component={VideoDetail} />
            </Layout>
        );
    }
}
