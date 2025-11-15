// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {

    const {createUser} = use(AuthContext)




    const handleRegister = (e) =>{
        e.preventDefault()
        // const name = e.target.value.name.value;
        // const photo = e.target.value.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     console.log(result.user)
        // })
        // .catch(error => {
        //     console.log(error)
        // })


        createUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-center font-bold text-2xl mt-4'>This is Register</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="name" name='name' />

                    <label className="label">Photo</label>
                    <input type="text" className="input" placeholder="photo" name='photo' />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>You have an accout?  <Link className='text-blue-500' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;