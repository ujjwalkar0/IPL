import React from 'react';
import '../App.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;


function MyHeader(){
    return (
    <div className="App">
    <Header className="header fixed-top">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{float:'right',fontWeight:"bold"}}>
      <Menu.Item key="1"><a href="#home">Home</a></Menu.Item>
      <Menu.Item key="2"><a href="#about">About</a></Menu.Item>
      <Menu.Item key="3"><a href="#schedule">Schedule</a></Menu.Item>
      <Menu.Item key="4"><a href="#points">Points</a></Menu.Item>
      <Menu.Item key="5"><a href="#news">News</a></Menu.Item>
      </Menu>
    </Header>
    </div>
    );
}

export default MyHeader;