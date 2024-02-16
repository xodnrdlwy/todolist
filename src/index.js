import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Joinpage} from "./user/Joinpage";
import {Loginpage} from "./user/Loginpage";
import {Mypage} from "./component/Mypage";
import {UserUpdate} from "./component/UserUpdate";
import {UserDelete} from "./component/UserDelete";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/Join" element={<Joinpage/>}/>
            <Route path="/Login" element={<Loginpage/>}/>

              <Route path="user">
              <Route path="mypage" element={<Mypage/>}/>
                  <Route path="update" element={<UserUpdate/>}/>
                  <Route path="delete" element={<UserDelete/>}/>
              </Route>

          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
