import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CreateBoard from "./components/board/CreateBoard";
import ListBoard from "./components/board/ListBoard";
import ReadBoard from "./components/board/ReadBoard";
import Calendar from "./components/calendar/Calendar";
import { Layout, Menu, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import S3Upload from "./components/board/S3Upload";
import "./App.css";



const { TabPane } = Tabs;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function callback(key) {
  
}

function Views() {
  
  return (
    
    <BrowserRouter>
      <div className="MainPage">
        <Layout >
          <Header className="header">
            <img className="logo" src = "../../images/logo.png" />

            <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
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
                <Link to="/managerPage">관리자</Link>
              </Menu.Item>
            </Menu>
{/* 
<Tabs onChange={callback} type="card" mode="horizontal" defaultSelectedKeys={["1"]}>
    <TabPane tab="홈" key="1" >
    <Link to="/calendar"/>
    </TabPane>
    <TabPane tab="자료실" key="2">
    <Link to="/board"/>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  mountNode, */}

          </Header>

          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0, backgroundColor: "black"}}
              >
                {/* <InfoContainer/> */}
                <h1> 컨테이너 들어갈 자리 </h1>
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
                
                <Routes>
                <Route path="/" element={<Calendar />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                  <Route path="/board" element={<ListBoard />}></Route>
                  <Route path = "/create-board/:id" element = {<CreateBoard />}></Route>
                  <Route path = "/read-board/:id" element = {<ReadBoard />}></Route>


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
