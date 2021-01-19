import React from 'react'
import { Table } from 'antd'

const ChildSectionTable = ({ sectionTable }) => {
  const columns = [
    {
      /**/
      title: 'Район',
      dataIndex: 'district',
      sorter: (a, b) => b.district - a.district,
      sortDirections: ['descend', 'ascend'],
    },
    {
      /**/
      title: 'Наименование организации',
      dataIndex: 'name',
      sorter: (a, b) => b.name - a.name,
      sortDirections: ['descend', 'ascend'],
    },
    {
      /**/
      title: 'Вид кружков\\секции',
      dataIndex: 'typeSection',
      sorter: (a, b) => b.typeSection - a.typeSection,
      sortDirections: ['descend', 'ascend'],
    },
    {
      /**/
      title: 'Источник финансирования',
      dataIndex: 'finance',
      align: 'center',
      sorter: (a, b) => b.finance - a.finance,
      sortDirections: ['descend', 'ascend'],
    },
    {
      /**/
      title: 'Способ оплаты ',
      dataIndex: 'payment',
      sorter: (a, b) => b.payment - a.payment,
      sortDirections: ['descend', 'ascend'],
    },
    {
      /**/
      title: 'Размер оплаты за ребенка (с бюджета) в месяц ',
      dataIndex: 'paymentBudget',
      sorter: (a, b) => b.paymentBudget - a.paymentBudget,
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'ФИО руководителя',
      dataIndex: 'fio',
      sorter: (a, b) => b.fio - a.fio,
      sortDirections: ['descend', 'ascend'],
    },
  ]

  return <Table columns={columns} dataSource={sectionTable} />
}

export default ChildSectionTable
