import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControl';
import { required } from '../../utilit/validators/validator';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth_reducer';
import { Navigate } from 'react-router-dom';
import classes from './Login.module.css'

function LoginForm(props) {

  return (<><div className={classes.mainblock}>
    <form className={classes.formlogin} onSubmit={props.handleSubmit}>
      <h3 className={classes.logintitle}>Login Here</h3>
      <div><Field placeholder={'email'} component={Input} validate={[required]} name={'email'} className={classes.useremail} /></div>

      <div><Field placeholder={'password'} component={Input} validate={[required]} name={'password'} type='password' className={classes.password} /></div>

      <div><Field type={'checkbox'} component={Input} name={'rememberMe'} className={classes.rememberme}/> <span>remember me</span> </div>

      {props.error && <div className={classes.formSummaryError}>
        {props.error}
      </div>
      }

      <div><button className={classes.loginButton}>Login</button></div>
    </form></div></>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) { return <Navigate to={"/Profile"} /> }

  return <div>

    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapToStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapToStateToProps, { login })(Login);