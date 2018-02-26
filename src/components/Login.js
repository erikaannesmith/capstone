import React, {Component} from 'react'
import GoogleLogin from 'react-google-login';
import {PostUser} from './PostUser'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  signIn(response) {
    let userData = {
      'email': response.w3.U3,
      'token': response.accessToken
    }
    PostUser(userData, response.accessToken)
    if (userData.token === response.accessToken) {
      localStorage.setItem('userData', JSON.stringify(userData))
    }
  }
  
  render() {
    const responseGoogle = (response) => {
      this.signIn(response)
    }
    return(
      <GoogleLogin
        clientId="384789440252-a1rtaqhaauub84iod5lfhalui36b2789.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    )
  }
}

export default Login