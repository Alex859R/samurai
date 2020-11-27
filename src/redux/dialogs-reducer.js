const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 6,
                message: state.body,
            };
            state.messages.push(newMessage);
            state.body = "";
            return state;
        case UPDATE_MESSAGE:
            state.body = action.newMessage;
            return state;
        default:
            return state;
    }
}

const addMessageCreator = () => ({ type: ADD_MESSAGE });
const updateMessageTextCreator = text => ({
    type: UPDATE_MESSAGE,
    newMessage: text
});

export default dialogsReducer;
export { addMessageCreator, updateMessageTextCreator };