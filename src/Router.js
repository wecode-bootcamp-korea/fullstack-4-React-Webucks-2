import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 송정석's 컴포넌트
//import LoginJeongseok from './pages/jeongseoksong/Login/Login';
//import MainJeongseok from './pages/jeongseoksong/Main/Main';

// 이경원's 컴포넌트
import LoginKyungwonlee from './pages/kyungwonlee/Login/Login';
import MainKyungwonlee from './pages/kyungwonlee/Main/Main';

// 이슬아's 컴포넌트
import LoginSeula from './pages/seulaLee/Login/Login';
import ListSeula from './pages/seulaLee/List/List';
import DetailSeula from './pages/seulaLee/Detail/Detail';

// 전해윤's 컴포넌트
import LoginHaeyun from './pages/haeyunjun/Login/Login';
import MainHaeyun from './pages/haeyunjun/Main/Main';

// 최정환's 컴포넌트
import LoginJunghwan from './pages/choijunghwan/Login/Login';
import MainJunghwan from './pages/choijunghwan/Main/Main';
import DetailJunghwan from './pages/choijunghwan/Detail/Detail';

// 한서연's 컴포넌트
import LoginSeoyeon from './pages/seoyeonHan/Login/Login';
import MainSeoyeon from './pages/seoyeonHan/Main/Main';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
               {/*} <Route path='/login-jeongseok' element={<LoginJeongseok/>}/>
                <Route path='/main-jeongseok' element={<MainJeongseok/>}/>
    */}
                <Route path='/login-kyungwon' element={<LoginKyungwonlee/>}/>
                <Route path='/main-kyungwon' element={<MainKyungwonlee/>}/>

                <Route path='/login-seula' element={<LoginSeula/>}/>
                <Route path='/coffee' element={<ListSeula/>}/>
                <Route path='/detail-seula' element={<DetailSeula/>}/>

                <Route path='/login-haeyun' element={<LoginHaeyun/>}/>
                <Route path='/main-haeyun' element={<MainHaeyun/>}/>

                <Route path='/login-junghwan' element={<LoginJunghwan/>}/>
                <Route path='/main-junghwan' element={<MainJunghwan/>}/>
                <Route path='/detail-junghwan' element={<DetailJunghwan/>}/>

                <Route path='/login-seoyeon' element={<LoginSeoyeon/>}/>
                <Route path='/main-seoyeon' element={<MainSeoyeon/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;