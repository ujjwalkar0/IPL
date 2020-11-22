import React from 'react';
import '../App.css';
import { Layout } from 'antd';
import MyCarousel from './Carousel';
import MyHeader from './Header'
import MyAbout from './About'
import IplSchedule from './Schedule'
import Points from './pts'
import MySider from './Sider'
const { Footer } = Layout;

function SiderDemo() {
  return(
  <Layout>
<MyHeader />
<div id="home">
<MyCarousel/></div>
<div id="about">
<MyAbout /></div>
<div id="schedule">
<IplSchedule /></div>
<div id="points">
<Points /></div>
<div id="news">
<h2 className="text-center container" 
style={{
  background:'cyan',
}}>
  <b> IPL News </b></h2>

<MySider />
</div>
<Footer style={{ textAlign: 'center' }}>Designed By Ujjwal Kar, CSE Second Year</Footer>
</Layout>
  );
}
export default SiderDemo;