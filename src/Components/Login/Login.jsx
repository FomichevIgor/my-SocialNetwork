import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControl';
import { required } from '../../utilit/validators/validator';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth_reducer';
import { Navigate } from 'react-router-dom';
import classes from '../../common/FormsControls/FormsControl.module.css'

function LoginForm(props) {

  return (
    <form onSubmit={props.handleSubmit}>

      <div><Field placeholder={'email'} component={Input} validate={[required]} name={'email'} /></div>

      <div><Field placeholder={'password'} component={Input} validate={[required]} name={'password'} type='password' /></div>

      <div><Field type={'checkbox'} component={Input} name={'rememberMe'} />remember me</div>

      { props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>
            }

      <div><button>Login</button></div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) { return  <Navigate  to={"/Profile"} />}

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapToStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapToStateToProps, { login })(Login);