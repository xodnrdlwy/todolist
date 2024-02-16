import Utils from "../utils/Utils";
import "../static/vendor/bootstrap/css/bootstrap.min.css";
import "../static/assets/css/fontawesome.css";
import "../static/assets/css/templatemo-villa-agency.css";

export function LoginHeader () {
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
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
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