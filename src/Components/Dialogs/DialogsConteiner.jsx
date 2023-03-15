import { connect } from "react-redux";
import { addMessageActionCreater, updateMessageTextActionCreater } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


/*function DialogsConteiner(props) {

    let state=props.store.getState();
   
  
    let addMessages = () => {
      
        props.store.dispatch(addMessageActionCreater());
    }
   let updateMessageTexts=(text)=>{
   
        props.store.dispatch(updateMessageTextActionCreater(text));

   }
   
    return (
        <Dialogs  updateMessageTexts={updateMessageTexts}  addMessages={addMessages} 
                   state={state.dialogPage}
                  


        
        />
    )
}*/







const mapStateToProps=(state)=>{
    return{
        state:state.dialogPage,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateMessageTexts:(text)=>{
            dispatch(updateMessageTextActionCreater(text));
        },
        addMessages:()=>{
            dispatch(addMessageActionCreater());
        }

    }
}
const DialogsConteiner=connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsConteiner;