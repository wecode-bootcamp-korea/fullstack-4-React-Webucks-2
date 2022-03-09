import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import LoginComponent from './LoginComponent';
import './Login.scss'

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

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

    //로그인버튼 활성화/ 비활성화
    const isValidated = id.includes('@') && password.length > 7 ? 
        true : false

    // 로그인버튼 클릭시 리스트 페이지로 이동
    const goToList = () => {
        navigate("/list-haeyun")
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
                        disabled={!isValidated}
                        onClick= {goToList}
                    >
                        로그인</button>
                    <div className='forgotPassword'>비밀번호를 잊으셨나요?</div>
                </div>
            </section>
        </div>
    )
}

export default Login


