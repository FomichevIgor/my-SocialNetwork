import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Users.module.css';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import { unfollow } from "../../Redux/users-reducer";
import Preloader from "../../common/Preloader";


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanget, users, isFetching, ...props }) => {
  /*
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
     pages.push(i);
   }
  */


  return (
    <div className={classes.mainblock}>
          <h2 className={classes.title}>Users</h2>
      <div className={classes.paginator}>
        <Paginator currentPage={currentPage} onPageChanget={onPageChanget}
          totalItemsCount={totalUsersCount} pageSize={pageSize} />
       <div></div> <div className={classes.preloader}> {isFetching ? <Preloader /> : ''}</div>
        {/* pages.map(p => {
          return <span key={p} className={props.currentPage === p ? styles.selectedPage:''}
            onClick={(e) => { props.onPageChanget(p) }}>{p}</span>
        })*/}

      </div>

      <div className={classes.flexContainer}>{
        users.map(item => <User user={item}
          followingInProgress={props.followingInProgress}
          key={item.id}
          unfollow={props.unfollow}
          follow={props.follow}



        />

        )

      }</div>


    </div>

  )
}
export default Users;