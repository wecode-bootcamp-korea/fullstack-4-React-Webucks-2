import React from "react";
import "./List.scss";
import Detail from '../Detail/Detail';
import {Link} from 'react-router-dom';
import TopNav from '../Nav/TopNav';

function List() {
  function show(){
    return (
      <Detail/>
    )
  }
  return (
    <>
      <div className="Topnav">
        <TopNav/>
      </div>

      <main>
        <dl>
          <dt id="coldBrew">
            <h1>콜드 브루 커피</h1>
            <img
              className="decafImg"
              src="images/logo_decaf.png"
              alt="디카페인 로고"
            />
            <span className="decafInfo">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </dt>

          <dd>
            <ul id="productColdbrew">
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew1.jpg"
                      alt="콜드브루1"
                    />
                  </dt>
                  <dd>나이트로 바닐라 크림</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew2.jpg"
                      alt="콜드브루2"
                    />
                  </dt>
                  <dd>나이트로 콜드 브루</dd>
                </dl>
              </li>
              <Link to='/Detail'>
              <li className="menuData">
                <dl onClick={()=>{show()}}>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew3.jpg"
                      alt="콜드브루3"
                    />
                  </dt>
                  <dd>돌체 콜드 브루</dd>
                </dl>
              </li>
              </Link>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew4.jpg"
                      alt="콜드브루4"
                    />
                  </dt>
                  <dd>바닐라 크림 콜드 브루</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew5.jpg"
                      alt="콜드브루5"
                    />
                  </dt>
                  <dd>벨벳 다크 모카 나이트로</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew6.jpg"
                      alt="콜드브루6"
                    />
                  </dt>
                  <dd>시그니처 더 블랙 콜드 브루</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew7.jpg"
                      alt="콜드브루7"
                    />
                  </dt>
                  <dd>제주 비자림 콜드 브루</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew8.jpg"
                      alt="콜드브루8"
                    />
                  </dt>
                  <dd>콜드 브루</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew9.jpg"
                      alt="콜드브루9"
                    />
                  </dt>
                  <dd>콜드 브루 몰트</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew10.jpg"
                      alt="콜드브루10"
                    />
                  </dt>
                  <dd>콜드 브루 오트 라떼</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew11.jpg"
                      alt="콜드브루11"
                    />
                  </dt>
                  <dd>콜드 브루 플로트</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/coldbrew/coldbrew12.jpg"
                      alt="콜드브루12"
                    />
                  </dt>
                  <dd>프렌치 애플 타르트 나이트로</dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>

        <dl>
          <dt id="brewed">
            <h1>브루드 커피</h1>
            <img
              className="decafImg"
              src="images/logo_decaf.png"
              alt="디카페인 로고"
            />
            <span className="decafInfo">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </dt>

          <dd>
            <ul id="productBrewed">
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/brewed/brewed1.jpg"
                      alt="브루드커피1"
                    />
                  </dt>
                  <dd>아이스 커피</dd>
                </dl>
              </li>
              <li className="menuData">
                <dl>
                  <dt className="imgDt">
                    <img
                      src="images/brewed/brewed2.jpg"
                      alt="브루드커피2"
                    />
                  </dt>
                  <dd>오늘의 커피</dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
      </main>
    </>
  );
}

export default List;
