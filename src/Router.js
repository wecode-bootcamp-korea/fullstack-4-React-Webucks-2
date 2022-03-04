import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//송정석's 컴포넌트
import LoginJeongseok from "./pages/jeongseoksong/Login/Login";
import MainJeongseok from "./pages/jeongseoksong/Main/Main";

// 이경원's 컴포넌트
import LoginKyungwonlee from "./pages/kyungwonlee/Login/Login";
import MainKyungwonlee from "./pages/kyungwonlee/Main/Main";
import DetailKyungwonlee from "./pages/kyungwonlee/Detail/Detail";

// 이슬아's 컴포넌트

import LoginSeula from './pages/seulaLee/Login/Login';
import ListSeula from './pages/seulaLee/List/List';
import DetailSeula from './pages/seulaLee/Detail/Detail';

// 전해윤's 컴포넌트
import LoginHaeyun from './pages/haeyunjun/Login/Login';
import ListHaeyun from './pages/haeyunjun/List/List';
import DetailHaeyun from './pages/haeyunjun/Detail/Detail';


// 최정환's 컴포넌트
import LoginJunghwan from "./pages/choijunghwan/Login/Login";
import MainJunghwan from "./pages/choijunghwan/Main/Main";

// 한서연's 컴포넌트
import LoginSeoyeon from './pages/seoyeonHan/Login/Login';
import ListSeoyeon from './pages/seoyeonHan/List/List';
import DetailSeoyeon from './pages/seoyeonHan/Detail/Detail';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jeongseok" element={<LoginJeongseok />} />
        <Route path="/main-jeongseok" element={<MainJeongseok />} />

        <Route path="/login-kyungwon" element={<LoginKyungwonlee />} />
        <Route path="/main-kyungwon" element={<MainKyungwonlee />} />
        <Route path="/detail-kyungwon" element={<DetailKyungwonlee />} />

        <Route path='/login-seula' element={<LoginSeula/>}/>
        <Route path='/coffee' element={<ListSeula/>}/>
        <Route path='/detail-seula' element={<DetailSeula/>}/>

        <Route path='/login-haeyun' element={<LoginHaeyun/>}/>
        <Route path='/list-haeyun' element={<ListHaeyun/>}/>
        <Route path='/detail-haeyun' element={<DetailHaeyun/>}/>

        <Route path="/login-junghwan" element={<LoginJunghwan />} />
        <Route path="/main-junghwan" element={<MainJunghwan />} />

        <Route path='/login-seoyeon' element={<LoginSeoyeon/>}/>
        <Route path='/List-seoyeon' element={<ListSeoyeon/>}/>
        <Route path='/Detail-seoyeon' element={<DetailSeoyeon/>}/>
      </Routes>
    </BrowserRouter>
    );

}

export default Router;
