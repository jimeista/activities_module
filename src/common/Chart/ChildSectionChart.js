import React from 'react'
import { Line, Bar, Doughnut, Pie, Chart, HorizontalBar } from 'react-chartjs-3'

export const ChildSectionChart = ({
  option,
  dataSet,
  typeChart,
  isActiveMap,
  isActiveChart,
}) => {
  switch (typeChart) {
    case 'Line':
      return (
        <Line
          data={dataSet}
          options={option}
          redraw={isActiveMap || isActiveChart}
        />
      )
    case 'Bar':
      return (
        <Bar
          data={dataSet}
          options={option}
          redraw={isActiveMap || isActiveChart}
        />
      )
    case 'Doughnut':
      return (
        <Doughnut
          data={dataSet}
          options={option}
          redraw={isActiveMap || isActiveChart}
        />
      )
    case 'Pie':
      return (
        <Pie
          data={dataSet}
          options={option}
          redraw={isActiveMap || isActiveChart}
        />
      )
    case 'Chart':
      return (
        <Chart
          data={dataSet}
          options={option}
          redraw={isActiveMap || isActiveChart}
        />
      )
    case 'HorizontalBar':
      return (
        <HorizontalBar
          data={dataSet}
          options={option}
          redraw={isActiveMap || isActiveChart}
        />
      )
    // eslint-disable-next-line no-unused-expressions
    default:
      return <></>
  }
}
