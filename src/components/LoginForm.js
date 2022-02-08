import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {

        e.preventDefault();
        const authObject = { 'Project-ID': "068601a6-de5f-4c74-8327-95474c339b73", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            alert(`${username} Logged In Successfully`);
        } catch(error) {
            setError('Oops! Login Failed. Check the Credentials and Try Again');
        }

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chatlet</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
            
        </div>
    );
}
