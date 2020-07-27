import React from 'react';
import {Card, CardBody} from 'reactstrap';

function ApplicantCard(props) {
  return (
    <Card className='m-1' onClick={() => props.handleOnClick(props.id)}>
      <CardBody>
        Applicant {props.index + 1}
      </CardBody>
    </Card>
  );
}

export default ApplicantCard;
