import React from 'react';
import '../App.css';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import News from './News'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function MySider() {
  return (
    <div className="App">

    <Content style={{ padding: '0 50px' }}>

<Layout className="site-layout-background" style={{ padding: '24px 0' }}>

  <Sider className="site-layout-background" width={200}>
  <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Choose Day">
              <Menu.Item key="1">Day 1</Menu.Item>
              <Menu.Item key="2">Day 2</Menu.Item>
              <Menu.Item key="3">Day 3</Menu.Item>
              <Menu.Item key="4">Day 4</Menu.Item>
              <Menu.Item key="5">Day 5</Menu.Item>
              <Menu.Item key="6">Day 6</Menu.Item>
              <Menu.Item key="7">Day 7</Menu.Item>
              <Menu.Item key="8">Day 8</Menu.Item>
              <Menu.Item key="9">Day 9</Menu.Item>
            </SubMenu>
          </Menu>
      </Sider>
  <Content style={{ padding: '0 24px', minHeight: 280 }}>
      
      <News />
  </Content>
</Layout>
</Content>

    </div>
  );
}

export default MySider;
