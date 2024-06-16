import React, { useEffect } from 'react';
import "./css/signin.css";

export default function Signin() {

    useEffect(() => {
        const form = document.getElementById('signupform');
        const handleSignup = async (e) => {
            e.preventDefault();
            await signup();
        };
        
        form.addEventListener('submit', handleSignup);
        
        return () => {
            form.removeEventListener('submit', handleSignup);
        };
    }, []);

    async function signup(){
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="body">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form id="signupform">
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" id='username' name="txt" placeholder="User name" />
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input type="password" id="password" name="pswd" placeholder="Password" />
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
