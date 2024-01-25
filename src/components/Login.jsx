import React, { useState } from 'react'
import Logo from '../assets/img/logo-w.png'
import './Login.css';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/auth/login', { email, password })
            const { token } = response.data;
            setToken(token);
            setEmail("")
            setPassword("")
            navigate('/dashboard')
        } catch (e) {
            console.log(e)
        }
    }

    // const [fetched, setFetched] = useState(false)

    // useEffect(() => {
    //     if (!fetched) {
    //         getCors()
    //         setFetched(true)
    //     }
    // }, [fetched])

    // async function getCors() {
    //     const csrf = await axios.get('/sanctum/csrf-cookie');
    //     console.log('csrf = ', csrf);
    // }

    return (
        <section className='main'>
            <main className='login'>
                <form action="" onSubmit={handleLogin}>
                    <img src={Logo} className='logo' alt="logo" />
                    <div className="login-text">
                        <h2 className='title'>Welcome Back!</h2>
                        <h4 className='subtitle'>Please login to your account.</h4>
                    </div>
                    <div className='mt-24'>
                        <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email Address' />
                        <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
                        <div className="label">
                            <label htmlFor='rememberMe' className='remember-me'><input type="checkbox" id='rememberMe' /> Remember me</label>
                            <label className='forgot'>Forgot Password?</label>
                        </div>
                        <button className='btn-login' type="submit">Login</button>
                    </div>
                    <p className='text-[12px] text-[#5E70A1] absolute bottom-8 w-10/12'>By logging in, you agree to abide by our terms and conditions.</p>
                </form>
            </main>
        </section>
    )
}

export default Login
