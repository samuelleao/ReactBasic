import React, { Component } from 'react'

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Email: '',
            Message: '',

            // Messages of Alert, if empty
            NameAlert: '',
            EmailAlert: '',
            MessageAlert: '',
        }
    }

    setInfoName = (e) => {
        this.setState({
            Name: e.target.value,
            NameAlert: ''
        })

        if(e.target.value == ''){
            this.setState({
                NameAlert: 'Please, writer your name'
            })
        }
    }

    setInfoEmail = (e) => {
        this.setState({
            Email: e.target.value,
            EmailAlert: ''
        })

        if(e.target.value == ''){
            this.setState({
                EmailAlert: 'Please, writer your email'
            })
        }
    }

    setInfoMessage = (e) => {
        this.setState({
            Message: e.target.value,
            MessageAlert: ''
        })

        if(e.target.value == ''){
            this.setState({
                MessageAlert: 'Please, writer your message'
            })
        }
    }

    analytics = (e) => {
        e.preventDefault()
        if (this.state.Name == '') {
            this.setState({
                NameAlert: 'Please, writer your name'
            })
        } else {
            this.setState({
                NameAlert: ''
            })
        }

        if (this.state.Email == '') {
            this.setState({
                EmailAlert: 'Please, writer your email'
            })
        } else {
            this.setState({
                EmailAlert: ''
            })
        }

        if (this.state.Message == '') {
            this.setState({
                MessageAlert: 'Please, writer your messsage'
            })
        } else {
            this.setState({
                MessageAlert: ''
            })
        }
    }

    render() {
        document.title = 'Contact Us - Exactly'
        return (
            <div className='contactPage'>
                <div className='section1'>
                    <img src='/images/img3.png' title='' alt='' className='animate__animated animate__fadeInLeft' />
                    <div>
                        <form>
                            <h6 className="title">Contact Us</h6>
                            <input onChange={this.setInfoName}  type='text' placeholder='Name' value={this.state.Name} />
                            <span>{this.state.NameAlert}</span>
                            <input onChange={this.setInfoEmail} type='text' placeholder='Email' value={this.state.Email} />
                            <span>{this.state.EmailAlert}</span>
                            <input onChange={this.setInfoMessage} type='text' id="message" placeholder='Message' value={this.state.Message} />
                            <span>{this.state.MessageAlert}</span>
                            <button onClick={this.analytics} className='button_primary'>Send Menssage</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact