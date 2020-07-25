import React, { Component } from 'react'


class Form extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            phone: "",
            email:"",
            linkedin: "",
            github: "",
            portfolio: "",
            coverLetter: "",
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
    handleCoverLetterChange = (event) => {
        this.setState({
            coverLetter: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.phone} ${this.state.email}
        ${this.state.linkedin}${this.state.github}${this.state.portfolio}${this.state.coverLetter}`)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Full Name: </label>
                    <input 
                    type = "text" 
                    value = {this.state.name} 
                    onChange = {this.handleNameChange}
                    />
                </div>
                <div>
                    <label>Phone: </label>
                    <input 
                    type = "text" 
                    value = {this.state.phone} 
                    onChange = {this.handlePhoneChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                    type = "text" 
                    value = {this.state.email} 
                    onChange = {this.handleEmailChange}
                    />
                </div>
                <div>
                    <label>LinkedIn Profile Link: </label>
                    <input 
                    type = "text" 
                    value = {this.state.linkedin} 
                    onChange = {this.handleLinkedinChange}
                    />
                </div>
                <div>
                    <label>Github Link: </label>
                    <input 
                    type = "text" 
                    value = {this.state.github} 
                    onChange = {this.handleGithubChange}
                    />
                </div>
                <div>
                    <label>Portfolio Link: </label>
                    <input 
                    type = "text" 
                    value = {this.state.portfolio} 
                    onChange = {this.handlePortfolioChange}
                    />
                </div>
                <div>
                    <label>Additional Info/Cover Letter</label>
                    <textarea 
                    value = {this.state.coverLetter} 
                    onChange = {this.handleCoverLetterChange}></textarea>
                </div>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form