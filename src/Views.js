import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CreateBoard from "./components/board/CreateBoard";
import ListBoard from "./components/board/ListBoard";
import Calendar from "./components/calendar/Calendar";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

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
                <Routes>
                  <Route path="/" element={<Calendar />}></Route>
                  <Route path="/board" element={<ListBoard />}></Route>
                  <Route path="/create-board" element={<CreateBoard />}></Route>
                  <Route path="/mainpage" element={<Calendar />}></Route>
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
