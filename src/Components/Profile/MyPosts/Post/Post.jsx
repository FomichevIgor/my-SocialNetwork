import classes from "./Post.module.css";

function Post(props) {
    return(
        <div className={classes.content}> 
        
         <img src="https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg" alt="" />
        
        

         
         
          <div>{props.message}</div>
          <div>like {props.like}</div>
      <div></div>
        </div>


    )
}
export default Post;