import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status,
        
    }
   
    activateEditMode = () => {

        this.setState({
            editMode: true,
        })

    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);

    }
    onStatusChenge=(e)=>{
        this.setState({
            status:e.currentTarget.value
        });

    }
componentDidUpdate(prevProps,prevState){
    if(prevProps.status!==this.props.status){
        this.setState({
             status:this.props.status
        })
       
    }
   
}
    render() {
        
        return (<div>{!this.state.editMode &&
                    <div className={classes.myStatus}>
                       <b>My Status : </b> <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                    </div>
                }
                    {this.state.editMode &&
                        <div>
                            <input className={classes.standartInput} type="text" onChange={this.onStatusChenge} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                        </div>
                    }
                
              

                </div>
        )
    }
}
export default ProfileStatus;