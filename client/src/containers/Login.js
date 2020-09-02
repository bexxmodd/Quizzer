import React, { Component } from 'react';


class Login extends Component {

  render() {
    return (

      <form action="#" id="login-form">
        <div class="heading">Login to Quizzer</div>
        <div class="left">
          <label for="email">Username</label> <br />

          <input type="email" name="email" id="email" /> <br />

          <label for="password">Password</label> <br />
          <input type="password" name="password" id="pass" /> <br />
          <input type="submit" value="Login" />
        </div>


        <div class="right">
          <div class="connect">Connect with</div>
          <a href="" class="github">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a> <br />


          <a href="" class="google-plus">

            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </div>
      </form>


    )
  }
}


export default Login;
