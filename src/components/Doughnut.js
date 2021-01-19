import React from 'react'

import { pieOption } from '../common/Chart/ChartOption'
import { ChildSectionChart } from '../common/Chart/ChildSectionChart'

const Doughnut = ({ data }) => {
  return (
    <div className='ChildSection_RoundCHartBlock'>
      <span className='chart_title_style'>
        Категории оплат за посещение кружков
      </span>
      <div className='ChildSection_RoundCHartBlock_chart'>
        <ChildSectionChart
          typeChart={'Doughnut'}
          option={pieOption}
          dataSet={pieData(data)}
        />
      </div>
    </div>
  )
}

export default React.memo(Doughnut)

export const pieData = (data) => {
  let free = data.filter((i) => i['payment-type'] === 'бесплатные').length
  let fee = data.filter((i) => i['payment-type'] === 'платные').length
  let half = data.filter((i) => i['payment-type'] === 'частично платные').length

  return {
    labels: ['Бесплатные', 'Частично платные', 'Платные'],
    datasets: [
      {
        backgroundColor: ['#64eda6', '#00bfff', '#ffbf1e'],
        data: [free, fee, half],

        pointBorderColor: 'white',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.5)',
      },
    ],
  }
}
