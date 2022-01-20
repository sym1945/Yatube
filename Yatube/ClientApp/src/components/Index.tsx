import React, { Component } from 'react';
import { Button } from 'reactstrap';


export interface IndexProps {
    content: string
}


export default class Index extends Component {
    static displayName = Index.name;

    render() {
        return (
            <div>
                <Button>Test</Button>
            </div>
        );
    }
}