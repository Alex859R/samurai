import React from 'react';
import usersStyle from "./Users.module.css";
import * as axios from 'axios';
import avatar from '../../assets/img/avatar-mock.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })

    }

    render() {
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
                <button className={ usersStyle.showMore }>Show more</button>
            </div>
        )
    }
}

export default Users;