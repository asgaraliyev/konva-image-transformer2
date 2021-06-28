import { useState } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function Index() {
  function callback(key) {}

  const [tabs, setTabs] = useState([
    {
      name: "Photo Name",
      type: "photo",
      component: function () {
        return <h3>Photo propoties</h3>;
      }
    }
  ]);
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      {/* <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane> */}
      {tabs.map((tab, i) => {
        const Component = tab.component;
        Component.bind(this);
        return (
          <TabPane tab={tab.name} key={i}>
            <Component />
          </TabPane>
        );
      })}
      <TabPane tab="ADD" key="plus"></TabPane>
    </Tabs>
  );
}
