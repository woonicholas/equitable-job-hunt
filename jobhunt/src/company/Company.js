import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';
import axios from 'axios';

import ApplicantCard from './ApplicantCard.js'
import ApplicantInfo from './ApplicantInfo.js'

class Company extends Component {
    constructor(props){
        super(props);
        this.state = {
            applicantList: [],
            applicantInfo: ''
        };
        this.handleApplicantOnClick = this.handleApplicantOnClick.bind(this);
    }

    async handleApplicantList(){
        try{
            const list = await axios.get('http://localhost:3001/applications');
            this.setState({
                applicantList: list.data
            })
        }catch{
            console.log('couldn\'t get list')
        }
    }

    async handleApplicantOnClick(id){
        try{
            const info = await axios.get(`http://localhost:3001/applications/filtered/${id}`);
            this.setState({applicantInfo: info.data});
            console.log(this.state);
        }catch{
            console.log('couldn\'t get app info')
        }
    }

    async componentDidMount(){
        await this.handleApplicantList();
    }
    
    renderApplicantList(){
        const appList = this.state.applicantList;
        return (
            appList.map((item,index)=> {
                return <ApplicantCard key={item._id} index={index} id={item._id} handleOnClick={this.handleApplicantOnClick}/>
            }));
    }

    render(){
        return (
            <div className='row justify-content-center'>
                <Card className='col-md-3 m-2 p-3'>
                    <h3>Candidate List</h3>
                    {this.renderApplicantList()}
                </Card>
                <Card className='col-md-8 m-2 p-3'>
                    <h3>Candidate Info</h3>
                    <ApplicantInfo info={this.state.applicantInfo}/>
                </Card>
            </div>
        );
    }
}

export default Company