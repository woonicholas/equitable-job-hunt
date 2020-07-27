import React from 'react';
import {Link} from 'react-router-dom';
import { UncontrolledCarousel, Jumbotron, Alert } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import photo1 from './applicantphoto.jpg';
import photo2 from './employerphoto.jpg';
import photo3 from './benefitsphoto.jpg';


const items = [
  {
    src: photo1,
    altText: 'Benefits for Applicants',
    caption: 'Applicants can apply to companies without having to worry about being overlooked due to bias.',
    header: 'Benefits for Applicants',
    key: '1'
  },
  {
    src: photo2,
    altText: 'Benefits for Companies',
    caption: 'Companies have access to a database full of applicants, displaying their skills, prior experience, and accomplishments, guranteeing that they choose the most qualified applicant.',
    header: 'Benefits for Companies',
    key: '2'
  },
  {
    src: photo3,
    altText: 'How does our platform work?',
    caption: 'Diversify stores the information entered by the applicants and stores it into a database; this information can be accessed by employers, omitting certain fields that could potentially incur bias, while highlighting the most significant portions of the application, such as the applicant\'s experience and qualifications.',
    header: 'How does our platform work?',
    key: '3'
  }
];

const Jumbo = (props) => {
    return(
        <div>
          <Jumbotron>
            <h1 className="display-3">Diversify</h1>
            <p className="lead">Job hunting is hard enough without inherent bias. Let Diversify help you.</p>
            <hr className="my-2" />
            <p>Diversify is revolutionizing the job application system by eliminating factors that could generate bias in the selection process.</p>
            <p className="lead">
            <Link to='/application-form'>Apply Now</Link>
            </p>
          </Jumbotron>
            <Alert color="info" justify="center">
              How can you benefit from using Diversify?
            </Alert>
          <UncontrolledCarousel items={items} />
          <div className="p-3 bg-info my-2 rounded">
            <Toast>
              <ToastHeader>
                For Employers
              </ToastHeader>
              <ToastBody>
                <Link to='/applicant-list'>List of Applicants</Link>
              </ToastBody>
            </Toast>
          </div>
        </div>
    );
};

export default Jumbo;

