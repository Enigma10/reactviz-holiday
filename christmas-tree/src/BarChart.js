import React from "react";
import * as d3 from "d3";

const TreeBar = ({ x, y, count }) => (
  <g transform={`translate(${x}, ${y})`}>
    {d3.range(count).map(i => (
      <text x={0} y={-i * 12} style={{ fontSize: "20px" }}>
        🎄
      </text>
    ))}
    <text
      x={0}
      y={-(count + 1) * 12 - 5}
      style={{ fontSize: "9px" }}
      textAnchor="center"
    >
      {count}
    </text>
  </g>
);

class Barchart extends React.Component {
  xScale = d3
    .scaleBand()
    .domain(this.props.data.map(d => d.year))
    .range([0, 800]);

  render() {
    const { data, y } = this.props;

    return (
      <g transform={`translate(0, ${y})`}>
        {data.map(d => (
          <React.Fragment>
            <TreeBar
              x={this.xScale(d.year)}
              y={480}
              count={d[this.props.value]}
            />
            <text
              x={this.xScale(d.year)}
              y={500}
              style={{ strike: "black", fontSize: "12px" }}
              textAnchor="center"
            >
              {d.year}
            </text>
          </React.Fragment>
        ))}
      </g>
    );
  }
}

export default Barchart;
