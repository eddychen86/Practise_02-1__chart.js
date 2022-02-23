var canvas = document.getElementById('myChart1');
var ctx = canvas.getContext('2d');
// 建立第一個圖案
// if (canvas.getContext) {
//   var ctx = canvas.getContext('2d');

//   // fillStyle：填色
//   ctx.fillStyle = 'rgb(200,0,0)';
//   // fillRect：定義形狀
//   ctx.fillRect(10, 10, 55, 50);

//   ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//   ctx.fillRect(30, 30, 55, 50);
// }

// // 建立圖表
var canvas = document.getElementById('myChart2');
const myChart1 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    // 讓圖表調整成你設定的高度
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// // label 會對應 data 的值
var canvas = document.getElementById('myChart3');
// const myChart2 = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     datasets: [
//       {
//         data: [20, 10, 15],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(2, 66, 132, 0.2)',
//           'rgba(194, 200, 132, 0.2)'
//         ],
//       },
//     ],
//     labels: ['a', 'b', 'c'],
//   }
// });

// // 物件格式綁定資料 line
// const myChart3 = new Chart(ctx, {
//   type: 'line',
//   data: {
//     datasets: [{
//       data: [
//         {x:'2016-12-25', y:20}, 
//         {x:'2016-12-26', y:10},
//         {x:'2017-01-30', y:14}
//       ],
//       backgroundColor: [
//         'rgba(2, 66, 132, 0.2)'
//       ]
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         // 從真正的 0 開始
//         beginAtZero: true
//       }
//     }
//   }
// });

//   // 物件格式綁定資料 bar
// const myChart4 = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     datasets: [{
//       data: [
//         {x:'Sales', y:20},
//         {x:'Revenue', y:10}
//       ]
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     layout: {
//       padding: {
//         left: 20,
//         right: 40
//       },
//     },
//     plugins: {
//       legend: {
//         labels: {
//           font: {
//               size: 30
//           }
//         }
//       }
//     }
//   }
// });

// const myChart5 = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     datasets: [{
//       data: [
//         {id: 'Sales', nested: {value: 1500}}, 
//         {id: 'Purchases', nested: {value: 500}}
//       ]
//     }]
//   },
//   options: {
//     parsing: {
//       xAxisKey: 'id',
//       yAxisKey: 'nested.value'
//     }
//   }
// });

// const myChart6 = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     datasets: [{
//       data: [
//         {id: 'Sales', nested: {value: 1500}}, 
//         {id: 'Purchases', nested: {value: 500}},
//         {id: 'Sales', nested: {value:300}}
//       ],
//       backgroundColor: [
//         'rgba(255, 66, 32)',
//         'rgba(1, 46, 102)',
//         'rgba(33, 222, 32, 0.5)'
//       ]
//     }]
//   },
//   options: {
//     parsing: {
//       key: 'nested.value'
//     }
//   }
// });

// const labels = ["Jan","Feb", "Mar", "Apr", "May", "Jun"];
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };
// const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     // 改變方向
//     indexAxis: 'y',
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// };
// const myChart7 = new Chart(ctx, config)

const labels = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'];
const data = {
  labels: labels,
  datasets: [{
    label: 'First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
    ]
    },{
    label: 'Second Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(99, 200, 132, 0.5)',
    ]
  }]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    maintainAspectRatio: false,  
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
}
const myChart8 = new Chart(ctx, config)