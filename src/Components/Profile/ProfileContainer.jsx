import React from "react";
import { connect } from "react-redux";
import { getUserProfile,getStatus,updateStatus,savePhoto,saveProfile } from "../../Redux/prifile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import  {withAuthNavigate}  from "../hoc/withAuthNavigate";



class ProfileContainer extends React.Component {

    refreshProfile(){
       let userId=this.props.param.userId;
        if(!userId){
            userId=28531;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }
    componentDidMount() {
        this.refreshProfile()
        /*
         let userId=this.props.param.userId;
        if(!userId){
            userId=28531;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        */
    }
   componentDidUpdate(prevProps,prevState,snapshot){
    if(this.props.param.userId!==prevProps.param.userId)
                this.refreshProfile();

   }


    render() {


        return (<Profile {...this.props}
            isOwner={!this.props.param.userId} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            />)


    }
}
const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

let AuthNavigateComponent=withAuthNavigate(TakeParams);

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId: state.auth.userId,

});



export default connect(mapStateToProps,{getUserProfile,getStatus,updateStatus,savePhoto,saveProfile}) (AuthNavigateComponent);