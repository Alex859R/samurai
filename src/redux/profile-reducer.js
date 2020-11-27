const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const profileReducer = (state, action) => {
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