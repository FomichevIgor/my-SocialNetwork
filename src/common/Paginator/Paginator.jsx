import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Paginator.module.css'


let Paginator=({totalUsersCount,pageSize,currentPage,onPageChanget})=>{
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    

    return(
        <div>
         
      <div>
        {pages.map(p => {
          return <span key={p} className={currentPage === p ? styles.selectedPage:''}
            onClick={(e) => { onPageChanget(p) }}>{p}</span>
        })}
      </div>
    </div>)
}
export default Paginator;