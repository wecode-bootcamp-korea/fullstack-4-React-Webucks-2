import "./Login.scss";
import "../List/List"
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const isValidInput = inputId.includes("@") && inputPw.length >5;

  const handleIdInput = (e) => {
    setInputId(e.target.value);
  };

  const handlePwInput = (e) => {
    setInputPw(e.target.value);
  };

  const navigate = useNavigate();

  const goToList = () => {
    navigate('/List-seoyeon');
  };

  return (
    <div className="webucksLoginPage">
      <img className="webucksImg" src="images/webucksLogo.PNG" alt="webucksLogos" />
      <div className="main">
        <input className="inputField"
          value={inputId}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />

        <input className="inputField"
          value={inputPw}
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />

        <button 
        type='button'
        className={`loginBtn ${isValidInput ? "" : "btnDisabled"}`} 
        onClick={goToList}>
          로그인
        </button>
      </div>
      <div className="forgotPwd">비밀번호를 잊으셨나요?</div>
    </div>
  );
}

export default Login;
