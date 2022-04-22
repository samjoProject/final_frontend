import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { useState, useRef } from 'react';
import Avatar from 'react-avatar';
import CreateBoard from "./components/board/CreateBoard";
import ListBoard from "./components/board/ListBoard";
import ReadBoard from "./components/board/ReadBoard";
import Calendar from "./components/calendar/Calendar";
import { Layout, Menu, Tabs } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from './components/SignUp/Home';
import AuthSignUp from "./components/SignUp/Auth_SignUp";
import AuthSignIn from "./components/SignUp/Auth_SignIn";
import SelectType from './components/SignUp/SelectType';
import CheckSignUpType from './components/SignUp/CheckSignUpType';
import SignUpStudent from './components/SignUp/SignUpStudent';
import SignUpTeacher from './components/SignUp/SignUpTeacher';
import SignUpManager from './components/SignUp/SignUpManager';
import CheckIns from './components/SignUp/CheckIns';
import FindIns from "./components/SignUp/FindIns";
import FindClass from './components/SignUp/FindClass';


import { UserOutlined } from "@ant-design/icons";
import S3Upload from "./components/board/S3Upload";
import ManagerPage from "./components/ManagerPage/ManagerPage";



const { TabPane } = Tabs;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const userName = localStorage.getItem("userName");


function callback(key) {

}

function Views() {

  // const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  // const fileInput = useRef(null)
  // const [File, setFile] = useState();

  // const onChange = (e) => {
  //   if(e.target.files[0]){
  //             setFile(e.target.files[0])
  //         }else{ //업로드 취소할 시
  //             setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  //             return
  //         }
  //   //화면에 프로필 사진 표시
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //             if(reader.readyState === 2){
  //                 setImage(reader.result)
  //             }
  //         }
  //         reader.readAsDataURL(e.target.files[0])
  //     }



  if (localStorage.getItem("status") != null) {
    return (
      <BrowserRouter>
        <div className="MainPage">
          <Layout >
            <Header className="header">
              <img className="logo" src="../../images/logo4.png" />

              <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/calendar">홈</Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/board">자료실</Link>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/attendance">출석부</Link>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/managerpage">관리자</Link>
                </Menu.Item>
                
              <span className="logout-btn">
                <a href="javascript:void(0);" onClick={(e)=>Logout()}>로그아웃</a>
              </span>
              </Menu>
            </Header>

            <Layout>
              <Sider width={300} className="site-layout-background">
                <Layout style={{ padding: "24px 24px 24px" }}>
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 330,
                    }}>

                    <h5 className="text-center">{userName}님</h5>
                    <div class="profile-img">
                      <img src="../../images/choon.png" alt="Avatar" class="avatar"></img>
                    </div>
                    {/* <img src="../../images/choon.png" /> */}
                    {/* <Avatar
                      src={Image}
                      style={{ margin: '20px' }}
                      size={200}
                      onClick={() => { fileInput.current.click() }} />
                    <input
                      type='file'
                      style={{ display: 'none' }}
                      // accept='image/jpg,impge/png,image/jpeg'
                      accept='jpg,png,jpeg'
                      name='profile_img'
                      onChange={onChange}
                      ref={fileInput} /> */}
                    <Content class='profile-btn'>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button className="btn btn-success" > ON </button>
                        <button className="btn btn-danger" > OFF </button>
                      </div>
                    </Content>
                  </Content>

                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 330,
                      marginTop: 30,
                    }}>
                    <h3 className="text-center">📍 To Do 📍</h3>
                    <hr></hr>
                    <label class="container">게시판기능구현
                      <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">포트폴리오제출
                      <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">리액트 복습
                      <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                  </Content>
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                      marginTop: 30,
                    }}
                  />

                  {/* <div class="container-md">100% wide until medium breakpoint</div>
              <div class="container-md">100% wide until medium breakpoint</div> */}
                </Layout>


              </Sider>

              <Layout style={{ padding: "24px 24px 24px" }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >

                  <Routes>
                    <Route path="/mainpage" element={<Calendar />}></Route>
                    <Route path="/calendar" element={<Calendar />}></Route>
                    <Route path="/board" element={<ListBoard />}></Route>
                    <Route path="/create-board/:id" element={<CreateBoard />}></Route>
                    <Route path="/read-board/:id" element={<ReadBoard />}></Route>
                    <Route path="/managerpage" element={<ManagerPage />}></Route>
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        {/*회원가입용 Route*/}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/authsignup" element={<AuthSignUp />}></Route>
          <Route path="/authsignin" element={<AuthSignIn />}></Route>

          <Route path="/checksignuptype" element={<CheckSignUpType />}></Route>

          <Route path="/selectType" element={<SelectType />}></Route>
          <Route path="/signupstudent" element={<SignUpStudent />}></Route>
          <Route path="/signupteacher" element={<SignUpTeacher />}></Route>
          <Route path="/signupmanager" element={<SignUpManager />}></Route>
          <Route path="/checkins" element={<CheckIns />}></Route>
          <Route path="/findclass" element={<FindClass />}></Route>
          <Route path="/findins" element={<FindIns />}></Route>
        </Routes>
        {/*회원가입용 Route*/}
      </BrowserRouter>
    )
  }
}

function Logout(){
  localStorage.clear();
  alert("로그아웃 되었습니다.");
  window.location.href="/home";
}

export default Views;
