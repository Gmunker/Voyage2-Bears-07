import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="normal-btn" onClick={this.props.loginFacebook}>
            Log in with Facebook!!
          </button>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon-svg"
                alt="Google Icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text" onClick={this.props.loginGoogle}>
              <b>Sign in with Google</b>
            </p>
          </div>
          {/* <button onClick={this.props.loginGoogle}>
            Log in with Google!!
          </button> */}

          <button className="normal-btn" onClick={this.props.loginGitHub}>
            Log in with Github!!
          </button>
        </div>

        <Link to="/">Go Back!</Link>
      </div>
    );
  }
}

export default SignIn;
