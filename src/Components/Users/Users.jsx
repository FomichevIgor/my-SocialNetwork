import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Users.module.css';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import { unfollow } from "../../Redux/users-reducer";


let Users=({currentPage,totalUsersCount,pageSize,onPageChanget,users,...props})=>{
   /*
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
   */ 
    

    return(
        <div>
        
      <div>
         <Paginator currentPage={currentPage} onPageChanget={onPageChanget} 
                    totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {/* pages.map(p => {
          return <span key={p} className={props.currentPage === p ? styles.selectedPage:''}
            onClick={(e) => { props.onPageChanget(p) }}>{p}</span>
        })*/}

      </div>
      {
        users.map(item => <User user={item} 
                          followingInProgress={props.followingInProgress}
                          key={item.id}
                          unfollow={props.unfollow}
                          follow={props.follow}


        
        />

        )

      }


    </div>

    )
}
export default Users;