import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Get redirect location if it exists
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
        navigate(from, { replace: true });
        } else {
        setError('Invalid email or password');
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                    <img src="src/assets/react.svg" className="logo img-fluid mx-auto d-block" />
                    <h4 className="mb-4 text-center">Gobi Info</h4>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
