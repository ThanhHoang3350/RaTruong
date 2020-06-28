import React, {useReducer} from 'react';
import * as notify from './../constants/Notify';
import { Link } from 'react-router-dom';

import { firebaseApp } from './../firebase';
import { useDispatch } from 'react-redux';
import { actChangeNotify} from './../actions/index';

function Login() {
    const dispatch = useDispatch();

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),{
            email: '',
            password: '',
        }
    );

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
    }


    const handleSubmit = (event) => {
        let { email, password } = userInput
		firebaseApp.auth()
			.signInWithEmailAndPassword(email, password)
			.then(data => {
				dispatch(actChangeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_SIGNIN_SUCCESSFULL_TITLE, notify.NOTI_SIGNIN_SUCCESSFULL_MESSAGE))

			})
			.catch((error) => {
				dispatch(actChangeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_SIGNIN_FAIL_TITLE, error.message ));
		  	});
		event.preventDefault();
	}
    return (
        <div className="p-5">
            <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
            </div>
            <form className="user" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={userInput.email} onChange={handleChange} name="email" type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                </div>
                <div className="form-group">
                    <input value={userInput.password} onChange={handleChange} name="password" type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                    </div>
                </div>
                <div className="form-group">
					<div className="col-sm-offset-2 col-sm-6">
            { userInput.email === 'thanhhoang@gmail.com' ?
  						<button type="submit" className="btn btn-success">
                <Link to={`/product`}>Sign in</Link>
              </button>
              :
              <button type="submit" className="btn btn-success">
                <Link to={`/login`}>Sign in</Link>
              </button>
            }
					</div>
				</div>
            </form>
        </div>
    );
}

export default Login;
