import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

export default function Login (){
    const navaigate = useNavigate()
    const goToDetail = ()=>{
    
      navaigate("/detail");
       
    }
    return <div className='Login'>
     <section className="loginBody">
      <span>Webucks</span>
      <div className="loginForm">
        <input
          type="text"
          id="email"
          required
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <div className="passwordBox">
                <input
                type="password"
                id="password"
                required
                placeholder="비밀번호"
                minlength="7"
                />
            <button className="hide" onclick="hide()">hide</button>
            <button className="view" onclick="view()">view</button>
        </div>
        <button className="loginBtn" onClick={goToDetail}>로그인</button>
      </div>
      <div >비밀번호를 잊으셨나요?</div>
    </section>
    </div>
}