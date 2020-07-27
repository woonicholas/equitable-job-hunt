import React, {Component} from 'react';
import {Card} from 'reactstrap';


class Company extends Component {
    render(){
        return (
            <div className='row justify-content-center'>
                <Card className='col-md-3 m-2'>Candidate List</Card>
                <Card className='col-md-8 m-2'>Candidate Info</Card>
            </div>
        );
    }
}

export default Company;