import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  floatingStyle: {
    color: '#29ABE2',
    fontSize: '18px'
  },
  loginHeading: {
    fontSize: '26px',
    fontWeight: '500'
  },
  underlineStyle:{
    color: 'black',
  },
  loginButton:{
    width: '260px',
  },
  otherText: {
    color: '#29ABE2',
    marginLeft: '150px'
  }
}

const Login = (props) => {
  return(
    <div className="loginPage">
      <div className="loginsection">
        <div className="loginForm">
          <span style={styles.loginHeading}>Login</span>
          <br/>
          <TextField
          floatingLabelStyle= {styles.floatingStyle}
          underlineStyle={{color: 'red'}}
          hintText="Hint Text"
          floatingLabelText="Shyft Club Id"
          />
          <TextField
          floatingLabelStyle= {styles.floatingStyle}
          labelStyle={{ color: 'green' }}
          hintText="Hint Text"
          floatingLabelText="Password"
          />
          <br/><br/>
          <div>
              <span style={styles.otherText}>Forget Password?</span>
          </div>
          <br/><br/>
          <RaisedButton label="Login" onClick={props.login} style={styles.loginButton} backgroundColor='#29ABE2' labelColor='white'/>
        </div>
      </div>
    </div>
  )
}

export default Login;
