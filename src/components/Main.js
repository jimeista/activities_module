import React, { useEffect, useState } from 'react'
import oboe from 'oboe'
import 'chartjs-plugin-piechart-outlabels'

import Filters from './Filters'
import Header from './Header'
import Bar from './Bar'
import Doughnut from './Doughnut'
import Table from './Table'

import './Main.css'
import 'antd/dist/antd.css'

const Main = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let url = '/sc-children-activities/api/activities'

    oboe(url).done((data_) => {
      setData((state) => [...state, data_])
    })
  }, [])

  return (
    <div className='ChildSection_main'>
      <div className='ChildSection_wrapper'>
        <div className='ChildSection_title_wrap'>
          <span className='ChildSection_title'>Кружки и секции</span>
        </div>
        <Filters />
        <Header data={data} />

        <div className='ChildSection_block'>
          <div className='ChildSection_RoundCHartBlock_wrap'>
            <Bar data={data} />
            <Doughnut data={data} />
            <div className='ChildSection_RoundCHartBlock table_style'>
              <Table data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Main)
