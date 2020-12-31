import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubScriptionOutLinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutLinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {Avatar, IconButton} from '@material-ui/core'
import AddICon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {useStateValue} from "./StateProvider"

function Header() {
    const [{user}, dispatch] = useStateValue();

    return <div className="header">
        <div className="header__left">
            <img src="https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png" alt="" />
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search Facebook"/>
            </div>
        </div>

        <div className="header__middle">
            <div className="header__option header__option-active">
                <HomeIcon fontSize="large"></HomeIcon>
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large"></FlagIcon>
            </div>
            <div className="header__option">
                <SubScriptionOutLinedIcon fontSize="large"></SubScriptionOutLinedIcon>
            </div>
            <div className="header__option">
                <StorefrontOutLinedIcon fontSize="large"></StorefrontOutLinedIcon>
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar src= {user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>

            <IconButton>
                <AddICon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>;
}

export default Header
