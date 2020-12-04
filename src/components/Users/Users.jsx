import React from 'react';
import usersStyle from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, avatar: 'https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg', followed: true, name: "Alex", status: "Hi there! I'm frontend developer", location: { country: 'Russia', city: 'Moscow' }
            },
            {
                id: 2, avatar: 'https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg', followed: false, name: "Marry", status: "I'm frontend developer to", location: { country: 'Ukraine', city: 'Kiev' }
            }
        ]);
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