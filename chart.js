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

// Bar Chart
var canvas6 = document.getElementById('myChart6');
var ctx6 = canvas6.getContext('2d');
const myChart6 = new Chart(ctx6, {
  type: 'bar',
  data: {
    datasets: [{
      data: [
        {id: 'Sales', nested: {value: 1500}}, 
        {id: 'Purchases', nested: {value: 500}}
      ],
      backgroundColor: [
        'rgba(99, 255, 255, 0.5)',
        'rgba(88, 116, 39, 0.5)'
      ],
      borderRadius: 1000
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

// Horizontal Bar Chart
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

// Stacked Bar Chart
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

// Line Chart
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

// Horizontal Bar Chart
var canvas10 = document.getElementById('myChart10');
var ctx10 = canvas10.getContext('2d');
const labels10 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data10 = {
  labels: labels10,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.2
  }]
};
const config10 = {
  type: 'line',
  data: data10,
  options: {
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  },
};
const myChart10 = new Chart(ctx10, config10)

// 多條線
var canvas11 = document.getElementById('myChart11');
var ctx11 = canvas11.getContext('2d');
const labels11 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data11 = {
  labels: labels11,
    datasets: [{
      label: 'First Dataset',
      data: [65, 59, 80, 81, 56, 55, 60],
      fill: false,
      borderColor: 'red'
    },
    {
      label: 'Second Dataset',
      data: [11, 23, 63, 74, 82, 81, 20],
      fill: false,
      borderColor: 'blue'
    }]

};
const config11 = {
  type: 'line',
  data: data11,
  options: {
    // indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  },
};
const myChart11 = new Chart(ctx11, config11)

// Stepped Line Chart
var canvas12 = document.getElementById('myChart12');
var ctx12 = canvas12.getContext('2d');
const labels12 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data12 = {
  labels: labels12,
    datasets: [{
      label: 'First Dataset',
      data: [65, 59, 80, 81, 56, 75, 75],
      fill: false,
      borderColor: 'red',
      stepped: true,
    }]
};
const config12 = {
  type: 'line',
  data: data12,
  options: {
    // indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  },
};
const myChart12 = new Chart(ctx12, config12)

// Dash Line Chart
var canvas13 = document.getElementById('myChart13');
var ctx13 = canvas13.getContext('2d');
const labels13 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data13 = {
  labels: labels13,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    borderDash: [5, 5]
  }]
};
const config13 = {
  type: 'line',
  data: data13,
  options: {
    // indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  },
};
const myChart13 = new Chart(ctx13, config13)

// Points Style
var canvas14 = document.getElementById('myChart14');
var ctx14 = canvas14.getContext('2d');
const labels14 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data14 = {
  labels: labels14,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    pointStyle: 'circle',
    // pointStyle 樣式：
    // circle、cross、crossRot、dash、line、rect、rectRounded、rectRot、star、triangle
    pointRadius: 10,
    pointHoverRadius: 15
  }]
};
const config14 = {
  type: 'line',
  data: data14,
  options: {
    // indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  },
};
const myChart14 = new Chart(ctx14, config14)

// Multi Axis
var canvas15 = document.getElementById('myChart15');
var ctx15 = canvas15.getContext('2d');
const labels15 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data15 = {
  labels: labels15,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    yAxisID: 'y',
  },{
    label: 'Second Dataset',
    data: [11, 23, 63, 74, 82, 81],
    fill: false,
    borderColor: 'blue',
    // hoverBorderColor: 'red',
    yAxisID: 'y1',
  }]
};
const config15 = {
  type: 'line',
  data: data15,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false, 
        },
      },
    }
  }
};
const myChart15 = new Chart(ctx15, config15)

// Responsive Charts
var canvas16 = document.getElementById('myChart16');
var ctx16 = canvas16.getContext('2d');
const labels16 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data16 = {
  labels: labels16,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    yAxisID: 'y',
  },{
    label: 'Second Dataset',
    data: [11, 23, 63, 74, 82, 81],
    fill: false,
    borderColor: 'blue',
    // hoverBorderColor: 'red',
    yAxisID: 'y1',
  }]
};
const config16 = {
  type: 'line',
  data: data16,
  options: {
    aspectRatio: 2,
    resizeDelay: 0,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false, 
        },
      },
    }
  }
};
const myChart16 = new Chart(ctx16, config16)

// Animations
var canvas17 = document.getElementById('myChart17');
var ctx17 = canvas17.getContext('2d');
const labels17 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data17 = {
  labels: labels17,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    yAxisID: 'y',
  },{
    label: 'Second Dataset',
    data: [11, 23, 63, 74, 82, 81],
    fill: false,
    borderColor: 'blue',
    // hoverBorderColor: 'red',
    yAxisID: 'y1',
  }]
};
const config17 = {
  type: 'line',
  data: data17,
  options: {
    animations: {
      tension: {
        duration: 5000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    maintainAspectRatio: false
  },

};
const myChart17 = new Chart(ctx17, config17)

// Plugins
var canvas18 = document.getElementById('myChart18');
var ctx18 = canvas18.getContext('2d');
const data18 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const image = new Image();
image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

const plugin18 = {
  id: 'custom_canvas_background_image',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {top, left, width, height} = chart.chartArea;
      const x = left + width / 2 - image.width / 2;
      const y = top + height / 2 - image.height / 2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
  }
};

const config18 = {
  type: 'doughnut',
  data: data18,
  plugins: [plugin18],
};
const myChart18 = new Chart(ctx18, config18)

// Legend
var canvas19 = document.getElementById('myChart19');
var ctx19 = canvas19.getContext('2d');
const labels19 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data19 = {
  labels: labels19,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    pointStyle: 'circle',
    pointRadius: 10,
    pointHoverRadius: 15
  }]
};
const config19 = {
  type: 'line',
  data: data19,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start'
      }
    }
  },
};
const myChart19 = new Chart(ctx19, config19)

// Title & Subtitle
var canvas20 = document.getElementById('myChart20');
var ctx20 = canvas20.getContext('2d');
const labels20 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data20 = {
  labels: labels20,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 202, 202)',
    pointStyle: 'circle',
    pointRadius: 10,
    pointHoverRadius: 15
  }]
};
const config20 = {
  type: 'line',
  data: data20,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    },
    plugins: {
      title: {
        text: 'Custom Chart Title',
        display: true,
        align: 'center',
        font: {
          size: 30,
        },
        color: 'rgba(66, 75, 118, 0.5)',
      },
      subtitle: {
        text: 'Custom Chart Subtitle',
        display: true,
        align: 'center',
        font: {
          size: 15,
        },
      }
    }
  },
};
const myChart20 = new Chart(ctx20, config20)

// tooltip
var canvas21 = document.getElementById('myChart21');
var ctx21 = canvas21.getContext('2d');
const labels21 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data21 = {
  labels: labels21,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 212, 212)',
    pointStyle: 'circle',
    pointRadius: 10,
    pointHoverRadius: 15
  }]
};
const config21 = {
  type: 'line',
  data: data21,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      }
    },
    plugins: {
      tooltip: {
        // enabled: false,
        // position: 'nearest',
        // xAlign: 'center',
        yAlign: 'top'
      }
    }
  },
};
const myChart21 = new Chart(ctx21, config21)

// Cartesian Axes：Border
var canvas22 = document.getElementById('myChart22');
var ctx22 = canvas22.getContext('2d');
const labels22 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data22 = {
  labels: labels22,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    pointStyle: 'circle',
    pointRadius: 10,
    pointHoverRadius: 15
  }]
};
const config22 = {
  type: 'line',
  data: data22,
  options: {
    aspectRatio: 0,
    scales: {
      x: {
        grid: {
          borderWidth: 4,
          color: 'red',
          borderColor: 'lightgreen',
        }
      },
      y: {
        grid: {
          borderWidth: 4,
          borderColor: 'blue'
        }
      }
    }
  }
};
const myChart22 = new Chart(ctx22, config22)

// Ticks and Tick Marks
var canvas23 = document.getElementById('myChart23');
var ctx23 = canvas23.getContext('2d');
const labels23 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data23 = {
  labels: labels23,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    pointStyle: 'circle',
    pointRadius: 10,
    pointHoverRadius: 15
  }]
};
const config23 = {
  type: 'line',
  data: data23,
  options: {
    aspectRatio: 0,
    scales: {
      x: {
        grid: {
          borderWidth: 4,
          color: 'red',
          borderColor: 'lightgreen',
        },
        ticks: {
          color: 'blue',
        }
      }
    }
  }
};
const myChart23 = new Chart(ctx23, config23)

// Radial - Angle Lines
var canvas24 = document.getElementById('myChart24');
var ctx24 = canvas24.getContext('2d');
const labels24 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data24 = {
  labels: labels24,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 3,
    pointStyle: 'circle',
    pointHoverRadius: 15
  }]
};
const config24 = {
  type: 'radar',
  data: data24,
  options: {
    scales: {
      r: {
        angleLines: {
          color: 'red'
        },
        min: 0
      }
    },
    aspectRatio: 1.5
  },
};
const myChart24 = new Chart(ctx24, config24)

// Radial - Grid Lines
var canvas25 = document.getElementById('myChart25');
var ctx25 = canvas25.getContext('2d');
const labels25 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data25 = {
  labels: labels25,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 3,
    pointStyle: 'circle',
    pointHoverRadius: 15
  }]
};
const config25 = {
  type: 'radar',
  data: data25,
  options: {
    scales: {
      r: {
        grid: {
            color: 'red'
        },
        min: 0
      }
    },
    aspectRatio: 1.5
  },
};
const myChart25 = new Chart(ctx25, config25)

// Radial - Point Labels
var canvas26 = document.getElementById('myChart26');
var ctx26 = canvas26.getContext('2d');
const labels26 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data26 = {
  labels: labels26,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 3,
    pointStyle: 'circle',
    pointHoverRadius: 15
  }]
};
const config26 = {
  type: 'radar',
  data: data26,
  options: {
    scales: {
      r: {
        pointLabels: {
            color: 'red'
        },
        min: 2
      }
    },
    aspectRatio: 1.5
  },
};
const myChart26 = new Chart(ctx26, config26)

// Radial - ticks
var canvas27 = document.getElementById('myChart27');
var ctx27 = canvas27.getContext('2d');
const labels27 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data27 = {
  labels: labels27,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 3,
    pointStyle: 'circle',
    pointHoverRadius: 15
  }]
};
const config27 = {
  type: 'radar',
  data: data27,
  options: {
    scales: {
      r: {
        ticks: {
          color: 'green'
        },
        min: 2
      }
    },
    aspectRatio: 1.5
  },
};
const myChart27 = new Chart(ctx27, config27)

// Radar Chart
var canvas28 = document.getElementById('myChart28');
var ctx28 = canvas28.getContext('2d');
const data28 = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 90],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};
const config28 = {
  type: 'radar',
  data: data28,
  options: {
    maintainAspectRatio: false,
    elements: {
      line: {
          borderWidth: 3
      }
    }
  },
};
const myChart28 = new Chart(ctx28, config28)

// Polar Area Chart
var canvas29 = document.getElementById('myChart29');
var ctx29 = canvas29.getContext('2d');
const data29 = {
  labels: [
    'Red','Green','Yellow','Grey','Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ],
  }]
};
const config29 = {
  type: 'polarArea',
  data: data29,
  options: {
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: false,
    },
    borderWidth: 5
  },
};
const myChart29 = new Chart(ctx29, config29)

// Pie Charts
var canvas30 = document.getElementById('myChart30');
var ctx30 = canvas30.getContext('2d');
const data30 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
  ],
    hoverOffset: 4
  }]
};
const config30 = {
  type: 'pie',
  data: data30,
  options: {
    maintainAspectRatio: false
  },
};
const myChart30 = new Chart(ctx30, config30)

// Doughnut Charts
var canvas31 = document.getElementById('myChart31');
var ctx31 = canvas31.getContext('2d');
const data31 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [310, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
  ],
    hoverOffset: 9
  }]
};
const config31 = {
  type: 'doughnut',
  data: data31,
  options: {
    maintainAspectRatio: false
  }
};
const myChart31 = new Chart(ctx31, config31)

// Bubble Chart
var canvas32 = document.getElementById('myChart32');
var ctx32 = canvas32.getContext('2d');
const data32 = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 10
    }, {
      x: 40,
      y: 10,
      r: 10
    },{
      x: 30,
      y: 15,
      r: 6
    }],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(100, 150, 160)',
      'rgb(50, 255, 20)',
    ]
  }]
};
const config32 = {
  type: 'bubble',
  data: data32,
  options: {
    maintainAspectRatio: false
  }
};
const myChart32 = new Chart(ctx32, config32)

// Mixed Chart Types
var canvas33 = document.getElementById('myChart33');
var ctx33 = canvas33.getContext('2d');
const data33 = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(66, 33, 196, 0.3)'
    ]
  }, {
    type: 'line',
    label: 'Line Dataset',
    data: [23, 12, 31, 50],
    fill: false,
    borderColor: 'orange'
  }]
};
const config33 = {
  type: 'line',
  data: data33,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          text: 'mm',
          display: true
        }
      },
      y1: {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false
        },
        title: {
          text: '度',
          display: true
        }
      }
    }
  }
};
const myChart33 = new Chart(ctx33, config33)

// Linear Axis
var canvas34 = document.getElementById('myChart34');
var ctx34 = canvas34.getContext('2d');
const labels34 = Utils.months({count: 7});
const data34 = {
  labels: labels34['Positive', 'Negative'],
  datasets: [{
    data: [100, -50],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};
const config34 = {
  type: 'bar',
  data: data34,
  options: {
    scales: {
      y: {
        type: 'linear',
        grace: '5%'
      }
    },
    plugins: {
      legend: false
    }
  }
};
const myChart34 = new Chart(ctx34, config34)