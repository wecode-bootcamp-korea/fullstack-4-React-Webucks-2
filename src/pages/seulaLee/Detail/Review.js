import { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";

function Review(inputData) { 
    let [isVal, setIsVal] = useState('');
    //review 초기값 설정
    let [reviewInfo, setReviewInfo] = useState({
        reviewList:[],
        'user_name': '익명의 농담곰',
        'user-comment' :'',
    })
    //리뷰 입력 후 버튼 누를 시 리스트에 변경된 reviewInfo 추가
    const addComment = () => {
        reviewInfo['reviewList'].push(isVal);
        setReviewInfo({
            reviewList: reviewInfo['reviewList'],
            'user_name':reviewInfo['user_name'],
            'user-comment':'',
        })
        setIsVal('');
    }
    const enterPress = e => { 
        if (e.key === 'Enter') { 
            addComment()
        }
    }
    return (
        <div className="coffee-review">
                    <h3 className="review-title">리뷰</h3>
            <div className="review-cnt">
                {
                //reviewList에 등록된 코멘트를 map 함수를 이용해 컴포넌트를 뿌려줌
                    reviewInfo.reviewList.map((txt, i) => { 
                        return (
                            <dl className="review-user" key={i}>
                                <dt>{reviewInfo['user_name']}</dt>
                                <dd>{txt}</dd>
                            </dl>                          
                        );
                    }) 
                }
                    {/*<dl className="review-user">
                        <dt>{(inputData.review === undefined ? '멋진리뷰어' : inputData.review['user_name'])}</dt>
                        <dd>{(inputData.review === undefined ? '정성담은 리뷰' : inputData.review['user_comment'])}</dd>
                    </dl>
                    <dl className="review-user">
                        <dt>북방의핑크팬더</dt>
                        <dd>오늘도 나이트로 뭐시기를 마시러 갑니다.</dd>
                    </dl>
                    <dl className="review-user">
                        <dt>딸기자일리톨</dt>
                        <dd>진짜 나이트로 바닐라 크림은 전설이다.진짜 나이트로 바닐라 크림은 전설이다.</dd>
                    </dl>*/}
            </div>
            <span className={`input-review ${isVal !== '' ?'is-typing':''}`}>
                <input
                    type="text"
                    placeholder="리뷰를 입력해주세요."
                    value={isVal}
                    onChange={(e) => {
                        //console.log(reviewInfo); 
                        setIsVal(e.target.value);
                    }}
                    onKeyPress={enterPress}
                />
                <FontAwesomeIcon icon={faComment} onClick={addComment}/>
            </span>
        </div>
    );
}
export default Review;