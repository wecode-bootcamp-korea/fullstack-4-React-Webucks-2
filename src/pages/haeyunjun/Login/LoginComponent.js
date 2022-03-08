import React from 'react'

function LoginComponent() {
  return (
    <div>
      <section className='loginPage'>
          <div className='container'>
              <h1 className='logo'>WeBucks</h1>  
              <input className = 'id' type='text' onChange = '' placeholder = "전화번호, 사용자 이름 또는 이메일" />
              <input className = 'password' type='password' onChange = {handleIdInput} placeholder = "비밀번호" />
              <button className = 'loginButton' onClick={()=>{함수()}} type = 'button' disabled='disabled'>로그인</button>
              <div className='forgotPassword'>비밀번호를 잊으셨나요?</div>
          </div>
      </section>
    </div>
  )
}

export default LoginComponent