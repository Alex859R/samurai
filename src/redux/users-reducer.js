const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
                ...state, users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

const follow = userId => ({ type: FOLLOW, userId });
const unfollow = userId => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
export { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching };
