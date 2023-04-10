import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Users.module.css';
import Paginator from "../../common/Paginator/Paginator";


let User=({user,followingInProgress,unfollow,follow})=>{
   
    //let user=user;
        
    return(
        <div>
        
      
      {
         <div>
          <div>
            <NavLink to={'./../Profile/' + user.id}>
            <img height={70} src={user.photos.small != null ? user.photos.small : "https://avatars.mds.yandex.net/i?id=32258f40d0ac0f2098289eb641d9601398a10360-9234089-images-thumbs&n=13"} alt="foto" />
          </NavLink>
          </div>
          <div>
            {
              user.followed
                ? <button disabled={followingInProgress.some((id)=>id===user.id)} onClick={() => { 
                  unfollow(user.id);
                 
                  /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                    withCredentials:true,
                    headers:{"API-KEY":"86396951-1ef9-4c53-a0af-09ef01759401"},


                  })*/ 
                  /*
                   usersAPI.unfollow(user.id)
                  .then(response=>{
                    if(response.data.resultCode === 0){
                       props.unfollow(user.id) 
                    }
                    props.toggleFollowingProgress(false,user.id);
                  })

                  */
                 

                 
                
                }}>Unfollow</button>


                : <button disabled={followingInProgress.some(id=>id===user.id)} onClick={() => {
                  follow(user.id);
                 /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
                    withCredentials:true,
                    headers:{"API-KEY":"86396951-1ef9-4c53-a0af-09ef01759401"},


                  }) */
                  
                  /*
                  usersAPI.follow(user.id)
                  .then(response=>{
                    if(response.data.resultCode === 0){
                       props.follow(user.id) 
                    }
                    props.toggleFollowingProgress(false,user.id);
                  })

                   */
                  
                  

                 
                
                
                }}>Follow</button>
            }
          </div>
          <div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
          
          </div>
        </div>

        

      }


    </div>

    )
}
export default User;