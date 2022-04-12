import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CreateBoard from "./components/board/CreateBoard";
import ListBoard from "./components/board/ListBoard";
import ReadBoard from "./components/board/ReadBoard";
import Calendar from "./components/calendar/Calendar";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import S3Upload from "./components/board/S3Upload";

import Home from './components/SignUp/Home';
import AuthSignUp from "./components/SignUp/Auth_SignUp";
import AuthSignIn from "./components/SignUp/Auth_SignIn";
import SelectType from './components/SignUp/SelectType';
import CheckSignUpType from './components/SignUp/CheckSignUpType';
import SignUpStudent from './components/SignUp/SignUpStudent';
import SignUpTeacher from './components/SignUp/SignUpTeacher';
import CheckIns from './components/SignUp/CheckIns';
import SignUpManager from './components/SignUp/SignUpManager';
import FindClass from './components/SignUp/FindClass';
import FindIns from "./components/SignUp/FindIns";
import CheckSignInType from "./components/SignUp/CheckSignInType";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Views() {
  return (
    
    <BrowserRouter>
      <div className="MainPage">
        <Layout>
          <Header className="header">
            <div className="logo" />

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <Link to="/">홈</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/board">자료실</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/attendance">출석부</Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/managerPage">관리자</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu>
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
                {/* <ul> 
                  <li> 
                    <Link to="/create-board/:id">홈</Link>
                     </li> 
                     {/* <li> 
                       <Link to="/about">소개</Link> 
                       </li>  */}
                       {/* </ul>  */}


                <Routes>
                  <Route path="/" element={<Calendar />}></Route>
                  <Route path="/mainpage" element={<Calendar />}></Route>
                  <Route path="/board" element={<ListBoard />}></Route>
                  <Route path = "/create-board/:id" element = {<CreateBoard />}></Route>
                  <Route path = "/read-board/:id" element = {<ReadBoard />}></Route>

                  <Route path="/home" element={<Home />}></Route>

                  <Route path="/authsignup" element={<AuthSignUp />}></Route>
                  <Route path="/authsignin" element={<AuthSignIn />}></Route>

                  <Route path="/checksignuptype" element={<CheckSignUpType />}></Route>
                  <Route path="/checksignintype" element={<CheckSignInType />}></Route>

                  <Route path="/selectType" element={<SelectType />}></Route>
                  <Route path="/signupstudent" element={<SignUpStudent />}></Route>
                  <Route path="/signupteacher" element={<SignUpTeacher />}></Route>
                  <Route path="/signupmanager" element={<SignUpManager/>}></Route>
                  <Route path="/checkins" element={<CheckIns />}></Route>
                  <Route path="/findclass" element={<FindClass />}></Route>
                  <Route path="/findins" element={<FindIns />}></Route>
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
    
  );
}

export default Views;
