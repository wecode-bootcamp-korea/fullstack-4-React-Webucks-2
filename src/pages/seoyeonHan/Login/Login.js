import "./Login.scss";
import "../List/List";
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
    this.props.history.push('../List/List');
  };
  // const goToList = () => {
  //   return inputId.includes("@") && inputPw.length > 5
  //     ? setIsActive(true)
  //     : setIsActive(false);
  // };


  return (
    <div id="webucksLoginPage">
      <img src="images/webucksLogo.PNG" alt="위벅스 로고" />
      <div id="main">
        <input
          id="inputId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          onKeyUp={this.goToList}
        />

        <input
          id="inputPw"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
          onKeyUp={this.goToList}
        />
        <button
          // className={isActive ? "activeBtn" : "unactiveBtn"}
          // type="submit"
          // onClick={goToList}
          // disabled={inputId.value === "" || inputPw.value === "" ? true : false}
          type="button"
          disabled={
            this.state.inputId.indexOf('@') !== -1 &&
            this.state.inputPw.length > 5
              ? false
              : true
          }
        >
          로그인
        </button>
      </div>
      <div id="forgotPwd">비밀번호를 잊으셨나요?</div>
    </div>
  );
}

export default Login;
