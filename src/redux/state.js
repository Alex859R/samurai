const store = {
    _state: {
        profilePage: {
            newPostText: 'Hello my little friends',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
        },
        dialogsPage: {
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

    _callSubscriber() {},

    get state() {
        return this._state;
    },

    updatePostText(text) {
        this.state.profilePage.newPostText = text;
        this._callSubscriber(this.state);
    },

    addPost() {
        const newPost = {
            id: 5,
            message: this.state.profilePage.newPostText,
            likesCount: 0
        };

        this.state.profilePage.posts.push(newPost);
        this.state.profilePage.newPostText = "";
        this._callSubscriber(this.state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;