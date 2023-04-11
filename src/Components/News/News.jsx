import classes from "./News.module.css";
import Preloader from "../../common/Preloader";
import { Link } from "react-router-dom";

function News(props) {
    

    if (props.isFetching) {
        return <div className={classes.preloader}><Preloader /></div> 
    }
    return (<>
        <div className={classes.wrap}>

            <h2 className={classes.h2}>NEWS</h2>


            
            <ul>
                {props.news.map(news => <div className={classes.mainBlock} key={news.publishedAt}>

                    {news.author ? <div className={classes.author}><span>Author :</span>  {news.author}</div> : <div className={classes.author}>Withuot Author</div>  }

                    <div className={classes.imgbox}><img style={{marginLeft:100}} height={300} width={450} src={news.urlToImage} alt="foto" className={classes.newsImg} /></div>

                    <div className={classes.title}>{news.title}</div>
                    <div className={classes.content}>{news.content}</div>
                    
                    





                </div>)}
            </ul>






        </div>
        <div></div>
    </>



    )
}
export default News;