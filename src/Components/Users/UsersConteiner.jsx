import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../Redux/users-reducer";
import Users from "./Users";
import axios from 'axios';
import React from "react";
import Preloader from "../../common/Preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(respons => {
            this.props.toggleIsFetching(false);
          this.props.setUsers(respons.data.items)
        });
    }
    onPageChanget=(pageNumber)=>{
        
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(respons => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(respons.data.items)
        this.props.setTotalUsersCount(respons.data.totalCount)
      });
    }
  
  
  
  
  
    render() {
      return(<>
      <div> {this.props.isFetching? <Preloader/>:''}</div>
     
       <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      
      
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

    };
}

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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);