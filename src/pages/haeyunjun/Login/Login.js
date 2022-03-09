import React, {useState} from 'react'
// import LoginComponent from './LoginComponent';
import './Login.scss'

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    //id 입력시 값 저장
    const handleIdInput = e => {
        setId(e.target.value);
        console.log(id);
    }
    //pw 입력시 값 저장
    const handlePwInput = e => {
        setPassword(e.target.value);
        console.log(password);
    }

    return (
        <div>
            <section className='loginPage'>
                <div className='container'>
                    <h1 className='logo'>WeBucks</h1>  
                    <input 
                        className = 'id' 
                        type='text' 
                        onChange = {handleIdInput} 
                        placeholder = "전화번호, 사용자 이름 또는 이메일"
                    />
                    <input 
                        className = 'password' 
                        type='password' 
                        onChange = {handlePwInput} 
                        placeholder = "비밀번호" 
                    />
                    <button 
                        className = 'loginButton' 
                        type = 'button' 
                        disabled='disabled'
                    >
                        로그인</button>
                    <div className='forgotPassword'>비밀번호를 잊으셨나요?</div>
                </div>
            </section>
        </div>
    )
}

export default Login

// const inputId = document.getElementsByClassName('id')[0];
// const inputPw = document.getElementsByClassName('password')[0];
// const loginButton = document.getElementsByClassName('loginButton')[0];
// function activateButton() {
//     if (inputId.value.includes('@') && inputPw.value.length > 7) {
//         loginButton.style.backgroundColor = '#61aded';
        
//     } else {
//         console.log('로그인버튼 비활성화');
//         loginButton.style.backgroundColor = '#add3ea';
        
//     };
// }