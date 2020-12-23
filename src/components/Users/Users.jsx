import React from 'react';
import usersStyle from "./Users.module.css";
import avatar from '../../assets/img/avatar-mock.png';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={ usersStyle.users }>
            {
                props.users.map(user => {
                    return (
                        <div className={ usersStyle.userCard } key={ user.id }>
                            <div className={ usersStyle.userCardAvatar }>
                                <img src={ user.photos.small || avatar } alt="avatar"/>
                                {
                                    user.followed ?
                                        <button onClick={ () => props.unfollow(user.id) }>Unfollow</button>
                                        :
                                        <button onClick={ () => props.follow(user.id) }>Follow</button>
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
                {
                    pages.map(page => {
                        return (
                            <span key={ page }
                                  className={ props.currentPage === page ? usersStyle.currentPage : "" }
                                  onClick={ () => props.onPageChange(page) }
                            >
                                { page }
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;