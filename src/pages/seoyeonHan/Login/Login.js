import "./Login.scss";
import "../List/List"
import React, { useState } from "react";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleIdInput = (e) => {
    setInputId(e.target.value);
  };

  const handlePwInput = (e) => {
    setInputPw(e.target.value);
  };

  const goToList = () => {
    this.props.history.push('./List.js');
  };


  return (
    <div className="webucksLoginPage">
      <img className="webucksImg" src="images/webucksLogo.PNG" alt="위벅스 로고" />
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
          className={
            inputId.includes("@") && inputPw.length >5
            ? 'buttonAble'
            : 'buttonDisable'
          }
          type="button"
          onClick={goToList}
        >
          로그인
        </button>
      </div>
      <div className="forgotPwd">비밀번호를 잊으셨나요?</div>
    </div>
  );
}

export default Login;
