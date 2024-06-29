import React, { useState } from 'react';
import style from './style.css';

function Login({ onSubmit }) {
    return (
        <div style={{display:'flex', justifyContent:'center',marginTop:20}}>
            <div id='loginBox'>
                <form action="x" onSubmit={onSubmit} >
                    <h1>Please Login to Access Content</h1>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Login;