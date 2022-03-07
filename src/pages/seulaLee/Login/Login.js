
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
    const [inputValue, setInputValue] = useState({
        "idValue": '',
        "pwValue": '',
    });
    const handleIdPwInput = (e) => { 
        //console.log({ ...inputValue}, e.target.value,e.target.name);//중괄호 안에 inputValue 써주어야 함.inputValue 출력
        setInputValue({...inputValue,[e.target.name]:e.target.value})//es6 문법, spread operator을 통해 객체 업데이트
    
    }
    return (
        <div className="gray-body">
            <div className="wrap-login">
            <article className="login-section">
                <h2 className="hidden">로그인 박스</h2>
                    <h1 className="webucks-logo big-logo">webucks</h1>
                    <InputLogin onChange={handleIdPwInput} />
            </article>
        </div>
    </div>
    );
}
export function InputLogin(props) { 
    const navigate = useNavigate();
    const goUrl = () => {
        navigate('/coffee');
    };
    
    return (
        <section className="login-form-seula">
                <h2 className="hidden">로그인 폼</h2>

            <input name="idValue" onChange={props.onChange} type="text" className="input-default" placeholder="전화번호, 사용자 이름 또는 이메일" />       
                <input name="pwValue" onChange={props.onChange} type="password" className="input-default" placeholder="비밀번호" />
                   
                    <button type='button' id="loginBtn" className="btn primary" onClick = {goUrl} >로그인</button>

                    <div className="form-end">
                        <span className="inline-link">비밀번호를 잊으셨나요?</span>
                    </div>
                </section>
    );
}

export default Login;