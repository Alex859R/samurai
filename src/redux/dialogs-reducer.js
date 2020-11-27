const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const initialState = {
    body: '',
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
};

const dialogsReducer = (state = initialState, action) => {
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