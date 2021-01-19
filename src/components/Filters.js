import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'antd'
import oboe from 'oboe'

import DropdownCheckboxWrapper from '../common/Filters/DropdownCheckboxWrapper'

const Filters = () => {
  const [list, setList] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    let url = '/sc-children-activities/api/activities'

    oboe(url).node('owner-organisation', (name) => {
      setData((state) => (state.includes(name) ? state : [...state, name]))
    })
  }, [])

  const districts_ = useMemo(() => {
    return (
      <div className='ChildSection_filter_item'>
        <DropdownCheckboxWrapper
          title={'Районы'}
          checkbox={districts}
          setList={setList}
          height={270}
        />
      </div>
    )
  }, [])

  const organisations_ = useMemo(() => {
    return (
      <div className='ChildSection_filter_item'>
        <DropdownCheckboxWrapper
          title={'Организация'}
          checkbox={data.map((name) => ({
            name,
            disabled: false,
          }))}
          setList={setList}
          isSearch={true}
        />
      </div>
    )
  }, [data])

  const payment_ = useMemo(() => {
    return (
      <div className='ChildSection_filter_item'>
        <DropdownCheckboxWrapper
          title={'Тип оплаты'}
          checkbox={payment}
          setList={setList}
          height={120}
        />
      </div>
    )
  }, [])

  const financing_ = useMemo(() => {
    return (
      <div className='ChildSection_filter_item'>
        <DropdownCheckboxWrapper
          title={'Финансирование'}
          checkbox={payment}
          setList={setList}
          height={90}
        />
      </div>
    )
  }, [])

  return (
    <div className='ChildSection_filter'>
      <div className='ChildSection_filter_filter'>
        {districts_}
        {organisations_}
        {payment_}
        {financing_}
        <div className='ChildSection_filter_item'>
          <Button id='reset' hidden={!Object.values(list).length > 0}>
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Filters)

// дефолтные опции дропдауна
let districts = [
  { name: 'Алатауский район', disabled: false },
  { name: 'Алмалинский район', disabled: false },
  { name: 'Ауэзовский район', disabled: false },
  { name: 'Бостандыкский район', disabled: false },
  { name: 'Жетысуский район', disabled: false },
  { name: 'Медеуский район', disabled: false },
  { name: 'Наурызбайский район', disabled: false },
  { name: 'Турксибский район', disabled: false },
]

const payment = [
  { name: 'Бесплатные', disabled: false },
  { name: 'Частично бесплатные', disabled: false },
  { name: 'Платные', disabled: false },
]
