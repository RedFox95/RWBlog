import React, { useState } from "react";

function Post() {
    const [postText, setPostText] = useState('');

    const handleSubmit = (e) => {
        alert('Post submitted!');
        setPostText('');
        e.preventDefault();
    };

    return (
        <div id="postBox">
            <textarea value={postText} placeholder="Write your post here!" className="textAreaBox" onChange={(e) => setPostText(e.target.value)}></textarea>
            <input type="submit" onClick={handleSubmit}></input>
        </div>
    )
}

export default Post;