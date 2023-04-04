import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setUserdata} from "../../Redux/auth_reducer";
import axios from "axios";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
               
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                     
                    this.props.setUserdata(id, email, login);
                }
            });
    }


    render() {

        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})


export default connect(mapStateToProps, { setUserdata })(HeaderContainer);