const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(user => {
                    if (user.id === action.userId) return { ...user, followed: true };
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                users: state.users.map(user => {
                    if (user.id === action.userId) return { ...user, followed: false };
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users],
            }
        default:
            return state;
    }
}

const followAC = userId => ({ type: FOLLOW, userId });
const unfollowAC = userId => ({ type: UNFOLLOW, userId });
const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
export { followAC, unfollowAC, setUsersAC };
