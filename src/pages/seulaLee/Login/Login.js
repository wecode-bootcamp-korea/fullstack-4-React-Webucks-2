
import './Login.scss';
import { useNavigate } from 'react-router-dom';


function Login(){
    //login btn 작동
    const navigate = useNavigate();
    const goUrl = () => {
        navigate('/coffee');
    };
    return (
        <div className="gray-body">
            <div className="wrap-login">
            <article className="login-section">
                <h2 className="hidden">로그인 박스</h2>
                <h1 className="webucks-logo big-logo">webucks</h1>
            
                <section className="login-form">
                <h2 className="hidden">로그인 폼</h2>
                    <div className="input-box">
                        <input id="inputId" type="text" className="input-default" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    </div>
                    <div className="input-box">
                        <input id="inputPw" type="password" className="input-default" placeholder="비밀번호" />
                    </div>
                    <button type='button' id="loginBtn" className="btn primary" onClick = {goUrl} >로그인</button>

                    <div className="form-end">
                        <span className="inline-link">비밀번호를 잊으셨나요?</span>
                    </div>
                </section>
                
            </article>
        </div>
    </div>
    );
}


export default Login;