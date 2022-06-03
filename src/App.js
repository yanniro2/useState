import React from "react";
import Box from "./Box";
import BoxData from "./Data/boxData";
export default function App() {
  const [getData, setData] = React.useState(BoxData);

  function toggle(id) {
    setData((prevData) => {
      return prevData.map((datas) => {
        return id === datas.id ? { ...datas, on: !datas.on } : datas;
      });
    });
  }

  const printBox = getData.map((data) => {
    return (
      <Box
        key={data.id}
        id={data.id}
        on={data.on}
        toggle={() => toggle(data.id)}
      />
    );
  });
  return <div className="App">{printBox}</div>;
}
