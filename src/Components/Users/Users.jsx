import React from "react";

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
          return <span className={props.currentPage === p ? styles.selectedPage:''}
            onClick={(e) => { props.onPageChanget(p) }}>{p}</span>
        })}
      </div>
      {
        props.users.map(item => <div key={item.id}>
          <div>
            <img height={70} src={item.photos.small != null ? item.photos.small : "https://avatars.mds.yandex.net/i?id=18c3830cb6cc6d125ad185628231b0da973a83f8-9181115-images-thumbs&n=13"} alt="foto" />
          </div>
          <div>
            {
              item.followed
                ? <button onClick={() => { props.unfollow(item.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(item.id) }}>Follow</button>
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