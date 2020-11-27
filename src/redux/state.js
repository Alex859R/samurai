const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'It\'s my first post',
                    likesCount: 11
                },
                {
                    id: 3,
                    message: 'Blabla',
                    likesCount: 11
                },
                {
                    id: 4,
                    message: 'Dada',
                    likesCount: 11
                }
            ],
        },
        dialogsPage: {
            body: '',
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych'
                },
                {
                    id: 2,
                    name: 'Andrew'
                },
                {
                    id: 3,
                    name: 'Sveta'
                },
                {
                    id: 4,
                    name: 'Sasha'
                },
                {
                    id: 5,
                    name: 'Viktor'
                },
                {
                    id: 6,
                    name: 'Valera'
                }
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How is your it-kamasutra?'
                },
                {
                    id: 3,
                    message: 'Yo'
                },
                {
                    id: 4,
                    message: 'Yo'
                },
                {
                    id: 5,
                    message: 'Yo'
                }
            ],
        },
    },
    _callSubscriber() {
    },
    get state() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this.state.profilePage.newPostText,
                likesCount: 0
            };

            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPostText = "";
            this._callSubscriber(this.state);
        }
        if (action.type === UPDATE_POST) {
            this.state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.state);
        }
        if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 6,
                message: this.state.dialogsPage.body,
            };

            this.state.dialogsPage.messages.push(newMessage);
            this.state.dialogsPage.body = "";
            this._callSubscriber(this.state);
        }
        if (action.type === UPDATE_MESSAGE) {
            this.state.dialogsPage.body = action.newMessage;
            this._callSubscriber(this.state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

const addPostCreator = () => ({ type: ADD_POST });
const updatePostTextCreator = text => ({
    type: UPDATE_POST,
    newText: text
});
const addMessageCreator = () => ({ type: ADD_MESSAGE });
const updateMessageTextCreator = text => ({
    type: UPDATE_MESSAGE,
    newMessage: text
});
export default store;
export { addPostCreator, updatePostTextCreator, addMessageCreator, updateMessageTextCreator }