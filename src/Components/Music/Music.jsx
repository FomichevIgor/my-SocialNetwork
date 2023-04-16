import classes from './Music.module.css';


function Music(props) {




    let arr = props.music;
   
    return (<><h2 className={classes.title}>Music</h2>
    <div className={classes.flexContainer}>

   
    
        
        {arr.map((item) => <div key={item.urlimg} className={classes.textcolsItem}>
        
            <div>

           
            <div>
            
        <img height={150} src={item.urlimg} alt="foto" className={classes.urlimg}/>
           </div>
           <div>
            <span className={classes.name}>
                 {item.name}
            </span>
            
           </div>
           <div>
            <span className={classes.album}>
                 {item.album}
            </span>
            
           </div>
          
           
           
           
           </div>
           </div>

        )}


     </div></>



    )
}
export default Music;