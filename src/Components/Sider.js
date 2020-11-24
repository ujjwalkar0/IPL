import React from 'react';
import '../App.css';
import { Layout } from 'antd';
import News from './News'
const { Content } = Layout;

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
