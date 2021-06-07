import React, { Component } from 'react';
//Update the name for this logo.
import KalleAnka from '../images/about/KalleAnka.png';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export class About extends Component {
    displayName = About.name

 
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
            location: "",
            description: ""
        }
    }

   
    componentDidMount() {
        fetch('api/about')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    title: data.title,
                    location: data.location,
                    description: data.description
                })
            })
    }

    render() {
        return (
            <div>
               <img style={{ height: "200px", right: '600px'}} src={KalleAnka} />
                        <div >
                            <h5>{this.state.name}</h5>
                            <p>{this.state.location}</p>
                </div>
                <a style={{ color: "#007bb5", marginTop: "200px" }} target="_blank" href="https://www.linkedin.com">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a style={{ color: "black" }} target="_blank" href="https://github.com/Kareem-I">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a style={{ color: "red" }} target="_blank" href="mailto:kareemi@kth.se">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <p className="textStyle">{this.state.description}</p>
               
            </div>
        )
    }
}