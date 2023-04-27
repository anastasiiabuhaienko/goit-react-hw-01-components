import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>

             {/* вариант добавление дополнительного класса в зависимости от условия */}
            {/* <span 
                className={
                    isOnline
                    ? `${css.status} ${css.online}`
                    : `${css.status} ${css.offline}`
                }
            >
            </span> */}

            {/* c помощью пакета clsx можно написать добавление класса по другому */}
            <span 
                className={clsx(
                    css.status, 
                    isOnline ? css.online : css.offline
                )}
            >
            </span>



            <img className= {css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
            
        </li>
    )
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

