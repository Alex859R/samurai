const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

const addPostCreator = () => ({ type: ADD_POST });
const updatePostTextCreator = text => ({
    type: UPDATE_POST,
    newText: text
});

export default profileReducer;
export { addPostCreator, updatePostTextCreator };