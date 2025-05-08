import React from "react";
import { List, Avatar } from "antd";

const data = [
  { id: 1, name: "LINE01", consumption: "323,234" },
  { id: 2, name: "LINE01", consumption: "323,234" },
  { id: 3, name: "LINE01", consumption: "323,234" },
  { id: 4, name: "LINE01", consumption: "323,234" },
  { id: 5, name: "LINE01", consumption: "323,234" },
  { id: 6, name: "LINE01", consumption: "323,234" },
  { id: 7, name: "LINE01", consumption: "323,234" },
];

const EnergyList: React.FC = () => (
  <List
    header={<div>Line máy tiêu thụ nhiều nhất</div>}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              style={{ backgroundColor: "#ff4d4f" }}
              size="small"
            >
              {item.id}
            </Avatar>
          }
          title={<span>{item.name}</span>}
        />
        <span>{item.consumption}</span>
      </List.Item>
    )}
  />
);

export default EnergyList;
