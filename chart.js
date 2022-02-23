// var canvas1 = document.getElementById('myChart1');
// 建立第一個圖案
// if (canvas1.getContext) {
//   var ctx = canvas1.getContext('2d');

//   // fillStyle：填色
//   ctx1.fillStyle = 'rgb(200,0,0)';
//   // fillRect：定義形狀
//   ctx1.fillRect(10, 10, 55, 50);

//   ctx1.fillStyle = 'rgba(0, 0, 200, 0.5)';
//   ctx1.fillRect(30, 30, 55, 50);
// }

// 建立圖表
var canvas2 = document.getElementById('myChart2');
var ctx2 = canvas2.getContext('2d');
const myChart2 = new Chart(ctx2, {
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

// label 會對應 data 的值
var canvas3 = document.getElementById('myChart3');
var ctx3 = canvas3.getContext('2d');
const myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    datasets: [
      {
        data: [20, 10, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(2, 66, 132, 0.2)',
          'rgba(194, 200, 132, 0.2)'
        ],
      },
    ],
    labels: ['a', 'b', 'c'],
  },
  options: {
    maintainAspectRatio: false,
  }
});

var canvas4 = document.getElementById('myChart4');
var ctx4 = canvas4.getContext('2d');
// 物件格式綁定資料 line
const myChart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    datasets: [{
      data: [
        {x:'2016-12-25', y:20}, 
        {x:'2016-12-26', y:10},
        {x:'2017-01-30', y:14}
      ],
      backgroundColor: [
        'rgba(2, 66, 132, 0.2)'
      ]
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        // 從真正的 0 開始
        beginAtZero: true
      }
    }
  }
});

var canvas5 = document.getElementById('myChart5');
var ctx5 = canvas5.getContext('2d');
  // 物件格式綁定資料 bar
const myChart5 = new Chart(ctx5, {
  type: 'bar',
  data: {
    datasets: [{
      data: [
        {x:'Sales', y:20},
        {x:'Revenue', y:10}
      ]
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    layout: {
      padding: {
        left: 20,
        right: 40
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
              size: 30
          }
        }
      }
    }
  }
});

var canvas6 = document.getElementById('myChart6');
var ctx6 = canvas6.getContext('2d');
const myChart6 = new Chart(ctx6, {
  type: 'bar',
  data: {
    datasets: [{
      data: [
        {id: 'Sales', nested: {value: 1500}}, 
        {id: 'Purchases', nested: {value: 500}}
      ]
    }]
  },
  options: {
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
  }
});

var canvas7 = document.getElementById('myChart7');
var ctx7 = canvas7.getContext('2d');
const myChart7 = new Chart(ctx7, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        {id: 'Sales', nested: {value: 1500}}, 
        {id: 'Purchases', nested: {value: 500}},
        {id: 'Sales', nested: {value:300}}
      ],
      backgroundColor: [
        'rgba(255, 66, 32)',
        'rgba(1, 46, 102)',
        'rgba(33, 222, 32, 0.5)'
      ]
    }]
  },
  options: {
    maintainAspectRatio: false,
    parsing: {
      key: 'nested.value'
    }
  }
});

var canvas8 = document.getElementById('myChart8');
var ctx8 = canvas8.getContext('2d');
const labels8 = ["Jan","Feb", "Mar", "Apr", "May", "Jun"];
const data8 = {
  labels: labels8,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
const config8 = {
  type: 'bar',
  data: data8,
  options: {
    // 改變方向
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
const myChart8 = new Chart(ctx8, config8)

var canvas9 = document.getElementById('myChart9');
var ctx9 = canvas9.getContext('2d');
const labels9 = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'];
const data9 = {
  labels: labels9,
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
const config9 = {
  type: 'bar',
  data: data9,
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
const myChart9 = new Chart(ctx9, config9)