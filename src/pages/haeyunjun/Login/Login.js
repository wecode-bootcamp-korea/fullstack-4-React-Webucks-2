import React from 'react'
import './Login.scss'

const inputId = document.getElementsByClassName('id')[0];
const inputPw = document.getElementsByClassName('password')[0];
const loginButton = document.getElementsByClassName('loginButton')[0];

function LoginComponent() {
    function activateButton() {
        if (inputId.value.includes('@') && inputPw.value.length > 7) {
            loginButton.style.backgroundColor = '#61aded';
            
        } else {
            console.log('로그인버튼 비활성화');
            loginButton.style.backgroundColor = '#add3ea';
            
        };
    }
    function login(){}
    function 함수(){}

    // inputId.addEventListener('keyup',activateButton);
    // inputPw.addEventListener('keyup',activateButton);
    // loginButton.addEventListener('click',moveToListPage);
    
    return (
    <div>
        <section className='loginPage'>
            <div className='container'>
                <h1 className='logo'>WeBucks</h1>  
                <input className = 'id' type='text' placeholder = "전화번호, 사용자 이름 또는 이메일"/>
                <input className = 'password' type='password' placeholder = "비밀번호"/>
                <button className = 'loginButton' onClick={()=>{함수()}} type = 'button' disabled='disabled'>로그인</button>
                <div className='forgotPassword'>비밀번호를 잊으셨나요?</div>
            </div>
        </section>
    </div>
    )
}

export default LoginComponent