import React from "react";
import DataSet from "@antv/data-set";
import { Chart, Area, Tooltip } from "bizcharts";

const BizDemoPercent: React.FC = () => {
  const data = [
    { country: "Asia", year: "1750", value: 502 },
    { country: "Asia", year: "1800", value: 635 },
    { country: "Asia", year: "1850", value: 809 },
    { country: "Asia", year: "1900", value: 5268 },
    { country: "Asia", year: "1950", value: 4400 },
    { country: "Asia", year: "1999", value: 3634 },
    { country: "Asia", year: "2050", value: 947 },
    { country: "Africa", year: "1750", value: 106 },
    { country: "Africa", year: "1800", value: 107 },
    { country: "Africa", year: "1850", value: 111 },
    { country: "Africa", year: "1900", value: 1766 },
    { country: "Africa", year: "1950", value: 221 },
    { country: "Africa", year: "1999", value: 767 },
    { country: "Africa", year: "2050", value: 133 },
    { country: "Europe", year: "1750", value: 163 },
    { country: "Europe", year: "1800", value: 203 },
    { country: "Europe", year: "1850", value: 276 },
    { country: "Europe", year: "1900", value: 628 },
    { country: "Europe", year: "1950", value: 547 },
    { country: "Europe", year: "1999", value: 729 },
    { country: "Europe", year: "2050", value: 408 },
    { country: "Oceania", year: "1750", value: 200 },
    { country: "Oceania", year: "1800", value: 200 },
    { country: "Oceania", year: "1850", value: 200 },
    { country: "Oceania", year: "1900", value: 460 },
    { country: "Oceania", year: "1950", value: 230 },
    { country: "Oceania", year: "1999", value: 300 },
    { country: "Oceania", year: "2050", value: 300 },
  ];

  // 计算百分比
  const dv = new DataSet.DataView().source(data);
  dv.transform({
    type: "percent",
    field: "value",
    dimension: "country",
    groupBy: ["year"],
    as: "percent",
  });

  const scale = {
    percent: {
      formatter: (value: number) => {
        value = +value || 0;
        value = +value * 100;
        return `${value.toFixed(2)}%`;
      },
      alias: "percent(%)",
    },
    year: {
      type: "linear",
      tickInterval: 50,
    },
  };

  return (
    <div
      style={{
        width: 800,
        height: 400,
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 30,
      }}
    >
      <Chart scale={scale} data={dv.rows} autoFit>
        <Tooltip shared />
        <Area adjust="stack" color="country" position="year*percent" />
        {/* <Line adjust="stack" color="country" position="year*percent" /> */}
      </Chart>
    </div>
  );
};

export default BizDemoPercent;
