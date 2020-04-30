import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { generateDrinkStats } from "@nivo/generators";

const data = generateDrinkStats(10);

const customBottomTick = tick => {

  return (
      <g transform={`translate(${tick.x},${tick.y + 22})`}>
          <text
              textAnchor="middle"
              dominantBaseline="middle"
              transform="upppercase"
              style={{
                fontSize: 11,
                fill: '#79828b',
                textTransform :"initial"
              }}
          >
              {tick.value}
          </text>
      </g>
  )
}

const customLeftTick = tick => {

  return (
      <g transform={`translate(${tick.x - 22},${tick.y})`}>
          <text
              textAnchor="middle"
              dominantBaseline="middle"
              transform="upppercase"
              style={{
                fontSize: 11,
                fill: '#79828b',
                textTransform :"initial"
              }}
          >
             $ {tick.value}
          </text>
      </g>
  )
}


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

    gridYValues={[100, 150, 200, 250]}


    axisTop={null}
    axisRight={null}
    axisBottom={{
      renderTick:customBottomTick
,
      tickSize: 0,
      tickPadding: 15,
      tickRotation: 0,
    }}
    axisLeft={{
      renderTick : customLeftTick,
      tickValues: [10, 20, 30, 40, 50],
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
