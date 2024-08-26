import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
   
    useEffect(() => {
        if (pathname != "/agency/login") {


            const token = localStorage.getItem('agency'); // Assuming you store the token in localStorage
            if (token) {
                try {
                    if (!token.includes('.')) {
                        throw new Error('Token does not have the correct structure.');
                      }
                    const decodedToken = jwtDecode(token);
                    const currentTime = Date.now() / 1000;
                    if (decodedToken.exp < currentTime) {
                        // Token has expired
                        localStorage.removeItem('agency'); // Remove the expired token
                        navigate('/login'); // Redirect to login page
                    }
                } catch (error) {
                    console.error('Invalid token', error);
                    localStorage.removeItem('token'); // Remove the invalid token
                    navigate('/agency/login'); // Redirect to login page
                }
            } else {
                navigate('/agency/login'); // No token found, redirect to login
            }
        }
    }, [navigate]);
};

export default useAuth;