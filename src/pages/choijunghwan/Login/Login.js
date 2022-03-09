import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

export default function Login (){
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [ready, setReady] = useState(0);
  const [opacity, setOpacity] = useState(0.3);
  const navaigate = useNavigate();


    const goToDetail = ()=>{

      fetch("/users/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:id,
          password:pw
        })

      }).then((response)=>response.json())
      .then((result)=>console.log(result))

      if(opacity===1){ navaigate("/main-junghwan");}
    }

    const handleIdInput = (event)=>{
      setId(event.target.value)
      
     return id.includes("@") ?  (setReady(0.5), readyCondition(ready)) : (setReady(0),setOpacity(0.3))
    }

    const handlePasswordInput = (event)=>{
      setPw(event.target.value)

      return pw.length > 4 ? (ready == 0.5 ? setReady(1) : readyCondition(ready))
       : setOpacity(0.3)
    }

    const readyCondition = (ready)=>{

     return ready == 1 ? setOpacity(1) : null
    }

    const handleSignIn = () =>{
      fetch("/users/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:id,
          password:pw
        })

      }).then((response)=>response.json())
      .then((result)=>console.log("결과 : ",result))
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
      <button onClick={handleSignIn}>회원가입</button>
    </section>
    </div>
}