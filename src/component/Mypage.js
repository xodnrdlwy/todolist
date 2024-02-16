import {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "./Header";
import img1 from "../static/assets/images/deal-01.jpg";
import {useNavigate} from "react-router-dom";
import {Footer} from "./Footer";

export function Mypage() {
    const [ userData, setUserData ] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`/showUser`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Error Axios Data : ", error);
            })
    }, [])

    const UpdateBtn = () => {
        navigate(`/user/update`);
    }
    const DeleteBtn = () => {
        navigate('/user/delete');
    }
    return (
        <>
            <Header/>
            <div className="section best-deal" style={{marginTop: '80px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-heading">
                                <h6>| Mypage</h6>
                                <h2>Todo Member Mypage !</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper ">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" type="button" onClick={UpdateBtn}>Modify</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" type="button" onClick={DeleteBtn}>Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="info-table">
                                                        <ul>
                                                            <li>Email <span>{userData.email}</span></li>
                                                            <li>Nickname <span>{userData.nickname}</span></li>
                                                            <li>Created Post<span>4</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src={img1} alt=""/>
                                                </div>
                                                <div className="col-lg-3">
                                                    <h4>Extra Info About Property</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                                                        <br/><br/>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}