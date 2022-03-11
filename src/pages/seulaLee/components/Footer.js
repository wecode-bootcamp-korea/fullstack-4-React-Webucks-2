import './Footer.scss';

function Footer(){
    return (
        <footer className="footer-seula">
            <h2 className="hidden">푸터</h2>
            <div className="footer-wrap">
                <ul className="footer-menu">
                    <li>
                        <span className="footer-menu-title">company</span>
                        <ol>
                            <li>한눈에 보기</li>
                            <li>위벅스 사명</li>
                            <li>위벅스 소개</li>
                            <li>국내 뉴스룸</li>
                            <li>세계의 위벅스</li>
                            <li>글로벌 뉴스룸</li>
                        </ol>
                    </li>
                    <li>
                        <span className="footer-menu-title">corporate sales</span>
                        <ol>
                            <li>단체 및 기업 구매 안내</li>
                        </ol>
                    </li>
                    <li>
                        <span className="footer-menu-title">partnership</span>
                        <ol>
                            <li>신규 입점 제의</li>
                            <li>협력 고객사 등록 신청</li>
                        </ol>
                    </li>
                    <li>
                        <span className="footer-menu-title">online community</span>
                        <ol>
                            <li>페이스북</li>
                            <li>트위터</li>
                            <li>유튜브</li>
                            <li>블로그</li>
                            <li>인스타그램</li>
                        </ol>
                    </li>
                    <li>
                        <span className="footer-menu-title">recruit</span>
                        <ol>
                            <li>채용 소개</li>
                            <li>채용 지원하기</li>
                        </ol>
                    </li>
                    <li>
                        <span className="footer-menu-title">webucks</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;