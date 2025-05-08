import { Alert, Avatar, List } from "antd";
import React from "react";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 5",
  },
  {
    title: "Ant Design Title 6",
  },
];

const HomeList: React.FC = () => (
  <div className="">
    <Alert message="Lỗi phát sinh gần đây" type="warning" showIcon></Alert>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </div>
);

export default HomeList;
