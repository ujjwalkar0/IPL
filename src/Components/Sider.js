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

<Layout className="site-layout-background hide-mobile" style={{ padding: '24px 0' }}>
  <Content style={{ padding: '0 24px', minHeight: 280}}>
      
      <News />
  </Content>
</Layout>
</Content>

    </div>
  );
}

export default MySider;
