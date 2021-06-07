import React, { Component } from 'react';
import {
    Row, Col
} from 'reactstrap';
import Job from './subcomponents/Job';


export class Jobs extends Component {
    displayName = Jobs.name

    
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            isLoading: true
        }

    }

   
    componentDidMount() {
        fetch('api/jobs')
            .then(response => response.json())
            .then(data => {
                this.setState({ jobs: data, isLoading: false })
            })
    }

    
    render() {
        if (this.state.isLoading) {
            return (<div className=" spinner-border image-center" style={{ width: '5rem', height: '5rem' }}> <div/>{' '}</div>);
        }
        else {
            return (
                <div>
                    <Row>
                        {this.state.jobs.map(job =>
                            <Col md={12} key={job.id}>
                                <Job job={job} />
                            </Col>
                        )}
                    </Row>
                </div>
            );
        }

    }
};