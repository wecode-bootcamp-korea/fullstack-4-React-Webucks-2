import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

export default function Login (){
  const [state, setState] = useState("");
  const [ready, setReady] = useState(0);
  const [opacity, setOpacity] = useState(0.3);
  const navaigate = useNavigate();

    const goToDetail = ()=>{
      if(opacity === 1)
      navaigate("/main-junghwan");
    }

    const handleIdInput = (event)=>{
      setState(event.target.value)

     return state.includes("@") ?  (setReady(0.5), readyCondition(ready)) : (setReady(0),setOpacity(0.3))
    }

    const handlePasswordInput = (event)=>{
      setState(event.target.value)
      
      return state.length > 4 ? (ready == 0.5 ? setReady(1) : readyCondition(ready))
       : setOpacity(0.3)
    }

    const readyCondition = (ready)=>{

     return ready == 1 ? setOpacity(1) : null
    }

    return <div className='LoginJung'>
     <section className="loginBody">
      <span>Webucks</span>
      <div className="loginForm">
        <input
          type="text"
          id="email"
          required
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <div className="passwordBox">
                <input
                type="password"
                id="password"
                required
                placeholder="비밀번호"
                onChange={handlePasswordInput}
                />
            <button className="hide" >hide</button>
            <button className="view" >view</button>
        </div>
        <button className="loginBtn" style={{opacity}} onClick={goToDetail}>로그인</button>
      </div>
      <div >비밀번호를 잊으셨나요?</div>
    </section>
    </div>
}