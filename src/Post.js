import React from 'react'
import "./Post.css"
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutLineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutLined from '@material-ui/icons/ExpandMoreOutlined'

function Post({profilePic, image, username, timestamp, message}) {
    return <div className="post">
                <div className="post_top">
                    <Avatar src={profilePic} className="post_avatar"/>
                    <div className="post_info">
                        <h3>{username}</h3>
                    </div>
                </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutLineIcon />
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutLined />
                </div>
            </div>
    </div>;
}

export default Post
