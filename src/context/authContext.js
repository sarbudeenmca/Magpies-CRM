import { createContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'


const AuthDataContext = createContext({})

export const AuthDataProvider = ({ children }) => {


    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.status === 200) {
                localStorage.removeItem('token');
                setToken('');
                navigate('/login');
                // const tokenCheck = localStorage.getItem('token');
                // console.log('Token removed from localStorage Token:(' + tokenCheck + ")");
            } else {
                console.error('Logout failed:', res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        // Fetch or set the token when the component mounts
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthDataContext.Provider value={{ handleLogout }}>
            {children}
        </AuthDataContext.Provider>
    )
}

export default AuthDataContext