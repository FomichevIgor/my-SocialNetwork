import { connect } from "react-redux";
import { addMessageActionCreater } from "../../Redux/dialogs-reducer";
import { withAuthNavigate } from "../hoc/withAuthNavigate";
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
        addMessages:(newMessageText)=>{
            dispatch(addMessageActionCreater(newMessageText));
        },

       // updateMessageTexts:(text)=>{
          //  dispatch(updateMessageTextActionCreater(text));
        //},
       

    }
}
let AuthNavigateComponent=withAuthNavigate(Dialogs)
const DialogsConteiner=connect(mapStateToProps,mapDispatchToProps)(AuthNavigateComponent);

export default DialogsConteiner;