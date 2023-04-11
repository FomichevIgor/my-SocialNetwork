import Preloader from "../../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userFoto from '../../../assets/img/user.jpg'

function ProfileInfo(props) {
    
    if(!props.profile){
        return<Preloader/>
    }
    return (<div className={classes.wrap}>
       
            <div> 
                <img src="https://avatars.mds.yandex.net/i?id=7cfba74f3cb75ed85ad2b2a55b9b039436287ce4-6274710-images-thumbs&n=13" alt="Photo" />
            </div>

            <div>
                
                <img className={classes.mainPhoto} src={props.profile.photos.large || userFoto} alt="Photo" />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
        </div>


    )
}
export default ProfileInfo;