import React from "react";
// app css import
import "./assets/css/app.css";

import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/common/NotFound";
import DeptList from "./pages/basic/dept/deptList";
import EmpList from "./pages/basic/emp/empList";
import AddEmp from "./pages/basic/emp/AddEmp";
import AddDept from "./pages/basic/dept/AddDept";
import Dept from "./pages/basic/dept/Dept";
import Emp from "./pages/basic/emp/Emp";
import QnaList from "./pages/basic/qna/QnaList";
import CustomerList from "./pages/basic/customer/CustomerList";
import AddQna from "./pages/basic/qna/AddQna";
import AddCustomer from "./pages/basic/customer/AddCustomer";
import Qna from "./pages/basic/qna/Qna";
import Customer from "./pages/basic/customer/Customer";
import FaqList from "./pages/normal/faq/FaqList";
import CinemaFaqList from "./pages/normal/cinema/CinemaFaqList";
import AddFaq from "./pages/normal/faq/AddFaq";
import AddCinemaFaq from "./pages/normal/cinema/AddCinemaFaq";
import Faq from "./pages/normal/faq/Faq";
import CinemaFaq from "./pages/normal/cinema/CinemaFaq";
import ReplyBoardList from "./pages/normal/replyBoard/ReplyBoardList";
import ThreadBoardList from "./pages/normal/threadBoard/ThreadBoardList";
import AddReplyBoard from "./pages/normal/replyBoard/AddReplyBoard";
import AddThreadBoard from "./pages/normal/threadBoard/AddThreadBoard";
import ReplyBoard from "./pages/normal/replyBoard/ReplyBoard";


function App() {
  return (
    <div className="App">
      <HeaderCom />

      {/* <!-- 구분 막대 시작 --> */}
      <div className="gutter text-center text-muted fade-in-box">
        <div>클론 코딩 예제 사이트에 오신 것을 환영합니다.</div>
      </div>
      {/* <!-- 구분 막대 끝 --> */}

      <div id="content-wrapper">
        {/* 라우터 정의 시작 */}
        <Routes>
          {/* login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* dept */}
          <Route path="/dept" element={<DeptList/>}/>
          <Route path="/add-dept" element={<AddDept/>}/>
          <Route path="/dept/:dno" element={<Dept/>}/>

          {/* emp */}
          <Route path="/emp" element = {<EmpList/>}/>
          <Route path="/add-emp" element = {<AddEmp/>}/>
          <Route path="/emp/:eno" element={<Emp/>}/>
          
          {/* qna */}
          <Route path="/qna" element = {<QnaList/>}/>
          <Route path="/add-qna" element = {<AddQna/>}/>
          <Route path="/qna/:qno" element={<Qna/>}/>

          {/* customer */}
          {/* 연습 4) customer 전체조회 페이지를 만들고, 다양한 검색 기능을 추가하세요 
             (fullName(이름), email(이메일) : select 태그 넣기)
             프론트 :CustomerList.tsx (전체조회 페이지)
                   : ICustomer.ts (타입)
                   : CustomerService (axios CRUD 함수)
                   App.tsx (url : /customer)
             백엔드 : Customer.java(엔티티)
                   : CustomerRepository(fullName/email like 검색)
                   : CustomerService(fullName/email like 검색)
                   : CustomerController (fullName/email like 검색)
          */} 
          <Route path="/customer" element = {<CustomerList/>}/>
          <Route path="/add-customer" element = {<AddCustomer/>}/>
          <Route path="/customer/:cid" element={<Customer/>}/>

          {/* faq */}
          <Route path="/faq" element = {<FaqList/>}/>
          <Route path="/add-faq" element = {<AddFaq/>}/>
          <Route path="/faq/:no" element = {<Faq/>}/>

          {/* cinema */}
          {/* 연습5 ) cinema faq 전체조회 기능을 구현하세요. */}
          {/* 단 , 화면에 아코디언으로 보여주새요 */}
          {/* 프론트 - ICinemaFaq.ts (타입 : schema.sql) */}
           {/*         CinemaFaqService.ts (axios 공통 crud 탐수)  */}
           {/*         CinemaFaqList.tsx (전체조회)  */}
           {/*         App.tsx (메뉴 달기 : CinemaFaq  */}
           {/*벡엔드 - 모델 엔티티 : CinemaFaq
                      CinemaFaqRepository
                      CinemaFaqService
                      CinemaFaqController
           */}
           <Route path="/cinema-faq" element = {<CinemaFaqList/>}/>
           <Route path="/add-cinema-faq" element = {<AddCinemaFaq/>}/>
           <Route path="/cinema-faq/:cfno" element = {<CinemaFaq/>}/>

           {/* replyBoard */}
           <Route path="/reply-board" element = {<ReplyBoardList/>}/>
           <Route path="/add-reply-board" element = {<AddReplyBoard/>}/>
           {/* 정리 : boardParent = 0 이면 부모글을 클릭 */}
           {/* 정리 : boardParent = 0 아니면 자식글을 클릭 */}
           <Route path="/reply-board/bid/:bid/boardParent/:boardParent" element={<ReplyBoard />} />

            
          {/* 연습 1) url : / thread-board 쓰레드보드(답변형게시판)
               프론트 : ThreadBoardList (전체조회 페이지)
               계층형 기능을 추가하세요 (프론트/ 백엔드)          */}
           {/* threadBoard */}
           <Route path="/thread-board" element = {<ThreadBoardList/>}/>
           <Route path="/add-thread-board" element = {<AddThreadBoard/>}/>
           <Route path="/thread-board/tid/:tid/tparent/:tparent" element={<ReplyBoard />} />

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />

        </Routes>
        {/* 라우터 정의 끝 */}
      </div>
    </div>
  );
}

export default App;
