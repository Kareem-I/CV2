import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { About } from './About';
import Form from './Form';
import './Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Container>
                    <About />
                    {this.props.children}
                    <Form />
                </Container>
                
            </div>
           

        );
    }
}