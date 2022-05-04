import {useState} from 'react'
import axios from 'axios'

const LoginForm = () =>{
    const [userName , setUserName]= useState('');
    const [password , setPassword]= useState('')
    const [error , setError]= useState('')

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const auth = {'Project-ID' : 'd1edd90d-3c5d-4f70-882b-4ff1de2da614' , 'User-Name': userName , 'User-Secret': password}
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: auth});
            localStorage.setItem('username',userName)
            localStorage.setItem('password',password)

            window.location.reload();

        }catch(error){
            setError('Oops, icorrect username or password')
        }
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

                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;
