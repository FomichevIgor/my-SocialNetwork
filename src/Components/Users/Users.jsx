import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

import styles from './Users.module.css'


let Users=(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    

    return(
        <div>
         
      <div>
        {pages.map(p => {
          return <span  className={props.currentPage === p ? styles.selectedPage:''}
            onClick={(e) => { props.onPageChanget(p) }}>{p}</span>
        })}
      </div>
      {
        props.users.map(item => <div key={item.id}>
          <div>
            <NavLink to={'./../Profile/' + item.id}>
            <img height={70} src={item.photos.small != null ? item.photos.small : "https://avatars.mds.yandex.net/i?id=18c3830cb6cc6d125ad185628231b0da973a83f8-9181115-images-thumbs&n=13"} alt="foto" />
          </NavLink>
          </div>
          <div>
            {
              item.followed
                ? <button disabled={props.followingInProgress.some((id)=>id===item.id)} onClick={() => { 
                  props.toggleFollowingProgress(true,item.id);
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{
                    withCredentials:true,
                    headers:{"API-KEY":"86396951-1ef9-4c53-a0af-09ef01759401"},


                  })
                  .then(response=>{
                    if(response.data.resultCode === 0){
                       props.unfollow(item.id) 
                    }
                    props.toggleFollowingProgress(false,item.id);
                  })


                 
                
                }}>Unfollow</button>


                : <button disabled={props.followingInProgress.some(id=>id===item.id)} onClick={() => {
                  props.toggleFollowingProgress(true,item.id);
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{},{
                    withCredentials:true,
                    headers:{"API-KEY":"86396951-1ef9-4c53-a0af-09ef01759401"},


                  })
                  .then(response=>{
                    if(response.data.resultCode === 0){
                       props.follow(item.id) 
                    }
                    props.toggleFollowingProgress(false,item.id);
                  })

                  

                 
                
                
                }}>Follow</button>
            }
          </div>
          <div>
            <div>
              <div>{item.name}</div>
              <div>{item.status}</div>
            </div>
            <div>
              <div>{"item.location.country"}</div>
              <div>{"item.location.city"}</div>
            </div>
          </div>
        </div>

        )

      }


    </div>

    )
}
export default Users;