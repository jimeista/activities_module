import React, { useMemo } from 'react'
import { Table } from 'antd'

const CustomTable = ({ data }) => {
  const dataSource = useMemo(() => {
    return data.map((i, key) => ({
      key,
      region: i.region,
      'owner-organisation': i['owner-organisation'],
      type: i.type,
      'payment-source': i['payment-source'],
      'payment-type': i['payment-type'],
      'supervisor-name': i['supervisor-name'],
      'per-month-state-payment': i['per-month-state-payment'],
      name: i.name,
    }))
  }, [data])

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={!data.length > 0}
    />
  )
}

export default React.memo(CustomTable)

const columns = [
  {
    title: 'Район',
    dataIndex: 'region',
    sorter: (a, b) => b.district - a.district,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Наименование организации',
    dataIndex: 'owner-organisation',
    sorter: (a, b) => b['owner-organisation'] - a['owner-organisation'],
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Вид кружков\\секции',
    dataIndex: 'name',
    sorter: (a, b) => b.name - a.name,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Источник финансирования',
    dataIndex: 'payment-source',
    align: 'center',
    sorter: (a, b) => b['payment-source'] - a['payment-source'],
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Способ оплаты ',
    dataIndex: 'payment-type',
    sorter: (a, b) => b['payment-type'] - a['payment-type'],
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Размер оплаты за ребенка (с бюджета) в месяц ',
    dataIndex: ['per-month-state-payment'],
    sorter: (a, b) =>
      b['per-month-state-payment'] - a['per-month-state-payment'],
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'ФИО руководителя',
    dataIndex: ['supervisor-name'],
    sorter: (a, b) => b['supervisor-name'] - a['supervisor-name'],
    sortDirections: ['descend', 'ascend'],
  },
]
