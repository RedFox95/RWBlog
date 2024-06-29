import React from "react";
import 

function Post() {
    const handleSubmit = (e) => {
        alert('Post submitted!');
        
    }


    return (
        <div id="postBox">
            <textarea placeholder="Write your post here!" className="textAreaBox"></textarea>
            <input type="submit" onClick={handleSubmit}></input>
        </div>
    )
}

export default Post;