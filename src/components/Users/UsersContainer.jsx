import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, totalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../utils/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader />: null }
                <Users
                    onPageChange={ this.onPageChange }
                    follow={ this.props.follow }
                    unfollow={ this.props.unfollow }
                    users={ this.props.users }
                    currentPage={ this.props.currentPage }
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                />
            </>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(totalUsersCountAC(usersCount));
        },
        toggleIsFetchingAC: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);