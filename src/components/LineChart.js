import React from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  generateSeries,
  generateSerie,
  generateStackData,
  generateDayCounts,
  generateDrinkStats,
} from "@nivo/generators";

const data = generateDrinkStats(10);

console.log(data);

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = () => (
  <ResponsiveLine
    data={data.filter((d) => ["rhum"].includes(d.id))}
    axisTop={null}
    axisRight={null}
    margin={{ top: 10, right: 10, bottom: 20, left: 25 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 0,
      tickRotation: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 10,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    useMesh={true}
    lineWidth={3}
    curve="linear"
    colors={["#6271d2"]}
    
    enableGridX={false}
    enableGridY={false}

    pointSize={4}
    pointColor="white"
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}

    enableCrosshair={false}

    motionStiffness={200}
    motionDamping={20}
  />
);

export default LineChart;
