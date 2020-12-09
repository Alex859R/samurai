import React from 'react';
import usersStyle from "./Users.module.css";
import * as axios from 'axios';
import avatar from '../../assets/img/avatar-mock.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i=1; i <=pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={ usersStyle.users }>
                {
                    this.props.users.map(user => {
                        return (
                            <div className={ usersStyle.userCard } key={ user.id }>
                                <div className={ usersStyle.userCardAvatar }>
                                    <img src={ user?.avatar || avatar } alt="avatar"/>
                                    {
                                        user.followed ?
                                            <button onClick={ () => this.props.unfollow(user.id) }>Unfollow</button>
                                            :
                                            <button onClick={ () => this.props.follow(user.id) }>Follow</button>
                                    }
                                </div>
                                <div className={ usersStyle.userCardInfo }>
                                    <div className={ usersStyle.userInfo }>
                                        <div>{ user.name }</div>
                                        <div>{ user.status }</div>
                                    </div>
                                    <div>
                                        <div>
                                            { user?.location?.country || 'Country' }
                                        </div>
                                        <div>
                                            { user?.location?.city || 'City' }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={ usersStyle.usersPagination }>
                    {pages.map(page =><span key={page} className={ this.props.currentPage === page ? usersStyle.currentPage : ""} onClick={() => { this.onPageChange(page) }}>{page}</span>)}
                </div>
            </div>

        )
    }
}

export default Users;