import React from 'react'

import { barOption } from '../common/Chart/ChartOption'
import { ChildSectionChart } from '../common/Chart/ChildSectionChart'

const Bar = ({ data }) => {
  return (
    <div className='ChildSection_RoundCHartBlock'>
      <span className='chart_title_style'>Колличество кружков по районам</span>
      <div className='ChildSection_RoundCHartBlock_chart'>
        <ChildSectionChart
          typeChart={'Bar'}
          option={barOption}
          dataSet={barData(data)}
        />
      </div>
    </div>
  )
}

export default React.memo(Bar)

const barData = (data) => {
  const getCount = (name) => data.filter((i) => i.region === name).length

  let data_ = labels.map((name) => getCount(name))

  return {
    labels: labels,
    datasets: [
      {
        label: 'Детских кружков',
        backgroundColor: colorScheme,
        data: data_,
        borderWidth: 0,
        minBarLength: 5,
      },
    ],
  }
}

const labels = [
  'Алатауский район',
  'Алмалинский район',
  'Ауэзовский район',
  'Бостандыкский район',
  'Жетысуский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
]

const colorScheme = [
  '#E0FFFF',
  '#AFEEEE',
  '#7FFFD4',
  '#40E0D0',
  '#48D1CC',
  '#00CED1',
  '#5F9EA0',
  '#4682B4',
  '#B0C4DE',
  '#B0E0E6',
  '#ADD8E6',
  '#87CEEB',
  '#87CEFA',
  '#00BFFF',
  '#1E90FF',
  '#6495ED',
  '#4169E1',
  '#00FFFF',
  '#5F9EA0',
  '#4682B4',
  '#87CEEB',
  '#48D1CC',
  '#00CED1',
  '#5F9EA0',
  '#4682B4',
]
