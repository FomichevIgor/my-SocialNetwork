import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {getUserdata,logout} from "../../Redux/auth_reducer";




class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserdata();
        /*
        
        
        authAPI.me()
        
         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        
       

            .then(response => {
               
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                     
                    this.props.setUserdata(id, email, login);
                }
            });*/
    }


    render() {

        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})


export default connect(mapStateToProps, { getUserdata,logout })(HeaderContainer);