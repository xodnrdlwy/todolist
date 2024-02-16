import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import axios from "axios";

export function Signin () {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const JoinBtn = () => {
        navigate("/Join");
    }
    const EmailChg = (e) => {
        setEmail(e.target.value);
    }
    const PwChg = (e) => {
        setPassword(e.target.value);
    }
    const LoginBtn = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password,
            });
            alert("로그인 성공!");
            navigate("/");
        } catch (error) {
            console.error("Error Submit !!", error);
        }
    }
    return (
        <>
            <div className="contact-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" >
                            <form id="contact-form" onSubmit={LoginBtn}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="name">E-mail</label>
                                            <input type="text" name="email"  pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required
                                                   onChange={EmailChg}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Confirm Password"
                                                onChange={PwChg}
                                            />
                                        </fieldset>
                                    </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label htmlFor="password"
                                        onClick={JoinBtn}
                                        >No MemberShip ? </label>
                                    </fieldset>
                                </div>
                                   <div className="button-container">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Login</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}