import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Tabs, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { TabPane } = Tabs;
const components = {
  IMAGE({ image_url, size, id }) {
    const dispatch = useDispatch();
    return (
      <div className="flex-row space-around">
        <img
          src={image_url}
          style={{ maxHeight: "30px", maxWidth: "100px" }}
        ></img>
        <div>width:{size[0]}px</div>
        <div>height:{size[1]}px</div>
        <Button
          onClick={() => {
            dispatch({ type: "REMOVE_ITEM", id });
          }}
          danger
        >
          Remove
        </Button>
      </div>
    );
  }
};
export default function Index() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.Items);
  function callback(key) {
    if (key === "ADD") {
      dispatch({
        type: "TOGGLE_DIALOG",
        currentComponentName: "ADD",
        active: true
      });
    }
  }

  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    setTabs(items);
  }, [items]);
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      {tabs.map((tab, i) => {
        console.log(tab, "tab");
        const { item_type } = tab;
        const Component = components[`${item_type}`];
        console.log(Component, "Component");
        Component?.bind(this);
        return (
          <TabPane tab={tab.name} key={i}>
            {Component && <Component {...tab} />}
          </TabPane>
        );
      })}
      <TabPane tab="ADD" key="ADD"></TabPane>
    </Tabs>
  );
}
