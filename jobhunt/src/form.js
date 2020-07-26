import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

class Jobhunt extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            phone: "",
            email: "",
            school: "",
            studies: "",
            tools: "",
            company: "",
            awards: "",
            cover: "",
            linkedin: "",
            github: "",
            portfolio: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    } 
    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    } 
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    } 
    handleSchoolChange = (event) => {
        this.setState({
            school: event.target.value
        })
    } 
    handleStudiesChange = (event) => {
        this.setState({
            studies: event.target.value
        })
    } 
    handleToolsChange = (event) => {
        this.setState({
            tools: event.target.value
        })
    } 
    handleCompanyChange = (event) => {
        this.setState({
            company: event.target.value
        })
    } 
    handleAwardsChange = (event) => {
        this.setState({
            awards: event.target.value
        })
    } 
    handleCoverChange = (event) => {
        this.setState({
            cover: event.target.value
        })
    } 
    handleLinkedinChange = (event) => {
        this.setState({
            linkedin: event.target.value
        })
    } 
    handleGithubChange = (event) => {
        this.setState({
            github: event.target.value
        })
    } 
    handlePortfolioChange = (event) => {
        this.setState({
            portfolio: event.target.value
        })
    } 
    handleSubmit = event => {
        var applicant = {
            name: `${this.state.name}`,
            phone: `${this.state.phone}`,
            email: `${this.state.email}`,
            school: `${this.state.school}`,
            studies: `${this.state.studies}`,
            tools: `${this.state.tools}`,
            company: `${this.state.company}`,
            awards: `${this.state.awards}`,
            cover: `${this.state.cover}`,
            linkedin: `${this.state.linkedin}`,
            github: `${this.state.github}`,
            portfolio: `${this.state.portfolio}`,
        }
        
        // logs object to console for now
        console.log(applicant);
        event.preventDefault()
    }

    render(){
        return (
            <Container>
                <h1>Equitable Job Hunt</h1>
                <br></br>
                <Form onSubmit = { this.handleSubmit }>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                        type="text" 
                        id="name" 
                        value = {this.state.name} 
                        onChange = {this.handleNameChange} 
                        placeholder="Full Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" 
                        id="phone" 
                        value = {this.state.phone}
                        onChange = {this.handlePhoneChange} 
                        placeholder="123-456-7890" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                        type="email" 
                        id="email" 
                        value = {this.state.email} 
                        onChange = {this.handleEmailChange}
                        placeholder = "equitable@jobhunt.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="school">University/School</Label>
                        <Input type="text"  
                        id="school" 
                        value = {this.state.school} 
                        onChange= {this.handleSchoolChange}
                        placeholder="University of California, Irvine" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="studies">Area(s) of Study</Label>
                        <Input type="text" 
                        id="studies"
                        value = {this.state.studies}
                        onChange = {this.handleStudiesChange}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tools">Tools/Languages</Label>
                        <Input type="text" 
                        id="tools" 
                        value = {this.state.tools}
                        onChange = {this.handleToolsChange}
                        placeholder = "Figma, React, MongoDB, ..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="company">Company Name and Experience Design</Label>
                        <Input 
                        type="textarea" 
                        id="company" 
                        value = {this.state.company}
                        onChange = {this.handleCompanyChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="awards">Certifications/Awards</Label>
                        <Input 
                        type="textarea" 
                        id="awards"
                        value = {this.state.awards}
                        onChange = {this.handleAwardsChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cover">Additional Info/Cover Letter</Label>
                        <Input 
                        type="textarea" 
                        id="cover"
                        value = {this.state.cover}
                        onChange = {this.handleCoverChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="linkedin">Linkedin Profile Link</Label>
                        <Input 
                        type="text" 
                        id="linkedin" 
                        value = {this.state.linkedin}
                        onChange = {this.handleLinkedinChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="github">Github Link</Label>
                        <Input 
                        type="text" 
                        id="github"
                        value = {this.state.github}
                        onChange = {this.handleGithubChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="portfolio">Portfolio Link</Label>
                        <Input 
                        type="text" 
                        id="portfolio"
                        value = {this.state.portfolio}
                        onChange = {this.handlePortfolioChange} />
                    </FormGroup>
                    <Button color = "primary">Submit</Button>
                </Form>
            </Container>

        );
    }
}
export default Jobhunt;