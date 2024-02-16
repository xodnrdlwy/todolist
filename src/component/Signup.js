import axios from 'axios';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Footer} from "./Footer";
import { Popover } from 'antd';
import img1 from "../static/assets/images/phone-icon.png";
import img2 from "../static/assets/images/email-icon.png";

import {LoginHeader} from "./LoginHeader";


export function Signup () {
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [codeChecked, setCodeChecked] = useState(false);
    const [verificationCode, setVerificationCode] = useState(null);
    const [encodedCode, setEncodedCode ] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname ] = useState('');
    const [password, setPassword ] = useState('');
    const navigate = useNavigate();
    const content = (
        <div>
            <p>닉네임은 작성하지 않으면 랜덤닉네임으로 생성됩니다.</p>
        </div>
    );

    const EmailChg = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const NicknameChg = (e) => {
        console.log(e.target.value);
        setNickname(e.target.value);
    }
    const PwChg = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const EmailBtn = async () => {
        if (!email || !email.trim() || !/[^@]+@[^@]+\.[^@]+/.test(email.trim())) {
            alert("올바른 이메일 형식이 아닙니다..");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/emailChk', email, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data == true) {
                setIsEmailChecked(true);
                // Call another Axios request to send the email confirmation
                const confirmationResponse = await axios.post('http://localhost:8080/mailConfirm', email, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const code = confirmationResponse.data;
                setVerificationCode(code);
                alert("사용 가능한 이메일 입니다. \n인증 번호가 전송 되었습니다 !");
                console.log('Verification Code:', code);
                return code;
            } else {
            alert("이미 존재하는 이메일입니다!");
            console.log("Error checking email existence:");
            }
        } catch (error) {
                alert("존재하는 이메일이 아닙니다! ");
                console.error("Email already exists!", error);
        }
    };

    const CodeChg = (e) => {
        setEncodedCode(e.target.value);
        console.log(encodedCode);
        console.log(verificationCode);
    };
    const CodeChk = () => {
        console.log(encodedCode);
        console.log(verificationCode);
        if (encodedCode == verificationCode) {
            alert("인증 성공하였습니다!");
            setCodeChecked(true);
        }else {
            alert("인증 실패하였습니다 . 다시 작성해주세요!");
        }
    }

    const CancleBtn = () => {
        navigate("/");
    }

    const SubmitBtn = async (e) => {
        e.preventDefault();
        if (codeChecked == true) {
            try {
                const response = await axios.post('http://localhost:8080/join', {
                    email: email,
                    nickname: nickname,
                    password: password,
                });
                navigate("/Main");
                alert("회원가입에 성공하였습니다 !");
            } catch (error) {
                console.error("Error SubmitBtn form : ", error);
            }
        } else {
            alert("이메일 인증을 진행해주세요 .");
        }
    }

    return (
        <>
            <LoginHeader/>
            <div className="contact-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>| Contact Us</h6>
                                <h2>Get In Touch With Our Agents</h2>
                            </div>
                            <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item phone">
                                        <img src={img1} alt="" style={{maxWidth: '52px'}}/>
                                            <h6>010-020-0340<br/><span>Phone Number</span></h6>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="item email">
                                        <img src={img2} alt="" style={{maxWidth: '52px'}}/>
                                            <h6>info@villa.co<br/><span>Business Email</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6" style={{marginTop: '50px'}}>
                            <form id="contact-form" onSubmit={SubmitBtn}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <fieldset style={{flex: '1'}}>
                                                <label htmlFor="email">E-mail</label>
                                                <input type="text" name="email"  pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required
                                                onChange={EmailChg}
                                                       disabled={isEmailChecked}
                                                />
                                            </fieldset>
                                            <div className="button-container">
                                                <fieldset>
                                                    <button type="button"
                                                    onClick={EmailBtn}
                                                    disabled={isEmailChecked}
                                                    >Send</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                            {/*<div className="message">*/}
                                            {/*    <p>asd</p>*/}
                                            {/*</div>*/}
                                    </div>

                                    <div className="col-lg-12">
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                        <fieldset style={{flex: '1'}}>
                                            <label htmlFor="name">VerificationCode</label>
                                            <input type="password" name="code" id="encodedCode" placeholder="4 - number" autoComplete="on" required
                                                   onChange={CodeChg}
                                                   disabled={codeChecked}
                                            />
                                        </fieldset>

                                            <div className="button-container">
                                                <fieldset>
                                                    <button type="button"
                                                            onClick={CodeChk}
                                                            disabled={codeChecked}
                                                    >
                                                        Check</button>
                                                </fieldset>
                                            </div>


                                         </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                        <fieldset>
                                            <label htmlFor="name">NickName</label>
                                            <Popover content={content}>
                                            <input type="name" name="nickname"  placeholder="Your Name..." autoComplete="on"
                                            onChange={NicknameChg}
                                            />
                                            </Popover>
                                        </fieldset>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                onChange={PwChg}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="password">Confirm Password</label>
                                            <input
                                                name="confirm password"
                                                type="password"
                                                placeholder="Confirm Password"
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="button-container">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Sign Up</button>
                                            <button type="reset"  className="orange-button" >Reset</button>
                                            <button type="button"  className="orange-button"
                                            onClick={CancleBtn}
                                            >Cancle</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}