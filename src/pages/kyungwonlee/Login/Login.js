import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginComponent() {
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main-kyungwon");
  };
  const isValid = idInput.includes("@") && pwInput.length > 8;

  const handleIdInput = (event) => {
    setIdInput(event.target.value);
  };
  const handlePwInput = (event) => {
    setPwInput(event.target.value);
  };
  return (
    <div>
      <section className="login-page">
        <div className="login-form">
          <h1 className="logo">Webucks</h1>
          <input
            className="id input-kyungwon"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
            onChange={handleIdInput}
          />
          <input
            className="password input-kyungwon"
            type="password"
            placeholder="비밀번호"
            required
            onChange={handlePwInput}
          />
          <button className="button" onClick={goToMain} disabled={!isValid}>
            로그인
          </button>
          <div className="find-pw">비밀번호를 잊으셨나요?</div>
        </div>
      </section>
    </div>
  );
}

export default LoginComponent;
