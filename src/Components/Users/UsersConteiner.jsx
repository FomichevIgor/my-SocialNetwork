import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unfollow,getUsers } from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../../common/Preloader";


class UsersAPI extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage,this.props.pageSize);
      /* this.props.toggleIsFetching(true);
       usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
      //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{ withCredentials:true})
        .then(data => {
            this.props.toggleIsFetching(false);
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
        }); */
       
    }
    onPageChanget=(pageNumber)=>{
        
      this.props.setCurrentPage(pageNumber);
      this.props.getUsers(pageNumber,this.props.pageSize);

     /*this.props.toggleIsFetching(true);
      usersAPI.getUsers(pageNumber,this.props.pageSize)
      //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{ withCredentials:true})
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items)
        //this.props.setTotalUsersCount(data.totalCount)
      }); */ 
    }
  
  
  
  
  
    render() {
      return(<>
     
     
       <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        isFetching={this.props.isFetching}
      
      
      />
      </>
      
     )
    }
  
  }


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,

    };
}/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching));
        },
        toggleFollowingProgress:(isFetching,userId)=>{
          dispatch(toggleFollowingProgressAC(isFetching,userId));
        }
    }
} */



export default connect(mapStateToProps, 
  {follow,setCurrentPage, setTotalUsersCount, setUsers, 
    toggleFollowingProgress, toggleIsFetching, unfollow, getUsers })(UsersAPI);