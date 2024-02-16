// css
import "../static/vendor/bootstrap/css/bootstrap.min.css";
import "../static/assets/css/fontawesome.css";
import "../static/assets/css/templatemo-villa-agency.css";


// js
import Utils from "../utils/Utils";
import {useEffect, useState} from "react";
import axios from "axios";

export function Header () {
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        axios.get('/showUser')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Error Axios Data : ", error);
            })
    }, []);


    const LogoutBtn = async () => {
        try {
            const response = await axios.post('/logout');
            console.log(response.data); // Logging response data (optional)
            window.location.reload();
            // Redirect or perform any other action upon successful logout
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <header className="header-area header-sticky background-header">
                <Utils/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/*// <!-- ***** Logo Start ***** -->*/}
                            <a href="/" className="logo">
                                <h1>ToDo</h1>
                            </a>
                            {/*// <!-- ***** Logo End ***** -->*/}
                            {/*// <!-- ***** Menu Start ***** -->*/}
                            <ul className="nav">
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="/properties">To-do-list</a></li>
                                {userData ? (
                                    <li></li>,
                                        <li><a href="user/mypage" >Mypage</a></li>
                                ) : (
                                    <li></li>,
                                        <li></li>

                                )}
                            {userData ? (
                                        <li></li>,
                                    <li><a style={{cursor: 'pointer', color: '#1e1e1e', background: '#fff', fontWeight: 'bold'}} onClick={LogoutBtn} >Logout</a></li>
                            ) : (
                                    <li></li>,
                                    <li><a href="/Login" style={{cursor: 'pointer', color: '#1e1e1e', background: '#fff', fontWeight: 'bold'}}>Login</a></li>

                            )}
                        </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/*// <!-- ***** Menu End ***** -->*/}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}