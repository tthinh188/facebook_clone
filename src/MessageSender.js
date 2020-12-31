import React , {useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from "./StateProvider"
import db from "./firebase"
import firebase from "./firebase"

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [{user}, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            message: input,
            profilePic: user.photoURL,
            username: user.displayName,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imageURL,
        });
        // reset inputs
        setInput("");
        setImageURL("");
    };
    
    return <div className="messageSender">
            <div className="messageSender_top">
            <Avatar src={user.photoURL}/>
            <form>
                <input 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                className="messageSender_input"
                placeholder={`What's on your mind, ${user.displayName}?`}
                />
                <input 
                value = {imageURL}
                onChange = {(e) => setImageURL(e.target.value)}
                placeholder="Image URL (Optional)"
                />
                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>
            </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoCamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>;
}

export default MessageSender
