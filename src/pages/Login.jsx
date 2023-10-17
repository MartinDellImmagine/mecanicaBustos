import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import { login } from '../config/firebase';
import { useUserContext } from '../context/UserContext';

import { useNavigate } from 'react-router-dom';


const Login = () => {
        const navigate = useNavigate();


        const { user } = useUserContext()
        if (user){
            if (user.email === 'test@test.com'){
                navigate('/admin');
            }
        }
      
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
      
        const handleSignIn = async (e) => {
            e.preventDefault()
            console.log('test');
            console.log(email, password);


            try {
                const credentialUser = await login({ email, password })
    
        
                console.log(credentialUser);
                console.log('logeado');
            } catch (error) {
                console.log(error);
            }
        }
        


    return (
        <>
        <NavBar />
        <div className='container mt-5'>
            <div className='contianer'>
                
           
                <div className='container'>
                        
                <form className='container'>
                <div>
                    <h2>Inicio de sesión</h2>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleSignIn}>Iniciar sesión</button>
                    {error && <div>{error}</div>}
                    </div>
                </form>
                </div>
            </div>
        </div>

        </>
    );
}

export default Login;
