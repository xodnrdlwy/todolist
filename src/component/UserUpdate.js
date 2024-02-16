import {Header} from "./Header";
import {useState} from "react";
import axios from "axios";

export function UserUpdate () {
    const [password, setPassword] = useState('');
        const pwChk = async (e) => {
            e.preventDefault()
            try {
                const response = await axios.post('/PwChk', {
                    password: password,
            });
                alert("Success!!");
            } catch (error) {
                console.error(error);
            }
        }
        const pwChg = (e) => {
            setPassword(e.target.value);
        }

    return (
        <>
            <Header/>
            <div className="contact-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" >
                            <form id="contact-form" onSubmit={pwChk}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Confirm Password"
                                                onChange={pwChg}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="button-container">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Check</button>
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