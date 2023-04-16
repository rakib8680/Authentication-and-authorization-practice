import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { UserContext } from './Providers/UserProvider';

const Login = () => {

    const { signIn } = useContext(UserContext);


    const handleSignIn = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err)
            })
        form.reset()
    }

    return (
        <div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link className='btn btn-link' to="/registration">New User ?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;