import '../assets/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const API_BASE_URL = "http://localhost:3001"; 

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.put(`${API_BASE_URL}/api/user/login`, 
            { email, password }, 
            { headers: { 'Content-Type': 'application/json' } }
          )
          .then(result => {
            console.log(result);
            if(result.data.message === "Success"){
                console.log("Login Success" + result.data.token);

                localStorage.setItem('token', result.data.token); // Save token
                window.location.href = '/home'; 

                alert('Login successful!' )
                navigate('/home');
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <head><link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSkt4mrYBSTmzlZ+fW9jqMG1hA2eXcKTV8HjMXg9G7e"
            crossorigin="anonymous"
            />
            </head>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-2 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    {/* TO add ' appostopee */}
                    <p className='container my-2'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login