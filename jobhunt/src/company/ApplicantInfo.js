import React, {Component} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import './applicantInfo.css';

function ApplicantInfo(props) {
    return (
      <div className='col-md-8 m-2'>
        <CardTitle className='m-3'>Candidate #1</CardTitle>
        <p className='phoneNum'>{props.info.phone}</p>     
        <CardBody>
            <p className="areaofinterest">{props.info.studies}</p>                 
          <hr></hr>
            <p className="jobdescription" >Job Description & Experience</p>
            <p className="jobdescriptiontext">{props.info.experience}</p>
            <p className="tools">Tools</p>
            <p className="toolstext">{props.info.tools}</p>
            <p>Certifications and Awards</p>
          <p className="certs">{props.info.awards}</p>
            <p className="additionalinfo">Additional Information</p>   
          <p>{props.info.cover}</p>
        </CardBody>
      </div>
    );
}

export default ApplicantInfo
