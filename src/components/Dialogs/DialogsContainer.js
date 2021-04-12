
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { addMessageActionCreactor, updateNewMessageText } from './../../redux/dialogs-reducer'

let mapStateToProps = (state)=> {

    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text)=> {
            dispatch(updateNewMessageText(text))
        },
        addMessageActionCreactor:()=> {
            dispatch(addMessageActionCreactor());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;