import { compactInteger } from '../../utils/FormaterNum'
import 'chartjs-plugin-datalabels'

export const barOption = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0,
    },
  },
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      fontSize: 14,
      boxWidth: 40,
      boxHeight: 2,
      fontColor: 'rgba(255,255,255,1)',
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          display: true,
          beginAtZero: true,
          fontColor: 'white',
        },
      },
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          display: true,
          beginAtZero: true,
          fontColor: 'white',
          callback: function (label, index, labels) {
            return compactInteger(label)
          },
        },
      },
    ],
  },
  plugins: {
    datalabels: {
      formatter: function (value, ctx) {
        return compactInteger(value)
        /*return 'Всего:' + value + ' \nДетей:' + cvvt_b[ctx.dataIndex];*/
      },
      backgroundColor: 'rgba(0,0,0,0.26)',
      align: 'end',
      anchor: 'end',
      /*  rotation: -90,*/
      clamp: true,
      borderColor: 'rgb(255,255,255)',
      borderRadius: 2,
      borderWidth: 1,
      color: 'rgb(255,255,255)',
      padding: 2,
      font: function (context) {
        let w = context.chart.width
        let custom_size = [
          [810, 12],
          [710, 10],
          [550, 5],
          [500, 5],
        ]
        let default_size = 14
        for (let i = 0; i < custom_size.length; i++) {
          if (w < custom_size[i][0]) {
            default_size = custom_size[i][1]
          }
        }
        return {
          size: default_size,
        }
      },
    },
  },
}

export const pieOption = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 90,
      right: 90,
      top: 0,
      bottom: 20,
    },
  },
  legend: {
    onClick: (e) => e.stopPropagation(),
    display: true,
    position: 'top',
    /*  align: 'start',*/
    labels: {
      fontSize: 14,
      boxWidth: 20,
      boxHeight: 2,
      /*     borderRadius: "50%",*/
      fontColor: 'rgba(255,255,255,1)',

      usePointStyle: true,
    },
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          drawOnChartArea: false,
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: false,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          drawOnChartArea: false,
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: false,
        },
      },
    ],
  },
  plugins: {
    outlabels: {
      text: function (value, context) {
        // eslint-disable-next-line no-useless-concat
        return (
          '  ' +
          compactInteger(value.dataset.data[value.dataIndex]) +
          ' (' +
          ' %p' +
          ') '
        )
      },
      color: 'white',
      /* stretch: 45,*/
      backgroundColor: null,
      lineColor: 'white',
      lineWidth: 1,
      stretch: 10,
      padding: {
        bottom: 0,
      },
      font: {
        resizable: true,
        minSize: 12,
        maxSize: 18,
      },
    },
    datalabels: {
      display: false,
    },
  },
}
