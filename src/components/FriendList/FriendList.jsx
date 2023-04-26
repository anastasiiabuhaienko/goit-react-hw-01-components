import PropTypes from 'prop-types';
import {FriendListItem} from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';


export const FriendList = ({friends}) => {
    return (
        <ul className = {css.friendList}>

            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                    avatar={avatar} 
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))}

        </ul>
    )
};


FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
    
};
