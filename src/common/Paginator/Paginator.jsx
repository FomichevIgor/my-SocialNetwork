import React, {useState} from "react";
import cn from "classnames";
import styles from './Paginator.module.css'
import classes from '../../Components/Users/Users.module.css'


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanget, portionSize = 20}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    

    return(<div className={styles.paginator}>
      { portionNumber > 1 &&
      <button className={classes.buttonpaginat} onClick={() => { setPortionNumber(portionNumber - 1) }}>&larr; PREV </button> }

          {pages
              .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
              .map((p) => {
              return <span  className={ cn({
                  [styles.selectedPage]: currentPage === p
              }, styles.pageNumber) }
                           key={p}
                           onClick={(e) => {
                            onPageChanget(p);
                           }}>{p}</span>
          })}
      
      { portionCount > portionNumber &&
          <button className={classes.buttonpaginat} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT &rarr;</button> }


  </div>)
}
export default Paginator;