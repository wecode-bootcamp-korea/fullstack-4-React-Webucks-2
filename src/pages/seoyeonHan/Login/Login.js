import React from 'react';
import './Login.scss';
import List from '../List/List';
import {Link} from 'react-router-dom';

function Login() {
  function view(){
    return (
      <List/>
    )
  };

  return (
    <div id="webucksLoginPage">
      <img src="images/webucksLogo.PNG" alt="위벅스 로고"/>
      <div id="main">
        <input id="idValue" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
        <input id="pwdValue" type="password" placeholder="비밀번호"/>
        <Link to='/List'><button onClick={()=>{view()}}>로그인</button></Link>
      </div>
      <div id="forgotPwd">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default Login;