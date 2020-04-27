import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { generateDrinkStats } from "@nivo/generators";

const data = generateDrinkStats(10);

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = () => (
  <ResponsiveLine
    data={data.filter((d) => ["rhum"].includes(d.id))}
    margin={{ top: 20, right: 10, bottom: 30, left: 40 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 0,
      tickPadding: 15,
      tickRotation: 0,
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 15,
      tickRotation: 0,
    }}


    enableSlices="x"
    sliceTooltip={({ slice }) => {
      return (
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            border: "1px solid #6271d2",
          }}
        >
          {slice.points.map((point) => (
            <div
              key={point.id}
              style={{
                color: "#42505c",
                padding: "3px 16px 3px 16px",
                fontWeight : "800"
              }}
            >
              $ {point.data.yFormatted}
            </div>
          ))}
        </div>
      );
    }}


    useMesh={true}
    lineWidth={2}
    curve="linear"
    colors={["#6271d2"]}
    enableGridX={false}
    enableGridY={false}
    pointSize={8}
    pointBorderWidth={2}
    enableCrosshair={true}
    motionStiffness={200}
    motionDamping={20}
  />
);

export default LineChart;
