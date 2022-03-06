import React, { useState } from "react";
import "./Login.scss";

function LoginComponent() {
  const [user, setUser] = useState();
  const handleIdInput = (event) => {
    setUser(event.target.value);
  };
  const handlePwInput = (event) => {
    setUser(event.target.value);
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
          <button className="button" onClick={() => {}} disabled>
            로그인
          </button>
          <div className="find-pw">비밀번호를 잊으셨나요?</div>
        </div>
      </section>
    </div>
  );
}

export default LoginComponent;
