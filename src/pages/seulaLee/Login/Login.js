
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';


function Login() {
    return (
        <div className="gray-body">
            <div className="wrap-login">
            <article className="login-section">
                <h2 className="hidden">로그인 박스</h2>
                    <h1 className="webucks-logo big-logo">webucks</h1>
                    <InputLogin />
            </article>
        </div>
    </div>
    );
}
export function InputLogin(props) { 
    const [inputValue, setInputValue] = useState({
        "idValue": '',
        "pwValue": '',
    });
    const navigate = useNavigate();

    const goUrl = () => {
        navigate('/list-seula');
    };
    const handleIdPwInput = (e) => {
        //console.log({ ...inputValue}, e.target.value,e.target.name);//중괄호 안에 inputValue 써주어야 함.inputValue 출력
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })//es6 문법, spread operator을 통해 객체 업데이트         
    }
    const isPass = !(inputValue.idValue.includes('@') && inputValue.pwValue.length > 4);
    //isPass는 inputValue의 키값들을 검사해 true 혹은 false가 된다.기본 isPass 값으로는 true이다.
    return (
        <section className="login-form-seula">
                <h2 className="hidden">로그인 폼</h2>
            <input name="idValue" onChange={handleIdPwInput} type="text" className="input-default" placeholder="id@example.com" />       
            <input name="pwValue" onChange={handleIdPwInput} type="password" className="input-default" placeholder="5글자 이상 패스워드 입력" />        
            <button type='button' className="btn primary" onClick={goUrl} disabled={isPass}>로그인</button>

                    <div className="form-end">
                        <span className="inline-link">비밀번호를 잊으셨나요?</span>
                    </div>
                </section>
    );
}

export default Login;