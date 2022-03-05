import './Login.scss';
import List from '../List/List';
import {Link} from 'react-router-dom';
import { useState } from "react";

function Login() {
  function view(){
    return (
      <List/>
    )
  };
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdInput = (e)=>{
    setId(e.target.value);
  };
  const handlePwInput = (e) => {
    setPw(e.target.value);
  };

  return (
    <div id="webucksLoginPage">
      <img src="images/webucksLogo.PNG" alt="위벅스 로고"/>
      <div id="main">
        <input 
        id="idValue" 
        type="text" 
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
        />

        <input 
        id="pwdValue" 
        type="password" 
        placeholder="비밀번호"
        onChange={handlePwInput}
        />
        <Link to='/List'><button onClick={()=>{view()}}>로그인</button></Link>
      </div>
      <div id="forgotPwd">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default Login;