import Preloader from "../../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userFoto from '../../../assets/img/user.jpg'
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {
   

   const[editMode,setEditMode]=useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit=(formData)=>{
        saveProfile(formData)
        setEditMode(false)
    }

    return (<div className={classes.wrap}>
            <h2 className={classes.title}>Profile</h2>
        <div>
            { /*<img src="https://avatars.mds.yandex.net/i?id=7cfba74f3cb75ed85ad2b2a55b9b039436287ce4-6274710-images-thumbs&n=13" alt="Photo" />*/}
        </div>

        <div className={classes.photosBox}>

           <label htmlFor="input_file"><img className={classes.mainPhoto} src={profile.photos.large || userFoto} alt="Photo" /></label> 
            {isOwner &&  <input  type="file" name="file" id="input_file" onChange={onMainPhotoSelected} /> }
        </div>



        {editMode?
        <ProfileDataForm initialValues={profile}  profile={profile} onSubmit={onSubmit}/>
        :
        <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
       
        <div>
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
       
    </div>


    )
}
const ProfileData=(props)=>{
    return <div>
        {props.isOwner&&<div><button className={classes.buttonPpofileChenge} onClick={props.goToEditMode}>Edit profile</button></div>}
        
    <div>
        <div className={classes.infoAboutme}>
            <b>Full name </b>: <span>{props.profile.fullName}</span> </div>
    </div>

    <div className={classes.infoAboutme}>
        <div><b>Looking for a job  </b> : {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
    </div>
    {props.profile.lookingForAJob &&
        <div className={classes.infoAboutme}>
            <div><b>My professional skills </b> : {props.profile.lookingForAJobDescription}</div>
        </div>
    }

    
        <div className={classes.infoAboutme}>
            <b>About me </b> : {props.profile.aboutMe}
        </div>
        {/*<div>
            <b>Contacts </b> : {Object.keys(props.profile.contacts).map(key=>{
               return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        </div> */}
        
</div>
}

const Contact=({contactTitle,contactValue})=>{
    return <div className={classes.contacts}><b>{contactTitle}</b>{contactValue}</div>
}
export default ProfileInfo;