import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.scss"



function Login() {
    const navigate = useNavigate();

    function goTosignup() {
        navigate('/signup')
    }

    return (
        <div>

            <section className="login">

                <img src={"./images/webucks_logo.JPG"} className="loginLogo" alt="LOGO" / >

                    <div action="" className="inputForm">
                        <input id="id" type="text" className="loginId" tabindex="1" placeholder="전화번호, 사용자 이름 또는 이메일" / >
                        <input id="pw" type="password" className="loginPasswd" tabindex="2" placeholder="비밀번호" / >
                    </div>

                            <button type="button" className="loginButton" disabled="disabled">로그인</button>
                            <div onClick= { () => goTosignup() } className="lostPasswd">비밀번호를 잊으셧나요?</div>
            </section>


        </div>
        )
}



export default Login;