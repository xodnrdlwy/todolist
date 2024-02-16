import axios from "axios";
import {useState} from "react";

export function EmailChk () {
    const [email, setEmail] =useState('');
    const [verificationCode, setVerificationCode] = useState(null);
    const EmailChg = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    // const EmailBtn = () => {
    //     return axios.post('http://localhost:8080/mailConfirm', email, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(response => {
    //             const code = response.data;
    //             setVerificationCode(code);
    //             console.log('Verification Code:', code);
    //
    //             return code; // Move the return statement here
    //         })
    //         .catch(error => {
    //             console.error('Error sending verification code:', error);
    //             return Promise.reject(error);
    //         });
    // };
    const EmailBtn = async () => {
        try {
            const response = await axios.post('http://localhost:8080/mailConfirm', email, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const code = response.data;
            setVerificationCode(code);
            console.log('Verification Code:', code);

            return code;
        } catch (error) {
            console.error('Error sending verification code:', error);
            throw error;
        }
    };
    return (
        <>
            <input name="email" onChange={EmailChg}/>
            <button
            onClick={EmailBtn}
            >
                Check
            </button>
        </>
    );
}