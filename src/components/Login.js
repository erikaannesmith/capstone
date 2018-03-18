import React, {Component} from 'react'
import GoogleLogin from 'react-google-login';
import {PostUser} from './PostUser'
import App from '../App'
import '../styles/Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }

  signIn = (response) => {
    let userData = {
      'email': response.w3.U3,
      'token': response.accessToken
    }
    let userId; 
    
    PostUser(userData, response.accessToken)
      .then(res => {
        userId = res.id
        this.validateUser(userId, userData, response)
      })
    }

    validateUser = (userId, userData, response) => {
      if (userData.token === response.accessToken) {
        this.setState({ user: userId })
    }
  }

 
  returnLoginOrHome() {
    const responseGoogle = (response) => {
      this.signIn(response)
    }
    if (this.state.user === "") {
      return(
        <div>
          <h1>MUGAT2</h1>
          <div className="login-btn">
            <GoogleLogin
              className="google-lgn"
              clientId="384789440252-a1rtaqhaauub84iod5lfhalui36b2789.apps.googleusercontent.com"
              buttonText="Google Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      )}
    else {
      return(
        <App user={this.state.user}/>
      )
    }
  }
  
  render() {

    return(
      <div>
        {this.returnLoginOrHome()}
      </div>
    )
  }
}

export default Login