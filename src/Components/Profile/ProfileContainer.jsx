import React from "react";
import { connect } from "react-redux";
import { getUserProfile,getStatus,updateStatus } from "../../Redux/prifile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import  {withAuthNavigate}  from "../hoc/withAuthNavigate";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId=this.props.param.userId;
        if(!userId){
            userId=28531;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
     
    }


    render() {


        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>)


    }
}
const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

//let AuthNavigateComponent=withAuthNavigate(TakeParams);

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
   
   status:state.profilePage.status,

});



export default connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}) (TakeParams);