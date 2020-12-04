import React from 'react';
import usersStyle from "./Users.module.css";
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => console.log(response.data.items))
    }

    const userCards = props.users.map(user => {
        return (
            <div className={ usersStyle.userCard } key={ user.id }>
                <div className={ usersStyle.userCardAvatar }>
                    <img src={ user.avatar } alt="avatar"/>
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
                            { user.location.country }
                        </div>
                        <div>
                            { user.location.city }
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={ usersStyle.users }>
            { userCards }
            <button className={ usersStyle.showMore }>Show
                more
            </button>
        </div>
    )
};

export default Users;