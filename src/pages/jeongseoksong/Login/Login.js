import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import "./Login.scss"




function Login() {
    const navigate = useNavigate();

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
  
    const handleIdinput = (e) => {
      setInputId(e.target.value);
    };
  
    const handlePwinput = (e) => {
      setInputPw(e.target.value);
    };

    // const handleLogin = () => {
    //     fetch("/user/signup",{
    //         method :"POST",
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email : this.state.id,
    //             password : this.state.pw,
    //         }),
    //     })
    //     .then((response) => response.json())
    //     .then((result)) => console.log(result))
    // }

    function goTosignup() {
        navigate('/signup')
    }

    return (
        <div className='loginPage'>
            <section className="login">
                <div className="loginLogo">WeBucks</div>
                    <div action="" className="inputForm">
                        <input value={inputId} type="text" className="loginId" 
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            onChange={handleIdinput} / >
                        <input value={inputPw} type="password" className="loginPasswd" 
                            placeholder="비밀번호"
                            onChange={handlePwinput} / >
                    </div>
                        <button type="button" className={
                        inputId.includes("@") && inputPw.length >5
                            ? 'buttonAble'
                            : 'buttonDisable'
                        } 
                        // onClick={handleLogin} 
                        >
                        로그인</button>
                        <div onClick= { () => goTosignup() } 
                        className="lostPasswd">비밀번호를 잊으셧나요?</div>
            </section>
        </div>
        )
}



export default Login;