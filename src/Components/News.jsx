import React from 'react';
import '../App.css';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import IPL from './image/ipl.jpg'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `News ${i}`,
    // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ipl News.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis tellus, scelerisque ut feugiat vitae, vestibulum ac augue. Fusce augue justo, condimentum sed commodo sit amet, maximus nec dui. Aenean diam velit, auctor scelerisque maximus ut, finibus in purus. Duis eleifend, magna ut accumsan tempor, nisi dui blandit purus, a mollis nunc dui eu orci.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function News(){
    return(
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={IPL}
          />
        }
      >
        <List.Item.Meta
          // avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
    )
}
export default News;