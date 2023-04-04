import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/prifile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId=this.props.param.userId;
        if(!userId){
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(respons => {
                
                this.props.setUserProfile(respons.data)
            });

    }


    render() {


        return (<Profile {...this.props} profile={this.props.profile} />)


    }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile

});
const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps,{setUserProfile}) (TakeParams);