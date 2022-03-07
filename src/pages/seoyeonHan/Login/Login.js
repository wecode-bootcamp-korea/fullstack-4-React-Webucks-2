import './Login.scss';
import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";

  function Login(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
  

  const handleIdInput = (e)=>{
      setInputId(e.target.value)
  };
  const handlePwInput = (e) => {
      setInputPw(e.target.value)
  };
  
  const navigate = useNavigate();
  this.goToList =()=>{
    navigate('../List/List');
  }

  return (
    <div id="webucksLoginPage">
      <img src="images/webucksLogo.PNG" alt="위벅스 로고"/>
      <div id="main">
        <input 
        id="inputId" 
        type="text" 
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
        />

        <input 
        id="inputPw" 
        type="password" 
        placeholder="비밀번호"
        onChange={handlePwInput}
        />
          <button 
          className={
            inputId.includes('@') && inputPw.length>5
            ? 'buttonAble'
            : 'buttonDisAble'
          }
          type="button"
          onClick={this.goToList}
          >
            로그인
          </button>
      </div>
      <div id="forgotPwd">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default Login;