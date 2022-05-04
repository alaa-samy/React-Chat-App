import {useState} from 'react'
import axios from 'axios'

const LoginForm = () =>{
    const [userName , setUserName]= useState('');
    const [password , setPassword]= useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        
    }
    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'> 
                            <span>Chat Now</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
