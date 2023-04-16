import classes from "./Post.module.css";
import awatar from '../../../../assets/img/2363495226.jpg'

function Post(props) {
    
    return(
        <div className={classes.content}> 
        <div className={classes.awa}><img  src={awatar} alt="photo" /></div>
         
        
        

         
         
          <div className={classes.message}>{props.message}</div>
          <div className={classes.likes}>Like {props.like}</div>
      <div></div>
        </div>


    )
}
export default Post;